import { motion } from "framer-motion";

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ product, index, onOrder }: { product: Product; index: number; onOrder: (name: string) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:border-primary/40 hover:shadow-glow"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 rounded-md bg-gradient-primary px-2 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
          {product.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold uppercase tracking-wide text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gradient font-display text-xl font-black">{product.price}</span>
          <button
            onClick={() => onOrder(product.name)}
            className="rounded-md bg-gradient-primary px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
          >
            Encomendar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
