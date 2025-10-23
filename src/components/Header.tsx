import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/contact', label: 'צור קשר' },
    { path: '/', label: 'ספרינט' },
    { path: '/about', label: 'אודות' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-full flex items-center justify-center shadow-lg">
                  <Rocket className="w-7 h-7 text-[#b89c57]" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-emerald-900 font-bold text-xl">MDK</span>
                  <span className="text-[#b89c57] text-xs">SPRINT</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-lg transition-colors ${
                    isActive(item.path)
                      ? 'text-[#b89c57]'
                      : 'text-emerald-900 hover:text-[#b89c57]'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#b89c57]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-emerald-900 hover:text-[#b89c57] transition-colors"
              aria-label="תפריט"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-lg md:hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-center py-3 px-4 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-[#b89c57] text-white'
                      : 'text-emerald-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-20"></div>
    </>
  );
}
