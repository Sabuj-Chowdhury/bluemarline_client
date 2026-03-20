import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Assuming Hero is dark now, we use white text when at top.
  const isDarkHero = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
        ? 'bg-zinc-950/80 backdrop-blur-2xl py-3 border-zinc-800/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative flex items-center justify-between z-50">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50 group">
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all">
            <span className="text-white font-extrabold text-xl leading-none">BM</span>
          </div>
          <span className={`text-2xl font-black tracking-tight transition-colors duration-500 ${scrolled ? 'text-white' : (isDarkHero ? 'text-white' : 'text-zinc-900')}`}>
            BlueMarlin<span className="text-primary text-xl">BD</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const textColorInactive = scrolled ? 'text-zinc-400 hover:text-white' : (isDarkHero ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-zinc-900');
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-bold tracking-wider transition-all duration-300 uppercase hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] ${
                  isActive ? (scrolled || isDarkHero ? 'text-white drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]' : 'text-zinc-900') : textColorInactive
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary rounded-t-full shadow-[0_0_12px_rgba(37,99,235,1)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
          <Link 
            to="/contact" 
            className="relative flex items-center justify-center px-7 py-2.5 rounded-full text-sm font-bold tracking-wide bg-zinc-950 text-white hover:bg-zinc-900 border border-zinc-800 transition-all font-sans"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden z-50 p-2 transition-colors ${scrolled || isDarkHero ? 'text-white' : 'text-zinc-900'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} className="text-white relative z-50" /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Navigation (Slide in from Right) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-zinc-950/95 backdrop-blur-2xl z-40 lg:hidden flex flex-col pt-32 px-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 w-full relative z-40">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                    className="w-full"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full py-4 text-3xl font-black uppercase tracking-wider border-b border-zinc-800/80 transition-colors ${
                        isActive ? 'text-white drop-shadow-md' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {link.name}
                      {isActive && <span className="inline-block ml-3 w-2 h-2 rounded-full bg-primary align-middle shadow-[0_0_10px_rgba(37,99,235,0.8)]"></span>}
                    </Link>
                  </motion.div>
                )
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full mt-8"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="relative flex w-full justify-center bg-zinc-950 text-white px-6 py-5 rounded-full text-xl font-bold uppercase tracking-wider border border-zinc-800"
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            </nav>
            
            <div className="mt-auto mb-10 text-center text-sm text-zinc-500 pt-10 font-bold uppercase tracking-widest">
              <p>BlueMarlinBD Manufacturing</p>
              <p className="text-zinc-600 mt-1">Industrial B2B Solutions</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
