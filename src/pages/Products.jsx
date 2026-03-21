import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";
import { ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import aquariam from "../assets/products/aquarium.jpeg";
import aquariamFilter from "../assets/products/aquarium_filters.png";
import diskDiffuser from "../assets/products/disk_diffuser.png";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Comercial Production",
    "Household",
    "Aquarium",
    "Disk Diffuser",
    "Precision Moulds",
  ];

  const productsData = [
    {
      name: "Queens castle 4 L Aquarium",
      category: "Aquarium",
      desc: "Castle shape Fully crystal Aquarium (4L)",
      img: aquariam,
    },
    {
      name: "Aquarium Filters",
      category: "Aquarium",
      desc: "High-performance aquarium sponge filter that delivers efficient biological filtration while keeping your fish tank clean, clear, and safe for aquatic life.",
      img: aquariamFilter,
    },
    {
      name: "Disk Diffuser ",
      category: "Disk Diffuser",
      desc: "High-efficiency disc diffuser designed for uniform air distribution, delivering superior aeration performance in water treatment and aquaculture systems.",
      img: diskDiffuser,
    },
    {
      name: "CNC Aluminum Enclosure",
      category: "Industrial",
      desc: "IP68 rated milled aluminum casing for sensitive outdoor electronics and sensors.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Precision Gear Assembly",
      category: "Industrial",
      desc: "Micro-tolerance CNC machined alloy gears built for continuous high-stress operation.",
      img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bulk Storage Containers",
      category: "Household",
      desc: "Food-grade high-density thermoplastic storage bins engineered for logistics and retail.",
      img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Automotive Connector Housing",
      category: "Industrial",
      desc: "Heat-resistant injection molded connectors designed for standard automotive arrays.",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full bg-zinc-50 font-sans text-zinc-900 pt-24 min-h-screen flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-zinc-950 to-zinc-950"></div>
          <div className="absolute inset-0 z-10 bg-noise mix-blend-overlay opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            Product <span className="text-primary">Catalogue & Services</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. PRODUCT GRID SECTION */}
      <section className="py-16 md:py-24 bg-zinc-50 flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-white p-4 rounded-2xl shadow-sm border border-zinc-200">
            <div className="flex items-center gap-2 text-zinc-500 font-bold px-4">
              <Filter size={20} />
              <span className="uppercase tracking-wider text-sm">
                Filter Category:
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-zinc-900 text-white shadow-md"
                      : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            key={activeFilter} // Re-triggers stagger animation on filter change
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredProducts.map((prod, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-zinc-200 group relative flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500"
              >
                {/* Image Container */}
                <div className="relative h-[250px] overflow-hidden bg-zinc-100">
                  <img
                    loading="lazy"
                    src={prod.img}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Always-on Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                    Bulk Order Only
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <Link
                      to="/request-quote"
                      state={{ productName: prod.name }}
                      className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-zinc-900 transition-colors"
                    >
                      Request Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1 relative z-10 bg-white">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                    {prod.category}
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-3 tracking-tight">
                    {prod.name}
                  </h3>
                  <p className="text-sm font-medium text-zinc-500 leading-relaxed mb-6 flex-1">
                    {prod.desc}
                  </p>

                  {/* Mobile-visible Button */}
                  <Link
                    to="/request-quote"
                    state={{ productName: prod.name }}
                    className="w-full text-center bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-900 py-3 rounded-xl font-bold transition-colors duration-300"
                  >
                    Quick Inquiry
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
