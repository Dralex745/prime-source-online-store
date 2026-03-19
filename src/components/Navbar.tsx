import logo from "@/assets/logo.png";
import StoreStatus from "./StoreStatus";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Prime Source Supplements" className="h-10 w-auto" />
          <span className="hidden font-display text-lg font-bold tracking-wider text-foreground sm:block">
            PRIME SOURCE
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <button onClick={() => scrollTo("products")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Produtos
          </button>
          <button onClick={() => scrollTo("order")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Encomendar
          </button>
          <button onClick={() => scrollTo("about")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Sobre
          </button>
        </div>
        <StoreStatus />
      </div>
    </nav>
  );
};

export default Navbar;
