import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="about" className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src={logo} alt="Prime Source" className="mb-4 h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              Prime Source Supplements — suplementos de alta qualidade para atletas e entusiastas do fitness.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Horário de Funcionamento
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Segunda a Sexta: 08:00 - 22:00</li>
              <li>Sábado: 08:00 - 22:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@primesource.com</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © 2026 Prime Source Supplements. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
