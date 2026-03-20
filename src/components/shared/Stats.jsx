import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../animations';
import { ShieldCheck, Award } from 'lucide-react';

export const AnimatedCounter = ({ to, duration = 2.5 }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 15,
    mass: 1,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, springValue, to]);

  return <motion.span ref={nodeRef}>{displayValue}</motion.span>;
};

const Stats = () => {
  return (
    <>
      <section className="py-16 bg-zinc-950 border-b border-zinc-800/50 relative z-20 overflow-hidden">
        {/* Depth Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-zinc-950 to-zinc-950 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0"
          >
            {[
              { end: 10000, suffix: "+", label: "Monthly Capacity" },
              { end: 50, suffix: "+", label: "Global B2B Clients" },
              { end: 15, suffix: "+", label: "Years Experience" },
              { end: 100, suffix: "%", label: "Export Ready Standards" }
            ].map((stat, idx) => (
              <React.Fragment key={idx}>
                <motion.div variants={fadeUp} className="text-center px-4 flex-1">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    <AnimatedCounter to={stat.end} duration={2.5} />
                    <span className="text-primary">{stat.suffix}</span>
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
                {/* Animated Divider */}
                {idx < 3 && (
                  <motion.div 
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 + idx * 0.1 }}
                    className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-zinc-700 to-transparent origin-center"
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2.5 TRUST SECTION */}
      <section className="py-12 bg-zinc-950 border-b border-zinc-900 relative z-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-50 backdrop-blur-3xl z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-primary w-10 h-10" />
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-widest">Trusted by B2B Clients</p>
                <p className="text-zinc-500 text-xs font-medium">Global Manufacturing & Supply</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['ISO 9001:2015', 'CE Certified', 'Export Ready', 'RoHS Compliant'].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-default">
                  <Award className="text-zinc-400 group-hover:text-primary transition-colors" size={24} />
                  <span className="text-zinc-300 font-bold text-sm drop-shadow-md">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
