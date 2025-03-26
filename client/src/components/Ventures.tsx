import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const ventures = [
  {
    title: "Dropshipping Venture",
    description: "Successfully launched and scaled e-commerce operations",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8"
  },
  {
    title: "Pre-seed Startup",
    description: "Led early-stage startup from ideation to market validation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    title: "MBV Initiative",
    description: "Developed market-based solutions for business challenges",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007"
  }
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Exciting Ventures at Masters Union
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ventures.map((venture, index) => (
          <motion.div
            key={venture.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{venture.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-muted-foreground">{venture.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
