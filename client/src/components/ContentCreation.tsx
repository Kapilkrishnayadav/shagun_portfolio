import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import InstagramEmbed from "./InstagramEmbed";
import { useState } from "react";

export default function ContentCreation() {
  
    const [urls, setUrls] = useState<string[]>(["https://www.instagram.com/reel/DAtFlxuhOEW/?igsh=Y3FveGhnYWZ0cml6","https://www.instagram.com/reel/DEfAA4NPpqw/?igsh=YndsYmhkYjd0cWYz","https://www.instagram.com/reel/DEoh1k-PU0T/?igsh=MTEyYWdxcWIzcXIzZA==","https://www.instagram.com/reel/DFvSiaFSg0o/?igsh=OHN0cGc5cjdqZnd0"]);
    const [showEmbed, setShowEmbed] = useState<boolean>(true);

    const toggleEmbed = (event: React.MouseEvent<HTMLDivElement, MouseEvent>):void => {
      setShowEmbed(!showEmbed);
      // setTimeout(() => {
      //   if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
      //     window.instgrm.Embeds.process();
      //   }
      // }, 0);
    };

  

  return (
    <section id="content" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Content Creation Journey</h2>
      <Tabs defaultValue="instagram" className="w-full">
        <TabsList onClick={(e)=> toggleEmbed(e)} className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="instagram">
            <Instagram className="mr-2 h-4 w-4" />
            Instagram
          </TabsTrigger>
          <TabsTrigger value="linkedin">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </TabsTrigger>
        </TabsList>
        <TabsContent value="instagram">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {urls.map((url,i) => (
                    <InstagramEmbed key={i} showEmbed={showEmbed} urls={urls[i]}/>
                  ))}
                  {/* {Array.from({ length: 4 }).map((_, i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-149323384367${i}-1d655e66ac1c`}
                      alt={`Instagram content ${i + 1}`}
                      className="w-full h-64 object-cover rounded-md"
                    />
                  ))} */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        <TabsContent value="linkedin">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i}>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-2">
                          Professional Insight #{i + 1}
                        </h3>
                        <p className="text-muted-foreground">
                          Sharing industry insights and professional experiences...
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
