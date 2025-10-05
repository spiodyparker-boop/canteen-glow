import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const PaymentSuccess = () => {
  const orderId = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="card-modern p-12 animate-bounce-in">
            {/* Success Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-6">
                  <CheckCircle className="h-20 w-20 text-white" />
                </div>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">
              Payment Successful!
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Your order has been confirmed and is being prepared
            </p>

            {/* Order Details */}
            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <div className="grid gap-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Order ID</span>
                  <span className="font-mono font-bold">{orderId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Estimated Time</span>
                  <span className="font-semibold text-primary">15-20 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                    In Progress
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/order-tracking" className="flex-1 sm:flex-initial">
                <Button size="lg" className="w-full hover-lift">
                  Track Your Order
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/customer-dashboard" className="flex-1 sm:flex-initial">
                <Button variant="outline" size="lg" className="w-full">
                  Order More
                </Button>
              </Link>
            </div>

            {/* Thank You Note */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                Thank you for your order! You'll receive a notification when your food is ready for pickup.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
