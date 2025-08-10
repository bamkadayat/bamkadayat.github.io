import dynamic from "next/dynamic";
import { MdContactMail } from "react-icons/md";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800/50 rounded-lg" />,
});

const ContactAddr = dynamic(() => import("@/components/contact-Addr"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-800/50 rounded-lg" />,
});

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen py-16 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-[#FFA324]/10 rounded-2xl mb-4">
            <MdContactMail className="text-[#FFA324]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you&apos;d like to collaborate or just want to say hello!
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div>
            <Contact />
          </div>
          <div>
            <ContactAddr />
          </div>
        </div>

        {/* Background Decorations */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#FFA324]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}