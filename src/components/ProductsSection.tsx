import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import productWhey from "@/assets/product-whey.jpg";
import productCreatine from "@/assets/product-creatine.jpg";
import productPreworkout from "@/assets/product-preworkout.jpg";
import productBcaa from "@/assets/product-bcaa.jpg";
import productMulti from "@/assets/product-multi.jpg";
import productGlutamine from "@/assets/product-glutamine.jpg";

const products = [
  { name: "Whey Protein Isolado", description: "30g de proteína por dose. Ideal para ganho muscular e recuperação pós-treino.", price: "R$ 189,90", image: productWhey, category: "Proteína" },
  { name: "Creatina Monohidratada", description: "5g por dose. Aumenta força e performance nos treinos de alta intensidade.", price: "R$ 99,90", image: productCreatine, category: "Performance" },
  { name: "Pré-Treino Extreme", description: "Fórmula com cafeína, beta-alanina e citrulina para energia máxima.", price: "R$ 129,90", image: productPreworkout, category: "Energia" },
  { name: "BCAA 2:1:1", description: "Aminoácidos essenciais para recuperação muscular e redução de fadiga.", price: "R$ 79,90", image: productBcaa, category: "Recuperação" },
  { name: "Multivitamínico Premium", description: "Complexo completo de vitaminas e minerais para saúde e bem-estar.", price: "R$ 59,90", image: productMulti, category: "Saúde" },
  { name: "Glutamina Pura", description: "5g por dose. Fortalece o sistema imunológico e auxilia na recuperação.", price: "R$ 69,90", image: productGlutamine, category: "Recuperação" },
];

const ProductsSection = ({ onOrder }: { onOrder: (name: string) => void }) => {
  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold uppercase tracking-wider sm:text-4xl">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Suplementos selecionados com os melhores ingredientes para maximizar seus resultados.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} onOrder={onOrder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
