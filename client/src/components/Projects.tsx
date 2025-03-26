import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Market Analysis Report",
    description: "Comprehensive analysis of emerging market trends",
    image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c"
  },
  {
    title: "Brand Strategy Deck",
    description: "Strategic brand positioning and marketing roadmap",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2"
  },
  {
    title: "Growth Initiative",
    description: "Business expansion and scaling strategy",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    title: "Digital Transformation",
    description: "Technology adoption and process optimization plan",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  },
  {
    title: "Innovation Workshop",
    description: "Framework for fostering innovation culture",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        From Ideas to Execution
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
