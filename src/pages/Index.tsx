import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrder = (productName: string) => {
    setSelectedProduct(productName);
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection onOrder={handleOrder} />
      <OrderForm selectedProduct={selectedProduct} />
      <Footer />
    </div>
  );
};

export default Index;
