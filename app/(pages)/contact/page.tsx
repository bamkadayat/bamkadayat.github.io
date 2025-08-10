import dynamic from "next/dynamic";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800/50 rounded-lg" />,
});

const ContactAddr = dynamic(() => import("@/components/contact-Addr"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-800/50 rounded-lg" />,
});

export default function ContactPage() {
  return (
    <div className="container">
      <div className="page-margin grid md:grid-cols-2 md:gap-[90px] mb-10">
        <div className="mb-5 md:mb-0 md:ml-3">
          <Contact />
        </div>
        <div className="md:justify-center md:mt-[52px]">
          <ContactAddr />
        </div>
      </div>
    </div>
  );
}