import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft } from "../animations";
import { MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full bg-zinc-50 font-sans text-zinc-900 pt-24 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee2268bddb25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Factory Office"
            className="w-full h-full object-cover opacity-20 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            Contact <span className="text-primary">Sales</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium"
          >
            Direct access to our engineering and enterprise fulfillment teams.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Info & Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-black text-zinc-900 mb-8 tracking-tight"
              >
                Factory Location
              </motion.h2>

              <div className="space-y-8 mb-12">
                <motion.div
                  variants={slideInLeft}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 text-lg mb-1">
                      Factory Location
                    </h4>
                    <p className="text-zinc-500 font-medium leading-relaxed">
                      AIENTA, DOLESHWAR, WORD NO-2, SOUTH KERANIGONG
                      <br />
                      DHAKA-1310, BD.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInLeft}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 text-lg mb-1">
                      Direct Line
                    </h4>
                    <p className="text-zinc-500 font-medium leading-relaxed">
                      +880 174 0505011
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInLeft}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 text-lg mb-1">
                      Sales Inquiry
                    </h4>
                    <p className="text-zinc-500 font-medium leading-relaxed">
                      bluemarlinbd18@gmail.com
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Map Placeholder */}
              <motion.div
                variants={fadeUp}
                className="w-full h-[300px] bg-zinc-200 rounded-3xl overflow-hidden shadow-inner relative group border border-zinc-300"
              >
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Map Location"
                  className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full border-4 border-white shadow-[0_0_20px_rgba(37,99,235,0.8)] flex items-center justify-center animate-bounce">
                  <MapPin className="text-white" size={20} />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-zinc-100 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-[50px] pointer-events-none"></div>

                <h3 className="text-2xl font-black text-zinc-900 mb-2 relative z-10">
                  Request a Quote
                </h3>
                <p className="text-zinc-500 mb-8 font-medium text-sm relative z-10">
                  Provide your specifications for rapid B2B pricing.
                </p>

                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
                      placeholder="Enterprise LLC"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                      Service Interest
                    </label>
                    <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium text-zinc-700 appearance-none">
                      <option>Plastic Manufacturing (Bulk)</option>
                      <option>CNC Machining (Precision)</option>
                      <option>OEM Custom Tooling</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows="4"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium resize-none"
                      placeholder="Provide volume, material preferences, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Request{" "}
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </form>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="mt-8 bg-zinc-900 rounded-2xl p-6 flex items-center justify-between border border-zinc-800 shadow-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-green-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">
                      Need immediate assistance?
                    </h4>
                    <p className="text-zinc-400 text-sm font-medium">
                      Chat with our engineering team directly.
                    </p>
                  </div>
                </div>
                <button className="relative z-10 hidden sm:block bg-white text-zinc-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors shadow-lg">
                  WhatsApp Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
