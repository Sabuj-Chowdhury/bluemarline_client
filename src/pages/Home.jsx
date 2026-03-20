import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Factory, Settings, Wrench, CheckCircle2, 
  ArrowRight, MessageCircle, PackageOpen, 
  ClipboardList, PenTool, Truck, Car, Cpu, 
  ShoppingBag, HardHat, ShieldCheck, Award
} from 'lucide-react';
import { 
  fadeUp, staggerContainer, slideInLeft, 
  wordsStaggerContainer, letterStagger, floatParticle
} from '../animations';
import Stats from '../components/shared/Stats';
import Process from '../components/shared/Process';

const TiltCard = ({ children, className, variants }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    x.set(mouseXPos / width);
    y.set(mouseYPos / height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      variants={variants}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const headingText = "Bulk Plastic Manufacturing & CNC Solutions";
  const words = headingText.split(" ");

  return (
    <div className="w-full bg-zinc-50 overflow-hidden font-sans text-zinc-900">
      
      {/* 1. HERO SECTION (Premium Split Layout) */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center pt-24 bg-zinc-950 overflow-hidden">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-50 mix-blend-screen"
            style={{ 
              backgroundImage: 'radial-gradient(circle at center, rgba(37,99,235,0.2) 0%, transparent 60%)',
              backgroundSize: '200% 200%' 
            }}
          />
        </div>
        
        {/* Animated Grain/Noise Overlay */}
        <div className="absolute inset-0 z-10 bg-noise pointer-events-none mix-blend-overlay opacity-30"></div>

        {/* Floating Glowing Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div variants={floatParticle} custom={1} animate="animate" className="absolute top-[20%] left-[10%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
          <motion.div variants={floatParticle} custom={1.5} animate="animate" className="absolute top-[60%] left-[5%] w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
          <motion.div variants={floatParticle} custom={0.8} animate="animate" className="absolute top-[30%] right-[40%] w-1.5 h-1.5 bg-blue-300 rounded-full shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
          <motion.div variants={floatParticle} custom={2} animate="animate" className="absolute bottom-[20%] right-[10%] w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
        </div>

        {/* Floating Blurred Depth Shapes */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[15%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/10 rounded-full blur-[120px] z-0 pointer-events-none"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[5%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-primary/10 rounded-full blur-[100px] z-0 pointer-events-none"
        />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="max-w-2xl py-12 lg:py-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-xl backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              Premium B2B Manufacturing
            </motion.div>
            
            <motion.h1 
              variants={wordsStaggerContainer}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter perspective-[1000px]"
            >
              {words.map((word, i) => (
                <motion.span key={i} variants={letterStagger} className="inline-block mr-3 transform-style-3d">
                  {word === "Manufacturing" || word === "Solutions" ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary drop-shadow-[0_0_20px_rgba(37,99,235,0.5)]">{word}</span>
                  ) : word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-zinc-400 mb-10 font-medium leading-relaxed max-w-lg"
            >
              OEM | Custom Mold | Bulk Production. Precision engineering and scalable infrastructure built for enterprise reliability.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap items-center gap-5"
            >
              <Link to="/contact" className="relative group overflow-hidden bg-primary text-white px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2">
                <span className="relative z-10 flex items-center gap-2">Request Quote <ArrowRight size={18} /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </Link>
              <Link to="/products" className="bg-transparent border border-zinc-700 text-white hover:border-zinc-500 hover:bg-zinc-800/50 px-8 py-4 rounded-full text-base font-bold transition-all flex items-center gap-2">
                View Products
              </Link>
            </motion.div>
          </div>

          {/* Right: Premium Image + Parallax */}
          <motion.div 
            style={{ y: yBg, opacity: opacityBg }}
            className="hidden lg:block relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/50 group will-change-transform"
          >
            {/* Overlay Gradient (dark blue -> transparent) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900/40 to-transparent z-10 transition-opacity duration-500 group-hover:from-zinc-950/80"></div>
            
            <motion.img 
              style={{ y: yImage }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 8, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="High-end CNC Manufacturing" 
              className="w-full h-full object-cover relative z-0 origin-center filter contrast-125 scale-110"
            />
            
            {/* Overlay Glassmorphism Stat */}
            <div className="absolute bottom-8 left-8 p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 z-20 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Factory className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">Weekly Output</p>
                  <p className="text-white text-2xl font-black">2.5M+ Units</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. TRUST / STATS SECTION (Premium Upgrade) */}
      <Stats />

      {/* 3. SERVICES SECTION (Premium Upgrade) */}
      <section className="py-32 bg-zinc-50 relative z-20 overflow-hidden">
        {/* Soft Blue Glow behind sections */}
        <motion.div 
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-full md:w-[80vw] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"
        />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight uppercase">Core Capabilities</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-zinc-500 font-medium">Precision engineered industrial solutions built for compliance, durability, and high-volume scalability.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: "Plastic Manufacturing", desc: "High-volume injection molding utilizing industrial-grade polymers for aerospace, automotive, and consumer sectors.", icon: Factory },
              { title: "CNC Machining", desc: "5-axis CNC milling and precision turning delivering micro-tolerance geometries for critical components.", icon: Settings },
              { title: "OEM / Custom Orders", desc: "Turnkey product development from CAD prototyping to contracted mass production and assembly.", icon: Wrench },
            ].map((service, i) => (
              <TiltCard 
                key={i}
                variants={fadeUp}
                className="relative group bg-white p-10 rounded-2xl shadow-lg border border-zinc-200/60 overflow-hidden will-change-transform transform-style-3d hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-500"
              >
                {/* Hover Gradient Border Effect via pseudo-element simulation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-transparent group-hover:border-primary/30 rounded-2xl pointer-events-none z-10"></div>
                
                <div className="relative z-20 flex flex-col h-full transform translate-z-[50px]">
                  <div className="h-16 w-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 shadow-inner relative group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-shadow duration-500">
                    <service.icon size={30} className="text-white relative z-10" />
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-primary/40 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2"></div>
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed leading-[1.8] flex-1">{service.desc}</p>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <Process />

      {/* 5. WHY CHOOSE US (Upgrade) */}
      <section className="py-32 bg-white border-y border-zinc-200/50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-zinc-900 mb-8 tracking-tight uppercase">The Industrial Standard</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-zinc-500 mb-12 font-medium leading-relaxed">
                Operating at the intersection of rigorous ISO compliance and unprecedented manufacturing speed. Our infrastructure is heavily optimized for global enterprise supply chains.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { title: "Bulk Capacity", desc: "Automated lines running 24/7." },
                  { title: "Custom Mold Design", desc: "In-house tooling engineering." },
                  { title: "B2B Pricing", desc: "Aggressive tiered cost reduction." },
                  { title: "Fast Logistics", desc: "Global fulfillment capabilities." },
                  { title: "Export Ready", desc: "Strict international compliance." },
                  { title: "ISO Certified", desc: "End-to-end quality control." }
                ].map((point, i) => (
                  <motion.div 
                    key={i} 
                    variants={slideInLeft} 
                    className="flex items-start gap-4 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-300"
                    >
                      <CheckCircle2 className="text-primary group-hover:text-white transition-colors" size={16} />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">{point.title}</h4>
                      <p className="text-sm text-zinc-500 font-medium">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Industrial Image Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl translate-y-8">
                <img loading="lazy" src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Factory Floor" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl -translate-y-8">
                <img loading="lazy" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="CNC Precision" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* 6. INDUSTRIES WE SERVE (New) */}
      <section className="py-32 bg-zinc-900 relative z-20 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Industries We Serve</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-zinc-400 font-medium">Engineered solutions meeting strict regulatory standards across core global sectors.</p>
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { name: "Automotive", desc: "High-stress polymers & precise CNC.", icon: Car },
              { name: "Electronics", desc: "Heat-resistant casings & micro-parts.", icon: Cpu },
              { name: "Consumer Goods", desc: "High-volume structural plastics.", icon: ShoppingBag },
              { name: "Industrial Equip.", desc: "Heavy-duty wear components.", icon: HardHat },
            ].map((ind, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="group relative bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
              >
                {/* Glow Background */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none z-0"></div>
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                <div className="relative z-10">
                  <ind.icon size={48} className="text-zinc-600 group-hover:text-primary transition-colors duration-500 mb-6 drop-shadow-[0_0_15px_rgba(37,99,235,0)] group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                  <h4 className="text-2xl font-black text-white mb-3">{ind.name}</h4>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FEATURED PRODUCTS (Enhance) */}
      <section className="py-32 bg-zinc-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-zinc-200 pb-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight uppercase">Industrial Catalog</h2>
              <p className="text-lg text-zinc-500 font-medium">Standardized components strictly manufactured for wholesale procurement.</p>
            </div>
            <Link to="/products" className="group flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-wider hover:text-primary transition-colors">
              Full Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { name: "Industrial Spool 500", desc: "Heavy-duty poly spool for industrial cabling.", img: "https://images.unsplash.com/photo-1544439169-dcbcfd70f20d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Precision Gear Set", desc: "CNC machined alloy gear components.", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Polymer Enclosures", desc: "IP68 rated structural plastic casework.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Custom Fasteners", desc: "High-tensile non-corrosive fasteners.", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            ].map((prod, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-zinc-100 group relative flex flex-col h-full"
              >
                {/* Image & Overlay */}
                <div className="relative h-64 w-full overflow-hidden bg-zinc-200">
                  {/* Permanent Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                  <div className="absolute top-4 right-4 z-20 bg-zinc-900 border border-zinc-700 text-white text-xs font-black px-3 py-1.5 rounded-full tracking-widest shadow-lg animate-pulse">
                    BULK ONLY
                  </div>
                  <img loading="lazy" src={prod.img} alt={prod.name} className="w-full h-full object-cover relative z-0 group-hover:scale-110 transition-transform duration-700 ease-out" />
                  
                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-sm">
                    <Link to="/contact" className="bg-primary text-white font-black uppercase tracking-wider py-4 px-8 rounded-full transform translate-y-4 group-hover:translate-y-0 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-primary/50 hover:bg-white hover:text-zinc-900 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                      Request Quote
                    </Link>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 flex flex-col flex-1 relative z-20">
                  <h3 className="font-black text-zinc-900 text-xl mb-3">{prod.name}</h3>
                  <p className="text-zinc-500 font-medium text-sm leading-relaxed">{prod.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA SECTION (Premium) */}
      <section className="relative py-32 bg-zinc-950 overflow-hidden">
        {/* Animated Shifting Gradient Background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-30 mix-blend-screen"
            style={{ 
              backgroundImage: 'linear-gradient(-45deg, #09090b, #1e3a8a, #09090b, #1d4ed8)',
              backgroundSize: '400% 400%' 
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/40 backdrop-blur-3xl border border-zinc-800 p-12 md:p-20 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-8 border border-primary/20 shadow-[0_0_20px_rgba(37,99,235,0.2)] aspect-square">
              <PackageOpen size={40} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-tight">Scale Your Production Infrastructure</h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
              Initiate a custom OEM project or request high-volume standardized components immediately. Our engineers are ready.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {/* Glowing CTA Button */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Link to="/contact" className="relative w-full sm:w-auto bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white px-10 py-5 rounded-full text-lg font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                  Contact Sales HQ <ArrowRight size={22} className="text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Pulsing WhatsApp CTA */}
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="relative group w-full sm:w-auto bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/20 shadow-[0_0_15px_rgba(37,211,102,0.1)] hover:shadow-[0_0_25px_rgba(37,211,102,0.3)] text-white px-10 py-5 rounded-full text-lg font-black uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-3 overflow-hidden">
                {/* Wave fill effect */}
                <div className="absolute inset-0 bg-[#25D366]/20 w-full h-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                
                <motion.div className="relative z-10" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <MessageCircle size={24} className="text-[#25D366] group-hover:text-white transition-colors" />
                </motion.div>
                <span className="relative z-10">WhatsApp Direct</span>

                {/* Ping notification dot */}
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-[#25D366] border-2 border-zinc-950"></span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
