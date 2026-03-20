import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slideInLeft } from '../animations';
import Process from '../components/shared/Process';
import { CheckCircle2, Factory, Settings, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesData = [
    {
      id: "plastic-manufacturing",
      title: "Plastic Manufacturing",
      desc: "High-volume precision injection molding utilizing industrial-grade polymers. We deliver consistent tolerances for aerospace, automotive, and consumer electronics at enterprise scale.",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bullets: [
        "ISO 9001:2015 certified production lines",
        "Multi-cavity high-speed tooling",
        "Thermoplastic and thermosetting polymers",
        "Insert and over-molding capabilities",
        "Automated robotics extraction"
      ]
    },
    {
      id: "cnc-machining",
      title: "CNC Machining",
      desc: "State-of-the-art 5-axis CNC milling and precision turning. Our advanced facilities handle complex geometries, delivering micro-tolerance components across metals and rugged plastics.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bullets: [
        "5-axis continuous milling",
        "Swiss-style precision turning",
        "Tolerance adherence to ±0.0001”",
        "Rapid prototyping to mass production",
        "Extensive CMM quality inspection"
      ]
    },
    {
      id: "oem-custom-production",
      title: "OEM / Custom Production",
      desc: "Turnkey product development from initial CAD prototyping to contracted mass production and final assembly. We act as your silent manufacturing partner.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bullets: [
        "White-label B2B manufacturing",
        "In-house mold flow analysis",
        "Custom packaging & global logistics",
        "Strict IP and design protection",
        "Scalable staggered delivery options"
      ]
    }
  ];

  return (
    <div className="w-full bg-zinc-50 font-sans text-zinc-900 pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Industrial Machinery" 
            className="w-full h-full object-cover opacity-20 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium"
          >
            End-to-end industrial manufacturing capabilities designed for global enterprise scale and precision.
          </motion.p>
        </div>
      </section>

      {/* 2. DETAILED SERVICES */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="space-y-32">
            {servicesData.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Floating Icon Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-zinc-950/90 backdrop-blur-md rounded-2xl flex items-center justify-center border border-zinc-800 z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                      <service.icon className="text-primary" size={32} />
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="w-full lg:w-1/2"
                >
                  <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-zinc-900 mb-6 tracking-tight">{service.title}</motion.h2>
                  <motion.p variants={fadeUp} className="text-lg text-zinc-500 font-medium leading-relaxed mb-8">
                    {service.desc}
                  </motion.p>
                  
                  <div className="space-y-4 mb-10">
                    {service.bullets.map((bullet, i) => (
                      <motion.div key={i} variants={slideInLeft} className="flex items-start gap-4 group">
                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary transition-colors duration-300">
                          <CheckCircle2 className="text-primary group-hover:text-white transition-colors" size={12} />
                        </div>
                        <span className="text-zinc-700 font-bold">{bullet}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div variants={fadeUp}>
                    <Link to="/contact" className="inline-flex relative group overflow-hidden bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-bold transition-all hover:bg-primary shadow-lg hover:shadow-primary/30">
                      <span className="relative z-10">Discuss Project Requirements</span>
                    </Link>
                  </motion.div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION (Reusing from Shared) */}
      <Process />
      
    </div>
  );
};

export default Services;
