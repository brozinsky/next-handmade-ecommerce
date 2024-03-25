import Contact from "@/components/layout/contact/Contact";
import PageWrapper from "@/components/utils/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <div className="min-h-screen-footer flex-center-center">
        <Contact page="contact"/>
      </div>
    </PageWrapper>
  );
}
