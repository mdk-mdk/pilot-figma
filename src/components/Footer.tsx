import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/972548456062"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all hover:scale-110"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={28} />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.a>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
            {/* Column 1 - About */}
            <div>
              <h3 className="text-[#b89c57] text-xl mb-4">מרדכי דניאל קליין</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                מומחה לאפקטיביות עסקית
              </p>
              <p className="text-slate-300 text-xs mt-2">
                חברת בלשכת היועצים העסקיים בישראל
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-[#b89c57] text-xl mb-4">קישורים מהירים</h3>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-slate-200 hover:text-[#b89c57] transition-colors">
                  דף הבית
                </Link>
                <Link to="/about" className="text-slate-200 hover:text-[#b89c57] transition-colors">
                  אודות
                </Link>
                <Link to="/contact" className="text-slate-200 hover:text-[#b89c57] transition-colors">
                  צור קשר
                </Link>
              </nav>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h3 className="text-[#b89c57] text-xl mb-4">יצירת קשר</h3>
              <div className="text-slate-200 text-sm space-y-2">
                <p>טלפון: 054-8456062</p>
                <a 
                  href="https://wa.me/972548456062" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#b89c57] transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-emerald-700 text-center">
            <p className="text-slate-300 text-sm">
              © {currentYear} מרדכי דניאל קליין - כל הזכויות שמורות
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
