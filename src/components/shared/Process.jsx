import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations';
import { ClipboardList, PenTool, Factory, Truck } from 'lucide-react';

const Process = () => {
  return (
    <section className="py-32 bg-white relative z-20 border-b border-zinc-200">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight uppercase">Production Process</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-1 bg-zinc-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-primary origin-left"
            />
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { title: "Submit Requirements", desc: "Send CAD files & volume specs.", icon: ClipboardList },
              { title: "Design & Mold", desc: "Engineering and rapid tooling.", icon: PenTool },
              { title: "Bulk Production", desc: "Automated 24/7 manufacturing.", icon: Factory },
              { title: "Global Delivery", desc: "Logistics and final fulfillment.", icon: Truck }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-zinc-100 flex items-center justify-center mb-6 shadow-xl group-hover:border-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                  <step.icon size={32} className="text-zinc-400 group-hover:text-primary transition-colors hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-black text-sm border-2 border-white shadow-md">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-xl font-black text-zinc-900 mb-3">{step.title}</h4>
                <p className="text-zinc-500 font-medium text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
