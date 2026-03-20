import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slideInLeft } from '../animations';
import Stats from '../components/shared/Stats';
import { Target, Eye, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full bg-zinc-50 font-sans text-zinc-900 pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Factory Interior" 
            className="w-full h-full object-cover opacity-30 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            About <span className="text-primary">BlueMarlinBD</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium"
          >
            Manufacturing excellence & OEM solutions. We deliver precision-engineered industrial components at scale.
          </motion.p>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight uppercase">Who We Are</motion.h2>
              <motion.div variants={fadeUp} className="w-24 h-1 bg-primary mb-8"></motion.div>
              <motion.p variants={fadeUp} className="text-lg text-zinc-500 leading-relaxed mb-6 font-medium">
                Established over a decade ago, BlueMarlinBD has grown into a premier global manufacturer of bulk plastics and CNC machined components. We specialized originally in heavy-duty poly spools before successfully expanding into high-tolerance consumer and automotive OEM parts.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-zinc-500 leading-relaxed font-medium">
                Our infrastructure is built on automated 24/7 production lines, stringent ISO compliance, and an unwavering commitment to rapid tooling and fulfillment. We are the silent engine behind some of the world's leading industrial supply chains.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Engineers at work" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Mission */}
            <motion.div variants={slideInLeft} className="bg-white p-12 rounded-3xl shadow-lg border border-zinc-100 flex flex-col group hover:shadow-2xl transition-shadow duration-500">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 shadow-inner group-hover:bg-primary transition-colors duration-500">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-black text-zinc-900 mb-4 uppercase tracking-tight">Our Mission</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">
                To empower global enterprises by delivering flawless manufacturing capabilities, rapid custom tooling, and aggressive cost-efficiency through automated, 24/7 industrial production lines.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={slideInLeft} className="bg-white p-12 rounded-3xl shadow-lg border border-zinc-100 flex flex-col group hover:shadow-2xl transition-shadow duration-500">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 shadow-inner group-hover:bg-primary transition-colors duration-500">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-black text-zinc-900 mb-4 uppercase tracking-tight">Our Vision</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">
                To be the undisputed standard for B2B contract manufacturing, where uncompromising quality control meets zero-latency global fulfillment protocols.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 bg-zinc-900 relative z-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: "Quality", desc: "ISO-standard tolerance checks at every production node.", icon: ShieldCheck },
              { title: "Innovation", desc: "Investing heavily in 5-axis robotics and automation.", icon: Zap },
              { title: "Trust", desc: "Transparent timelines and guaranteed contract fulfillment.", icon: HeartHandshake }
            ].map((value, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800 text-center flex flex-col items-center group hover:border-primary/50 transition-colors duration-500">
                <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-6 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-xl">
                  <value.icon className="text-primary" size={36} />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-wide">{value.title}</h4>
                <p className="text-zinc-400 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. STATS SECTION (Reusing from Home) */}
      <Stats />
      
    </div>
  );
};

export default About;
