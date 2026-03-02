import { motion } from "framer-motion";

const GuaranteeSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-card" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-8 block">GARANTIE DE RETOUR SUR INVESTISSEMENT

          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">Si votre VSL ne se rembourse pas toute seule, 
            <br />
            <span className="italic text-gradient-gold">vous ne payez rien</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-secondary-foreground leading-relaxed mb-8">Vous déployez la VSL et lancez les pubs. Si les revenus générés ne recouvrent pas votre investissement de 1 650 € HT, je vous rembourse intégralement. Garantie sans limite de durée.
            </p>
          </div>

          <div className="inline-block border border-primary/30 px-8 py-4 mb-12">
            <span className="font-mono text-sm text-primary tracking-wider">
              ROI GARANTI — TRANSFERT DE RISQUE TOTAL
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <svg 
              width="160" 
              height="160" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90 filter drop-shadow-lg"
            >
              <path d="M100 20L118.5 45H147L153 72.5L178 85V115L153 127.5L147 155H118.5L100 180L81.5 155H53L47 127.5L22 115V85L47 72.5L53 45H81.5L100 20Z" fill="url(#gold_gradient)" stroke="#D4AF37" strokeWidth="2"/>
              <circle cx="100" cy="100" r="60" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 4"/>
              <text x="100" y="90" textAnchor="middle" fill="#D4AF37" fontSize="14" fontWeight="bold" fontFamily="serif" letterSpacing="1">GARANTIE</text>
              <text x="100" y="115" textAnchor="middle" fill="#D4AF37" fontSize="24" fontWeight="900" fontFamily="serif">100%</text>
              <text x="100" y="135" textAnchor="middle" fill="#D4AF37" fontSize="12" fontWeight="bold" fontFamily="serif">REMBOURSEMENT</text>
              <defs>
                <linearGradient id="gold_gradient" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D4AF37" stopOpacity="0.1"/>
                  <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.05"/>
                  <stop offset="1" stopColor="#D4AF37" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default GuaranteeSection;
