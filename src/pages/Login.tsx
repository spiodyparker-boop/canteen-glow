import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { UtensilsCrossed, LogIn } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "customer" as "customer" | "admin",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success("Login successful!", {
      description: `Welcome back!`,
    });

    // Route based on role
    setTimeout(() => {
      if (formData.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/customer-dashboard");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <Card className="w-full max-w-md card-modern p-8 relative z-10 animate-scale-in">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-hero rounded-2xl shadow-glow">
            <UtensilsCrossed className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Login to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              className="h-12 transition-all focus:shadow-lg focus:border-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="h-12 transition-all focus:shadow-lg focus:border-primary"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {/* Role Selection */}
          <div className="space-y-2">
            <Label>Login as</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: "customer" })}
                className={`p-3 rounded-lg border-2 transition-all ${
                  formData.role === "customer"
                    ? "border-primary bg-primary/10 text-primary font-semibold"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Customer
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: "admin" })}
                className={`p-3 rounded-lg border-2 transition-all ${
                  formData.role === "admin"
                    ? "border-secondary bg-secondary/10 text-secondary font-semibold"
                    : "border-border hover:border-secondary/50"
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full hover-lift mt-6">
            <LogIn className="mr-2" />
            Login
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Register here
          </Link>
        </div>

        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
