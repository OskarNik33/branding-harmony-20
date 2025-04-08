import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const {
    displayText,
    isTyping
  } = useTypingEffect("Oblikovalsky", "Osky", 150, 1000);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [workRef, isWorkVisible] = useIntersectionObserver({
    threshold: 0.3
  });
  const maxFrames = 5;

  // Animation frame reference
  const animationRef = useRef<HTMLDivElement>(null);
  const [animationVisible, setAnimationVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setAnimationVisible(entry.isIntersecting);
    }, {
      threshold: 0.5
    });
    if (animationRef.current) {
      observer.observe(animationRef.current);
    }
    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (animationVisible) {
      const interval = setInterval(() => {
        setCurrentFrame(prev => prev >= maxFrames ? 1 : prev + 1);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [animationVisible]);
  return <div className="min-h-screen bg-grid">
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
            <Button onClick={() => navigate('/portfolio')} className="neo-button text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] bg-brutalist-dark">
              VIEW WORK
            </Button>
            <Button className="neo-button bg-accent text-accent-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]" onClick={() => navigate('/contact')}>
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>
      
      {/* Frame by Frame Animation */}
      <section ref={animationRef} className="py-24 px-6 md:px-16 lg:pl-80 lg:pr-20 flex flex-col items-center">
        <h2 className="text-3xl font-mono font-bold mb-16 self-start">
          {"< SELECTED WORK >"}
        </h2>
        <div className="w-full max-w-4xl aspect-video brutalist-border overflow-hidden">
          <div className="w-full h-full bg-muted flex items-center justify-center relative">
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${animationVisible ? 'opacity-100' : 'opacity-0'}`}>
              <img src={`/frame-${currentFrame}.jpg`} alt={`Animation frame ${currentFrame}`} className="w-full h-full object-cover" onError={e => {
              // If image fails to load, show a fallback
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2940&auto=format&fit=crop';
            }} />
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-xs bg-background/80 px-2 py-1">
              FRAME {currentFrame}/{maxFrames}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Work */}
      <section ref={workRef} className="py-24 px-6 md:px-16 lg:pl-80 lg:pr-20">
        <h2 className="text-3xl font-mono font-bold mb-16">
          {"< FEATURED PROJECTS >"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => <div key={project.title} className={`thumbnail brutalist-card overflow-hidden ${isWorkVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: `${index * 150}ms`
        }}>
              <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" onError={e => {
            // If image fails to load, show a fallback
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop';
          }} />
              <div className="p-4">
                <h3 className="text-xl font-mono font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="neo-button bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]" onClick={() => navigate('/portfolio')}>
            VIEW ALL WORK
          </Button>
        </div>
      </section>
      
      {/* Marquee Section */}
      <section className="py-12 overflow-hidden border-y-2 border-foreground">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(10).fill("OBLIKOVALSKY NEO-BRUTALIST DIGITAL DESIGN ").map((text, index) => <span key={index} className="text-4xl font-mono font-bold mx-4">{text}</span>)}
        </div>
      </section>
    </div>;
};

// Sample data
const featuredProjects = [{
  title: "CORPORATE REBRAND",
  category: "DIGITAL DESIGN",
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000"
}, {
  title: "ALBUM ARTWORK",
  category: "PRINT DESIGN",
  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000"
}, {
  title: "ARCHITECTURAL SHOTS",
  category: "PHOTOGRAPHY",
  image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000"
}, {
  title: "PRODUCT LAUNCH",
  category: "MOTION GRAPHICS",
  image: "https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&w=2000"
}];
export default Home;