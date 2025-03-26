import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import shagunImage from "../assets/shagunImage.jpg";

export default function Hero() {
  return (
    <section id="about" className="flex flex-col-reverse md:flex-row items-center gap-8 py-16">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I am <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Shagun Malik</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          A passionate professional with expertise in marketing, operations, and strategy. 
          I specialize in creating impactful solutions and driving business growth through 
          innovative approaches and data-driven decision making.
        </p>
        <div className="flex gap-4">
          <Button size="lg">View Resume</Button>
          <Button size="lg" variant="outline">View Portfolio</Button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center"
      >
        <div className="rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96">
          <img 
            src={shagunImage}
            // src="https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7"
            alt="Shagun Malik"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
