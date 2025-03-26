import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Marketing Excellence Award",
    description: "Recognized for outstanding digital marketing campaigns"
  },
  {
    title: "Innovation Leader",
    description: "Led product innovation initiatives resulting in 3 successful launches"
  },
  {
    title: "Growth Champion",
    description: "Achieved 150% YoY revenue growth through strategic initiatives"
  },
  {
    title: "Team Building Award",
    description: "Built and managed high-performing teams of 20+ members"
  },
  {
    title: "Process Optimization",
    description: "Reduced operational costs by 30% through process improvements"
  },
  {
    title: "Customer Success",
    description: "Maintained 95% client satisfaction rate across projects"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
