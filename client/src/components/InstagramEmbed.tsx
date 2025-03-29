import { useEffect } from "react";

interface InstagramEmbedProps {
  showEmbed?: boolean; // Add any required props here
  urls?: string;
}

const InstagramEmbed = ({ showEmbed, urls }: InstagramEmbedProps) => {
  useEffect(() => {
    // Load Instagram embed script if not already loaded
    const scriptId = "instagram-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (
      window.instgrm &&
      window.instgrm.Embeds &&
      typeof window.instgrm.Embeds.process === "function"
    ) {
      window.instgrm.Embeds.process();
    }
  }, [showEmbed]);

  return (
    <>
      <div className="instagram-embed">
        <blockquote
          className="instagram-media "
          // data-instgrm-captioned
          data-instgrm-permalink={urls}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "200px",
            minWidth: "0px",
            padding: "0",
            // width: "calc(100% - 2px)",
          }}
        ></blockquote>
      </div>
    </>
  );
};

export default InstagramEmbed;
