import { useState } from "react";
import { CheckCircle2, User, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { toast } from "sonner";

interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
  status: "pending" | "preparing" | "ready";
  orderTime: string;
}

const AdminDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "1",
      orderNumber: "ORD-ABC123",
      customerName: "John Doe",
      items: [
        { name: "Masala Dosa", quantity: 2, price: 60 },
        { name: "Paneer Butter Masala", quantity: 1, price: 120 },
      ],
      total: 240,
      status: "preparing",
      orderTime: "10:30 AM",
    },
    {
      id: "2",
      orderNumber: "ORD-XYZ789",
      customerName: "Jane Smith",
      items: [
        { name: "Veg Biryani", quantity: 1, price: 100 },
        { name: "Dal Tadka", quantity: 2, price: 80 },
      ],
      total: 260,
      status: "pending",
      orderTime: "10:45 AM",
    },
    {
      id: "3",
      orderNumber: "ORD-DEF456",
      customerName: "Mike Johnson",
      items: [
        { name: "Chole Bhature", quantity: 2, price: 90 },
        { name: "Fruit Salad", quantity: 1, price: 50 },
      ],
      total: 230,
      status: "preparing",
      orderTime: "11:00 AM",
    },
  ]);

  const markAsReady = (orderId: string) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: "ready" as const } : order
    ));
    toast.success("Order marked as ready!", {
      description: "Customer will be notified",
    });
  };

  const stats = {
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === "pending").length,
    preparingOrders: orders.filter(o => o.status === "preparing").length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
  };

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-0">Pending</Badge>;
      case "preparing":
        return <Badge className="bg-blue-100 text-blue-800 border-0">In Making</Badge>;
      case "ready":
        return <Badge className="bg-green-100 text-green-800 border-0">Ready</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage orders and monitor canteen operations</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-modern p-6 hover-lift animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">{stats.totalOrders}</p>
              </div>
            </div>
          </Card>

          <Card className="card-modern p-6 hover-lift animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-xl">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">{stats.pendingOrders}</p>
              </div>
            </div>
          </Card>

          <Card className="card-modern p-6 hover-lift animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Preparing</p>
                <p className="text-2xl font-bold">{stats.preparingOrders}</p>
              </div>
            </div>
          </Card>

          <Card className="card-modern p-6 hover-lift animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">₹{stats.totalRevenue}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Orders Table */}
        <Card className="card-modern overflow-hidden animate-fade-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Order No.</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Items</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Total</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {orders.map((order, index) => (
                  <tr
                    key={order.id}
                    className="hover:bg-muted/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="px-6 py-4">
                      <span className="font-mono font-semibold text-sm">{order.orderNumber}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                        <span className="font-medium">{order.customerName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground">
                            {item.name} x{item.quantity}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-primary">₹{order.total}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">{order.orderTime}</span>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
                    <td className="px-6 py-4">
                      {order.status !== "ready" && (
                        <Button
                          size="sm"
                          onClick={() => markAsReady(order.id)}
                          className="hover-lift"
                        >
                          <CheckCircle2 className="mr-1 h-4 w-4" />
                          Mark Ready
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
