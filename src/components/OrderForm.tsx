import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const OrderForm = ({ selectedProduct }: { selectedProduct: string }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: selectedProduct,
    quantity: "1",
    notes: "",
  });

  // sync selected product from parent
  if (selectedProduct && form.product !== selectedProduct) {
    setForm((f) => ({ ...f, product: selectedProduct }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.product) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    toast.success("Encomenda enviada com sucesso! Entraremos em contato em breve.");
    setForm({ name: "", email: "", phone: "", product: "", quantity: "1", notes: "" });
  };

  const products = [
    "Whey Protein Isolado",
    "Creatina Monohidratada",
    "Pré-Treino Extreme",
    "BCAA 2:1:1",
    "Multivitamínico Premium",
    "Glutamina Pura",
  ];

  return (
    <section id="order" className="border-t border-border py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold uppercase tracking-wider sm:text-4xl">
            Faça sua <span className="text-gradient">Encomenda</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Preencha o formulário abaixo e entraremos em contato para confirmar seu pedido.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-xl space-y-5 rounded-lg border border-border bg-card p-8 shadow-card"
        >
          <div>
            <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Nome *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Telefone *
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-md border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Produto *
              </label>
              <select
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="w-full rounded-md border border-input bg-secondary px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Selecione um produto</option>
                {products.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Quantidade
              </label>
              <input
                type="number"
                min="1"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full rounded-md border border-input bg-secondary px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Observações
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={3}
              className="w-full rounded-md border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Alguma observação sobre seu pedido?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-primary rounded-md px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Enviar Encomenda
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderForm;
