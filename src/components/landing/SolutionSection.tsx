import { motion } from "framer-motion";

const SolutionSection = () => {
  const steps = [
    {
      num: "01",
      title: "Diagnostic de l'Attention Fracturée",
      desc: "On n'accroche pas un prospect sophistiqué avec une question de curiosité générique. On l'accroche en lui montrant qu'on a diagnostiqué son problème plus précisément que lui. Une incision chirurgicale dans sa réalité immédiate."
    },
    {
      num: "02",
      title: "Architecture de Rétention Totale",
      desc: "Chaque seconde de silence ou de remplissage est une porte de sortie. Je construis des structures à haute tension narrative où l'abandon devient une perte de temps pour le spectateur, pas pour vous. Chaque mot mérite le suivant."
    },
    {
      num: "03",
      title: "Ingénierie du Moment « Eurêka »",
      desc: "Votre offre n'est pas présentée — elle est découverte comme la seule solution logique. J'orchestre le moment de bascule psychologique où le prospect a le sentiment que la décision vient de lui. Parce que c'est le cas."
    },
    {
      num: "04",
      title: "Dissolution des barrières mentales",
      desc: "Je ne traite pas les objections : j'empêche leur formation. Chaque doute est désamorcé à l'intérieur du flux narratif pour que l'action finale ressemble à un soulagement, pas à une pression."
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-card" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            La Méthode
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-3xl">
            Je n'écris pas des scripts.
            <br />
            <span className="text-gradient-gold italic">J'architecte des décisions.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="grid lg:grid-cols-12 gap-8 py-12 border-t border-border group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-sm text-primary">{step.num}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-secondary-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
