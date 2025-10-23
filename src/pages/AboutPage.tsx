import { motion } from 'motion/react';
import { Target, TrendingUp, Users, Award, CheckCircle2, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import profilePhoto from 'figma:asset/88125d2fcc83405130c4c9da416c7d676c3d454c.png';
import certificate from 'figma:asset/4b44f5944476c7e9d414812864a27414fbcf002f.png';

export default function AboutPage() {
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
              אודות <span className="text-[#b89c57]">מרדכי דניאל קליין</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-emerald-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              מומחה לאפקטיביות עסקית | חברת בלשכת היועצים העסקיים בישראל
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Profile Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Image */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative w-64 md:w-80">
                  {/* Rotating Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-transparent"
                    style={{
                      borderTopColor: '#b89c57',
                      borderRightColor: '#b89c57',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#b89c57]/30 to-emerald-900/30 blur-xl"></div>
                  
                  {/* Image */}
                  <div className="relative w-full rounded-full overflow-hidden border-4 border-white shadow-xl aspect-[3/4]">
                    <img 
                      src={profilePhoto}
                      alt="מרדכי דניאל קליין"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="space-y-6 text-right"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-emerald-900 text-3xl md:text-4xl mb-4">
                  מאחורי הספרינט
                </h2>
                <div className="h-1 w-24 bg-[#b89c57]"></div>
                
                <p className="text-slate-700 text-lg leading-relaxed">
                  ב־15 השנים האחרונות ניהלתי עסקים, מחלקות שיווק - סחר - והמכירה בעסקים גדולים במשק, וכן ליוויתי מאות בעלי עסקים בתהליכים של שינוי אמיתי, מעסק מתמודד ולעיתים אף על סף סגירה, לעסק פורח ומרוויח.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  הספרינט נולד מהשטח מניסיון אמיתי שהוכיח שזה בדיוק מה שכל עסק צריך.
                </p>
                
                <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white p-6 rounded-xl shadow-lg">
                  <p className="text-xl leading-relaxed">
                    <span className="text-[#b89c57] font-bold">המטרה שלי</span> לגרום לעסק שלך ליצור הכנסות יציבות, בעקביות ובבהירות.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Values Section */}
            <div className="mb-20">
              <motion.h2
                className="text-emerald-900 text-3xl md:text-4xl text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                הערכים שמובילים אותי
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: 'ממוקדות', color: 'from-emerald-900 to-emerald-800' },
                  { icon: TrendingUp, title: 'תוצאות', color: 'from-emerald-800 to-emerald-700' },
                  { icon: Users, title: 'שותפות', color: 'from-emerald-900 to-emerald-800' },
                  { icon: Award, title: 'מצוינות', color: 'from-emerald-800 to-emerald-900' },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${value.color} text-white p-6 rounded-xl text-center shadow-lg`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <value.icon className="w-12 h-12 mx-auto mb-4 text-[#b89c57]" strokeWidth={2} />
                    <h3 className="text-2xl">{value.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-20">
              <motion.h2
                className="text-emerald-900 text-3xl md:text-4xl text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                הניסיון שלי
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { number: '15+', label: 'שנות ניסיון' },
                  { number: '100+', label: 'עסקים שליוויתי' },
                  { number: '100%', label: 'מחויבות לתוצאות' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border-4 border-[#b89c57] rounded-xl p-8 text-center shadow-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-5xl md:text-6xl text-[#b89c57] mb-4">{stat.number}</div>
                    <div className="text-xl text-emerald-900">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certificate Section */}
            <div className="mb-20">
              <motion.h2
                className="text-emerald-900 text-3xl md:text-4xl text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                אישורים ומקצועיות
              </motion.h2>
              
              <motion.p
                className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                חבר מוסמך ומוכר בלשכת היועצים העסקיים והניהוליים בישראל
              </motion.p>

              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#b89c57] relative">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#b89c57]" strokeWidth={2.5} />
                      <span className="text-sm font-semibold">מוסמך</span>
                    </div>
                  </div>

                  {/* Certificate Image */}
                  <div className="p-4 md:p-8">
                    <motion.img
                      src={certificate}
                      alt="תעודת חברות בלשכת היועצים העסקיים והניהוליים בישראל"
                      className="w-full h-auto rounded-lg shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Bottom Badge */}
                  <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-4 px-6 text-center">
                    <p className="text-lg">
                      <span className="text-[#b89c57] font-bold">חבר מוסמך</span> בלשכת היועצים העסקיים והניהוליים בישראל
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Methodology Section */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
              <motion.h2
                className="text-emerald-900 text-3xl md:text-4xl text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                הגישה שלי
              </motion.h2>

              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  'לא תיאוריה - רק פרקטיקה שעובדת בשטח',
                  'לא עצות כלליות - פתרונות מותאמים אישית',
                  'לא דיבורים - פעולות קונקרטיות עם תוצאות',
                  'לא לבד - ליווי צמוד לאורך כל הדרך',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 text-right"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#b89c57] flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-slate-700 text-lg leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl text-emerald-900 mb-6">
                מוכן להתחיל את המסע?
              </h3>
              <Button
                size="lg"
                className="bg-[#b89c57] hover:bg-[#a08a4d] text-white px-10 py-6 text-xl shadow-xl"
                onClick={() => window.location.href = '/#contact-form'}
              >
                בואו נדבר על העסק שלך
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
