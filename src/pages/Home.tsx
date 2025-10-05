import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import MenuCard from "@/components/MenuCard";
import { toast } from "sonner";

const todaysMenu = [
  {
    id: "1",
    name: "Masala Dosa",
    description: "Crispy South Indian crepe filled with spiced potato filling",
    price: 60,
  },
  {
    id: "2",
    name: "Paneer Butter Masala",
    description: "Rich and creamy cottage cheese curry with aromatic spices",
    price: 120,
  },
  {
    id: "3",
    name: "Veg Biryani",
    description: "Fragrant basmati rice layered with mixed vegetables and spices",
    price: 100,
  },
  {
    id: "4",
    name: "Dal Tadka",
    description: "Yellow lentils tempered with cumin, garlic, and ghee",
    price: 80,
  },
  {
    id: "5",
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy fried bread",
    price: 90,
  },
  {
    id: "6",
    name: "Fruit Salad",
    description: "Fresh seasonal fruits with a hint of honey and lemon",
    price: 50,
  },
];

const features = [
  {
    icon: Clock,
    title: "Quick Service",
    description: "Order ahead and skip the queue",
  },
  {
    icon: Users,
    title: "Easy Management",
    description: "Streamlined operations for staff",
  },
  {
    icon: Zap,
    title: "Real-time Tracking",
    description: "Know when your order is ready",
  },
];

const Home = () => {
  const handleAddToCart = (id: string) => {
    toast.success("Item added to cart!", {
      description: "Continue shopping or proceed to checkout",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Welcome to Our Smart Canteen
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Order delicious meals with ease. Skip the queues, track your orders in real-time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/register">
                <Button variant="hero" size="xl" className="animate-pulse-glow">
                  Get Started
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="xl">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-modern p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center shadow-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Menu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Today's Special Menu</h2>
            <p className="text-muted-foreground text-lg">
              Fresh, delicious, and prepared with care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {todaysMenu.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MenuCard {...item} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/customer-dashboard">
              <Button variant="secondary" size="lg" className="hover-lift">
                View Full Menu
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
