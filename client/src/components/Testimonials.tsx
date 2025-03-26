import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Innovators",
    content: "Shagun's strategic approach and leadership skills transformed our marketing operations. Their ability to identify opportunities and execute flawlessly is remarkable."
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, Growth Co",
    content: "Working with Shagun was a game-changer for our team. Their innovative ideas and dedication to excellence helped us achieve unprecedented growth."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Voices of Validation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <Quote className="h-8 w-8 text-primary mb-4" />
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
