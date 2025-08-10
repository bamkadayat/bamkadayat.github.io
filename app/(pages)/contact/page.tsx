import Contact from "@/components/contact";
import ContactAddr from "@/components/contact-Addr";

export default function ContactPage() {
  return (
    <div className="container">
      <div className="page-margin grid md:grid-cols-2 md:gap-[90px] mb-10">
        <div className="mb-5 md:mb-0">
          <Contact />
        </div>
        <div className="md:justify-center md:mt-[52px]">
          <ContactAddr />
        </div>
      </div>
    </div>
  );
}
