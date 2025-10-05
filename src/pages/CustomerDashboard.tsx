import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import MenuCard from "@/components/MenuCard";
import { toast } from "sonner";

const menuItems = [
  { id: "1", name: "Masala Dosa", description: "Crispy South Indian crepe filled with spiced potato filling", price: 60 },
  { id: "2", name: "Paneer Butter Masala", description: "Rich and creamy cottage cheese curry with aromatic spices", price: 120 },
  { id: "3", name: "Veg Biryani", description: "Fragrant basmati rice layered with mixed vegetables and spices", price: 100 },
  { id: "4", name: "Dal Tadka", description: "Yellow lentils tempered with cumin, garlic, and ghee", price: 80 },
  { id: "5", name: "Chole Bhature", description: "Spicy chickpea curry served with fluffy fried bread", price: 90 },
  { id: "6", name: "Fruit Salad", description: "Fresh seasonal fruits with a hint of honey and lemon", price: 50 },
  { id: "7", name: "Samosa", description: "Crispy pastry filled with spiced potatoes and peas", price: 30 },
  { id: "8", name: "Idli Sambar", description: "Steamed rice cakes served with flavorful lentil soup", price: 50 },
  { id: "9", name: "Pav Bhaji", description: "Spiced vegetable mash served with buttered bread rolls", price: 70 },
];

const CustomerDashboard = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (id: string) => {
    setCartItems([...cartItems, id]);
    toast.success("Item added to cart!", {
      description: "Continue shopping or proceed to checkout",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header with Cart */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Menu</h1>
            <p className="text-muted-foreground">Choose your favorite meals</p>
          </div>
          
          <Link to="/cart">
            <Button size="lg" variant="secondary" className="relative hover-lift">
              <ShoppingCart className="mr-2" />
              Cart
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-2">
                  {cartItems.length}
                </Badge>
              )}
            </Button>
          </Link>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <MenuCard {...item} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 flex justify-center gap-4 animate-fade-in">
          <Link to="/order-tracking">
            <Button variant="outline" size="lg">
              Track Orders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
