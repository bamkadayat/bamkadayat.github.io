import React from "react";
import { IoSend } from "react-icons/io5";

export default function SubmitBtn({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#FFA324] text-white font-semibold rounded-xl 
               transition-all duration-300 hover:bg-[#ff8c00] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FFA324]/25 
               disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <span>Send Message</span>
          <IoSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" size={18} />
        </>
      )}
    </button>
  );
}