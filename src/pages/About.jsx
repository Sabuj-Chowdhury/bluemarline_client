import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";
import Stats from "../components/shared/Stats";
import { Target, Eye, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

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
            About <span className="text-primary">BlueMarlin</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium"
          >
            Manufacturing excellence & OEM solutions.
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
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight uppercase"
              >
                Who We Are
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="w-24 h-1 bg-primary mb-8"
              ></motion.div>
              <motion.p
                variants={fadeUp}
                className="text-lg text-zinc-500 leading-relaxed mb-6 font-medium"
              >
                Welcome to Blue Marlin Established in 2019, Blue Marlin has
                grown into a trusted name in manufacturing, delivering
                quality-driven solutions across multiple industries. We
                specialize in the production of high-performance aquarium
                products, advanced ETP (Effluent Treatment Plant) components,
                durable plastic household goods, and reliable commercial
                packaging solutions. With a strong focus on innovation,
                precision engineering, and customer satisfaction, our modern
                production facilities are equipped with advanced machinery
                including injection molding, CNC, and mold-making systems. This
                allows us to maintain consistent quality while meeting diverse
                client requirements.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-lg text-zinc-500 leading-relaxed font-medium"
              >
                At Blue Marlin, we are committed to sustainability, efficiency,
                and continuous improvement—ensuring that every product we
                deliver meets both industry standards and customer expectations.
                Whether you are looking for aquatic solutions, industrial
                components, or everyday plastic products, we are your dependable
                manufacturing partner.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Engineers at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-32 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Mission */}
            <motion.div
              variants={fadeUp}
              className="group relative h-full"
            >
              <div className="relative h-full bg-white p-8 md:p-12 rounded-[2rem] shadow-lg border border-zinc-200 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default">
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="text-white" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="w-12 h-1 bg-primary mb-6"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 uppercase tracking-wide">
                      Our Mission
                    </h3>
                    <p className="text-base md:text-lg text-zinc-600 font-medium leading-relaxed max-w-prose">
                      "To manufacture high-quality aquarium, aquaculture, household, and plastic moulded products through advanced mould-making and OEM production services, ensuring innovation, environmental responsibility, and customer satisfaction."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              className="group relative h-full"
            >
              <div className="relative h-full bg-white p-8 md:p-12 rounded-[2rem] shadow-lg border border-zinc-200 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default">
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="text-white" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="w-12 h-1 bg-primary mb-6"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 uppercase tracking-wide">
                      Our Vision
                    </h3>
                    <p className="text-base md:text-lg text-zinc-600 font-medium leading-relaxed max-w-prose">
                      "To become a trusted global manufacturer in aquarium, aquaculture, household, and plastic moulding industries—recognized for innovation, quality, and sustainable industrial growth."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 bg-zinc-900 relative z-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
              Core Values
            </h2>
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
              {
                title: "Quality",
                desc: "ISO-standard tolerance checks at every production node.",
                icon: ShieldCheck,
              },
              {
                title: "Innovation",
                desc: "Investing heavily in 5-axis robotics and automation.",
                icon: Zap,
              },
              {
                title: "Trust",
                desc: "Transparent timelines and guaranteed contract fulfillment.",
                icon: HeartHandshake,
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800 text-center flex flex-col items-center group hover:border-primary/50 transition-colors duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-6 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-xl">
                  <value.icon className="text-primary" size={36} />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-wide">
                  {value.title}
                </h4>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  {value.desc}
                </p>
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
