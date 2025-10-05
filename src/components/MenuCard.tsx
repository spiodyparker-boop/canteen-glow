import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Check } from "lucide-react";

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  onAddToCart: (id: string) => void;
}

const MenuCard = ({ id, name, description, price, image, onAddToCart }: MenuCardProps) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Card className="card-modern overflow-hidden hover-lift group">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl">🍽️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-card-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-primary">₹{price}</span>
          </div>
          
          <Button
            variant="cart"
            size="sm"
            onClick={handleAdd}
            disabled={added}
            className={`transition-all duration-300 ${added ? "bg-green-500 hover:bg-green-500" : ""}`}
          >
            {added ? (
              <>
                <Check className="mr-1 h-4 w-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="mr-1 h-4 w-4" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuCard;
