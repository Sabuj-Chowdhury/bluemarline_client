import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Factory } from "lucide-react";
import logo from "../../assets/logo/blue_marlin_logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <img src={logo} alt="" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                BlueMarlin
              </span>
            </Link>
            <p className="text-zinc-400 font-medium leading-relaxed mb-6">
              Delivering bulk plastic manufacturing, OEM custom molds, and CNC
              machining solutions to global enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Products", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-zinc-400 hover:text-primary transition-colors font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Core Services</h4>
            <ul className="space-y-4">
              <li className="text-zinc-400 font-medium">
                Plastic Manufacturing
              </li>
              <li className="text-zinc-400 font-medium">CNC Machining</li>
              <li className="text-zinc-400 font-medium">OEM / Custom Orders</li>
              <li className="text-zinc-400 font-medium">Rapid Prototyping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact HQ</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <div className="text-xs leading-relaxed">
                  <p className="font-bold text-zinc-200 mb-1 tracking-wider uppercase">Address</p>
                  <p>AIENTA, DOLESHWAR, WORD NO-2, SOUTH KERANIGONG, DHAKA-1310, BD</p>
                </div>
              </li>
               <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="font-medium text-sm">bluemarlinbd18@gmail.com</span>
              </li>
              
              <li className="flex items-center gap-3 text-zinc-400 pt-2">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="font-medium text-sm">+8801740505011</span>
              </li>

             
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 font-medium text-sm">
            &copy; {currentYear} BlueMarlinBD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-sm font-medium">
              Privacy Policy
            </span>
            <span className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-sm font-medium">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
