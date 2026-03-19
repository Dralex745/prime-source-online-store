import { useState, useEffect } from "react";

const StoreStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStoreStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();
      // Open Mon-Sat 8am-10pm
      setIsOpen(day >= 1 && day <= 6 && hour >= 8 && hour < 22);
    };
    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-3 w-3 rounded-full ${
          isOpen ? "bg-green-500 animate-pulse-glow" : "bg-red-500"
        }`}
      />
      <span className="text-sm font-medium text-foreground">
        {isOpen ? "Loja Aberta" : "Loja Fechada"}
      </span>
    </div>
  );
};

export default StoreStatus;
