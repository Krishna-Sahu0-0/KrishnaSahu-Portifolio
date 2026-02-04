import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navItems = ["About", "Skills", "Education", "Projects", "Contact"];

  return (
    <nav ref={menuRef} className="fixed w-full z-50 transition-all duration-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-black text-2xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Krishna Sahu
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setDark(!dark)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-violet-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:scale-110"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-slate-900"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 rounded-lg transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
