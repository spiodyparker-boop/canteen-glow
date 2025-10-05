import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Reach out via our contact form",
    detail: "We respond within 24 hours",
  },
  {
    icon: MessageSquare,
    title: "Feedback",
    description: "Share your experience",
    detail: "Help us improve our service",
  },
  {
    icon: Phone,
    title: "On-site Support",
    description: "Visit the canteen counter",
    detail: "Available during operating hours",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Find us on campus",
    detail: "Main building, Ground floor",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. 
            Choose your preferred way to reach out.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="card-modern p-6 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center shadow-glow">
                <method.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{method.title}</h3>
              <p className="text-muted-foreground text-sm mb-1">{method.description}</p>
              <p className="text-xs text-muted-foreground">{method.detail}</p>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="card-modern p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What is this about?"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry or feedback..."
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full hover-lift">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
          <div className="space-y-4">
            <Card className="card-modern p-6 animate-fade-in">
              <h3 className="font-bold mb-2">What are the operating hours?</h3>
              <p className="text-muted-foreground">
                The canteen operates Monday to Friday, 8:00 AM - 6:00 PM, and Saturday 9:00 AM - 3:00 PM.
              </p>
            </Card>
            <Card className="card-modern p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="font-bold mb-2">Can I cancel my order?</h3>
              <p className="text-muted-foreground">
                Orders can be cancelled within 5 minutes of placing them. After that, please contact the canteen staff.
              </p>
            </Card>
            <Card className="card-modern p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="font-bold mb-2">Do you accommodate dietary restrictions?</h3>
              <p className="text-muted-foreground">
                Yes! Please mention your dietary requirements in the order notes, and we'll do our best to accommodate.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
