import { Link } from "react-router-dom";
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-6 w-6" />
              <span className="text-lg font-bold font-serif">Himalayan Boon</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Connecting Himalayan farmers directly with urban customers. 100% authentic, pure, and organic products from the mountains to your doorstep.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-secondary transition-smooth">Home</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition-smooth">Shop</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-smooth">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-smooth">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="font-semibold mb-4 font-serif">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=Honey" className="hover:text-secondary transition-smooth">Honey</Link></li>
              <li><Link to="/products?category=Pulses" className="hover:text-secondary transition-smooth">Rajma</Link></li>
              <li><Link to="/products?category=Dry Fruits" className="hover:text-secondary transition-smooth">Walnuts</Link></li>
              <li><Link to="/products?category=Dairy" className="hover:text-secondary transition-smooth">Ghee</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold mb-4 font-serif">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5" />
                <a href="tel:+918278793606" className="hover:text-secondary transition-smooth">+91 8278793606</a>
              </li>
              <li className="flex items-start space-x-2">
                <MessageCircle className="h-4 w-4 mt-0.5" />
                <a href="https://wa.me/918278793606" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-smooth">WhatsApp Us</a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5" />
                <span>info@himalayanboon.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Chandigarh, India</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://wa.me/918278793606" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-smooth">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Himalayan Boon. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-secondary transition-smooth">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-secondary transition-smooth">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918278793606?text=Hi! I want to order from Himalayan Boon"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-large hover:scale-110 transition-bounce z-40"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;
