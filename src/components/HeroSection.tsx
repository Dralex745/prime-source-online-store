import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-black uppercase tracking-wider sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">PRIME SOURCE</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          Suplementos de alta performance para quem busca resultados reais.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-primary rounded-lg px-8 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Ver Produtos
          </button>
          <button
            onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-lg border border-primary/40 bg-primary/10 px-8 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary/20"
          >
            Encomendar
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
