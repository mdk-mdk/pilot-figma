import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, Send, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner@2.0.3';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_qk163ek';
  const EMAILJS_TEMPLATE_ID = 'template_hm8xf7m';
  const EMAILJS_PUBLIC_KEY = 'wugMsIka4GQkEjZ6n';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          message: formData.message || 'פנייה מדף צור קשר',
        }
      );
      
      if (result.text === 'OK') {
        toast.success('תודה! קיבלנו את הפנייה ונחזור אליך תוך 24 שעות 🎉', {
          duration: 5000,
          style: {
            background: '#059669',
            color: 'white',
            fontSize: '16px',
            padding: '16px',
          },
        });
        
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('אופס! משהו השתבש. נסה שוב או צור קשר בוואטסאפ', {
        duration: 5000,
        style: {
          background: '#dc2626',
          color: 'white',
          fontSize: '16px',
          padding: '16px',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#b89c57]">בואו נדבר</span> על העסק שלך
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-emerald-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              אנחנו כאן כדי לעזור לך להגדיל הכנסות
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-emerald-900 text-3xl md:text-4xl mb-6">
                    פרטי התקשרות
                  </h2>
                  <div className="h-1 w-24 bg-[#b89c57] mb-8"></div>
                  
                  <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                    מוזמנים ליצור קשר בכל דרך שנוחה לכם - טלפון, אימייל או ישירות בוואטסאפ. אנחנו זמינים לענות על כל שאלה ולספק מידע נוסף.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Phone */}
                  <motion.a
                    href="tel:0548456062"
                    className="flex items-center gap-4 p-6 bg-white border-2 border-emerald-200 rounded-xl hover:border-[#b89c57] hover:shadow-lg transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-[#b89c57] transition-colors">
                      <Phone className="w-7 h-7 text-emerald-900 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600 mb-1">טלפון</div>
                      <div className="text-xl text-emerald-900 font-semibold">054-8456062</div>
                    </div>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/972548456062"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-white border-2 border-emerald-200 rounded-xl hover:border-[#25D366] hover:shadow-lg transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                      <MessageCircle className="w-7 h-7 text-emerald-900 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600 mb-1">WhatsApp</div>
                      <div className="text-xl text-emerald-900 font-semibold">שלח הודעה</div>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.div
                    className="flex items-center gap-4 p-6 bg-white border-2 border-emerald-200 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Mail className="w-7 h-7 text-emerald-900" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600 mb-1">אימייל</div>
                      <div className="text-xl text-emerald-900 font-semibold">דרך הטופס</div>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    className="flex items-center gap-4 p-6 bg-white border-2 border-emerald-200 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-emerald-900" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600 mb-1">מיקום</div>
                      <div className="text-xl text-emerald-900 font-semibold">ישראל</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border-4 border-[#b89c57] rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-emerald-900 text-2xl md:text-3xl mb-6 text-center">
                    שלח הודעה
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-emerald-900 mb-2 text-right">
                        שם מלא <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="text-right border-2 border-slate-300 focus:border-[#b89c57] h-12"
                        placeholder="איך קוראים לך?"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-emerald-900 mb-2 text-right">
                        טלפון <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="text-right border-2 border-slate-300 focus:border-[#b89c57] h-12"
                        placeholder="054-1234567"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-emerald-900 mb-2 text-right">
                        אימייל
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="text-right border-2 border-slate-300 focus:border-[#b89c57] h-12"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-emerald-900 mb-2 text-right">
                        הודעה (אופציונלי)
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="text-right border-2 border-slate-300 focus:border-[#b89c57] min-h-32"
                        placeholder="ספר לנו קצת על העסק שלך..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#b89c57] hover:bg-[#a08a4d] text-white py-6 text-xl shadow-xl disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          שולח...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send size={24} />
                          שלח הודעה
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
