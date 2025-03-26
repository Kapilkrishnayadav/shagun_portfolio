import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart3, Users, Brain, TrendingUp } from "lucide-react";

const impactItems = [
  {
    title: "Marketing",
    description: "Led digital marketing campaigns resulting in 200% growth",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  },
  {
    title: "Operations",
    description: "Streamlined processes improving efficiency by 40%",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2"
  },
  {
    title: "Strategy",
    description: "Developed and executed growth strategies for startups",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1491234323906-4f056ca415bc"
  },
  {
    title: "Engagement",
    description: "Built and managed high-performing teams",
    icon: Users,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
  }
];

export default function Impact() {
  return (
    <section id="impact" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Impact at Marmarth</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <item.icon className="h-6 w-6 text-primary" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
