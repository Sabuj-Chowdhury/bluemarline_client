import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/+8801740505011" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] cursor-pointer group hover:bg-green-400 transition-colors"
    >
      <MessageSquare className="text-white w-6 h-6" />
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-xl">
        Quick Quote via WhatsApp
        {/* Triangle pointer */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-zinc-900"></div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
