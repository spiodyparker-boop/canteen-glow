import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Target, Heart, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To revolutionize canteen operations by providing a seamless digital platform that enhances efficiency and customer satisfaction.",
  },
  {
    icon: Heart,
    title: "Quality First",
    description: "We believe in serving fresh, nutritious meals prepared with the highest quality ingredients and utmost care.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging technology to make ordering convenient, reduce wait times, and improve the overall dining experience.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Your data security and privacy are our top priorities. We maintain the highest standards of food safety.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About Our Canteen System
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're transforming the way canteens operate, making meal ordering faster, 
            easier, and more efficient for everyone.
          </p>
        </div>

        {/* Story Section */}
        <Card className="card-modern p-8 md:p-12 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              The Smart Canteen Management System was born from a simple observation: 
              traditional canteen operations often lead to long queues, miscommunication, 
              and inefficient service.
            </p>
            <p>
              We developed this platform to bridge the gap between customers and canteen staff, 
              creating a digital ecosystem that benefits everyone. Customers can browse menus, 
              place orders, and track their meals in real-time, while staff can manage orders 
              efficiently and reduce operational bottlenecks.
            </p>
            <p>
              Our system promotes sustainability by reducing paper waste, improves accuracy 
              in order processing, and creates a more pleasant dining experience for all users.
            </p>
          </div>
        </Card>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="card-modern p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mb-4 gradient-hero rounded-full flex items-center justify-center shadow-glow">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="gradient-hero rounded-2xl p-8 md:p-12 text-white animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">Making a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80">Daily Orders</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-white/80">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30%</div>
              <div className="text-white/80">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
