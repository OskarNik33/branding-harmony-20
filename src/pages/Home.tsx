import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from '@/components/ScrollAnimation';


const Home = () => {
  const navigate = useNavigate();
  const { displayText, isTyping } = useTypingEffect("Oblikovalsky", "Osky", 150, 1000);
  const [workRef, isWorkVisible] = useIntersectionObserver({ threshold: 0.3 });


  // Preload frames
  useEffect(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getCurrentFrame(i);
      images.current.push(img);
    }
  }, []);

  // Scroll animation logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollFraction * TOTAL_FRAMES)
      );

      requestAnimationFrame(() => {
        const img = images.current[frameIndex];
        if (img && context && canvas) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 1920;
      canvas.height = 1080;
    }
  }, []);

  return (
    <div className="min-h-screen bg-grid">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-start px-6 md:px-16 lg:pl-80 lg:pr-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-mono font-bold mb-6">
            <span>{displayText}</span>
            {isTyping && <span className="typing-cursor"></span>}
          </h1>
          <h2 className="text-xl md:text-3xl font-mono mb-8 text-muted-foreground">
            NEO-BRUTALIST <br className="md:hidden" />
            DIGITAL DESIGN
          </h2>
          <p className="text-lg mb-12 max-w-2xl">
            Creating unapologetically bold designs with a focus on raw expression,
            structural honesty, and interactive experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => navigate('/portfolio')}>
              VIEW WORK
            </Button>
            <Button onClick={() => navigate('/contact')}>
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>

      {/* SCROLL CANVAS ANIMATION */}
      <ScrollAnimation />


      {/* Featured Work */}
      <section
        ref={workRef}
        className="py-24 px-6 md:px-16 lg:pl-80 lg:pr-20"
      >
        <h2 className="text-3xl font-mono font-bold mb-16">
          {"< FEATURED PROJECTS >"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`thumbnail brutalist-card overflow-hidden ${isWorkVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop';
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-mono font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button onClick={() => navigate('/portfolio')}>
            VIEW ALL WORK
          </Button>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 overflow-hidden border-y-2 border-foreground">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(10).fill("OBLIKOVALSKY NEO-BRUTALIST DIGITAL DESIGN ").map((text, index) => (
            <span key={index} className="text-4xl font-mono font-bold mx-4">{text}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

// Sample data
const featuredProjects = [
  {
    title: "CORPORATE REBRAND",
    category: "DIGITAL DESIGN",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000"
  },
  {
    title: "ALBUM ARTWORK",
    category: "PRINT DESIGN",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000"
  },
  {
    title: "ARCHITECTURAL SHOTS",
    category: "PHOTOGRAPHY",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000"
  },
  {
    title: "PRODUCT LAUNCH",
    category: "MOTION GRAPHICS",
    image: "https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&w=2000"
  }
];

export default Home;
