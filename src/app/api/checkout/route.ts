import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: any) => {
  const { products } = await request.json();
  const data: any[] = products;

  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() == product?.name?.toLowerCase()
      );

      if (stripeProduct == undefined) {
        await stripe.products.create({
          name: product.name,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "pln",
          },
        });
      }
    }
  } catch (error) {
    console.error("Error in creating a new product", error);
    throw error;
  }

  activeProducts = await getActiveProducts();
  let stripeItems: any = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) => prod?.name?.toLowerCase() == product?.name?.toLowerCase()
    );

    console.log(stripeProduct);

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: `${process.env.BASE_URL}/dziekujemy-za-zamowienie`,
    cancel_url: `${process.env.BASE_URL}/cancel`,
    locale: "pl",
  });

  return NextResponse.json({ url: session.url });
};
