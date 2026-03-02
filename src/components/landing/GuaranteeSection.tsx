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
            <img 
              src="https://www.svgrepo.com/show/305267/money-back-guarantee.svg" 
              alt="Garantie Satisfait ou Remboursé" 
              className="w-32 h-32 md:w-40 md:h-40 opacity-80 filter brightness-0 invert"
              style={{ filter: 'sepia(1) saturate(5) hue-rotate(10deg) brightness(0.8)' }} // Give it a gold-ish tint if needed, or just keep it simple
            />
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default GuaranteeSection;
