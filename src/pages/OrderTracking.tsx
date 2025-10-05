import { useState } from "react";
import { CheckCircle2, Clock, ChefHat, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

interface Order {
  id: string;
  items: string[];
  total: number;
  status: "pending" | "preparing" | "ready";
  orderTime: string;
}

const OrderTracking = () => {
  const [orders] = useState<Order[]>([
    {
      id: "ORD-ABC123",
      items: ["Masala Dosa x2", "Paneer Butter Masala x1", "Veg Biryani x1"],
      total: 340,
      status: "preparing",
      orderTime: "10:30 AM",
    },
    {
      id: "ORD-XYZ789",
      items: ["Dal Tadka x1", "Chole Bhature x2"],
      total: 260,
      status: "ready",
      orderTime: "9:45 AM",
    },
  ]);

  const getStatusConfig = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return {
          label: "Order Received",
          icon: Clock,
          color: "bg-yellow-500",
          textColor: "text-yellow-700",
          bgColor: "bg-yellow-50",
          progress: 33,
        };
      case "preparing":
        return {
          label: "In Making",
          icon: ChefHat,
          color: "bg-blue-500",
          textColor: "text-blue-700",
          bgColor: "bg-blue-50",
          progress: 66,
        };
      case "ready":
        return {
          label: "Ready for Pickup",
          icon: Bell,
          color: "bg-green-500",
          textColor: "text-green-700",
          bgColor: "bg-green-50",
          progress: 100,
        };
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Track Your Orders</h1>
            <p className="text-muted-foreground">Monitor the status of your orders in real-time</p>
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            {orders.map((order, index) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;

              return (
                <Card
                  key={order.id}
                  className="card-modern p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Order Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{order.id}</h3>
                      <p className="text-sm text-muted-foreground">Placed at {order.orderTime}</p>
                    </div>
                    <Badge
                      className={`${statusConfig.bgColor} ${statusConfig.textColor} border-0 px-4 py-2`}
                    >
                      {statusConfig.label}
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full ${statusConfig.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${statusConfig.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Status Steps */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Pending", status: "pending" },
                      { label: "In Making", status: "preparing" },
                      { label: "Ready", status: "ready" },
                    ].map((step, idx) => {
                      const stepConfig = getStatusConfig(step.status as Order["status"]);
                      const StepIcon = stepConfig.icon;
                      const isCompleted =
                        (order.status === "preparing" && idx <= 1) ||
                        (order.status === "ready" && idx <= 2) ||
                        (order.status === "pending" && idx === 0);
                      const isCurrent =
                        (order.status === "pending" && idx === 0) ||
                        (order.status === "preparing" && idx === 1) ||
                        (order.status === "ready" && idx === 2);

                      return (
                        <div key={step.status} className="flex flex-col items-center text-center">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                              isCompleted
                                ? `${stepConfig.color} shadow-lg`
                                : "bg-muted"
                            } ${isCurrent ? "animate-pulse-glow" : ""}`}
                          >
                            {isCompleted ? (
                              <StepIcon className="h-6 w-6 text-white" />
                            ) : (
                              <StepIcon className="h-6 w-6 text-muted-foreground" />
                            )}
                          </div>
                          <span
                            className={`text-xs font-medium ${
                              isCompleted ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Order Items */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Order Items</h4>
                    <div className="space-y-2 mb-4">
                      {order.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t">
                      <span className="font-semibold">Total</span>
                      <span className="text-xl font-bold text-primary">₹{order.total}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Empty State */}
          {orders.length === 0 && (
            <Card className="card-modern p-12 text-center animate-scale-in">
              <Clock className="h-24 w-24 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h2 className="text-2xl font-bold mb-2">No active orders</h2>
              <p className="text-muted-foreground">Place an order to track it here</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
