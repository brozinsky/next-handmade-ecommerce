import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ReceiptEmail from "@/components/utils/email/ReceiptEmail";
import OrderEmail from "@/components/utils/email/OrderEmail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature")!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook error:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    const meta = paymentIntent.metadata || {};

    try {
      const products = meta.products ? JSON.parse(meta.products) : [];

      const emailPayload = {
        email: meta.email,
        fullName: `${meta.name} ${meta.secondName}`,
        name: meta.name,
        secondName: meta.secondName,
        phone: meta.phone,
        address: meta.address,
        postalCode: meta.postalCode,
        city: meta.city,
        shipping: meta.shipping,
        shippingPrice: meta.shippingPrice,
        products,
      };

      const clientEmail = await render(ReceiptEmail(emailPayload), {
        pretty: true,
      });

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "mateusz0brzezinski@gmail.com", // TODO change to dynamic
        subject: "Twoje zamówienie zostało odebrane",
        html: clientEmail,
      });

      const receiptMail = await render(OrderEmail(emailPayload), {
        pretty: true,
      });

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "mateusz0brzezinski@gmail.com", // TODO change to dynamic
        subject: "Twoje zamówienie zostało odebrane",
        html: receiptMail,
      });

      console.log("✅ Email sent after payment success.");
    } catch (err) {
      console.error("❌ Error sending email in webhook:", err);
      return new NextResponse("Error processing webhook", { status: 500 });
    }
  }

  return new NextResponse("Webhook received successfully", { status: 200 });
}
