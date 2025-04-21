import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';

// Glob your frames from the JPG folder
type FrameModules = Record<string, string>;
const frameModules = import.meta.glob('/src/animacija_cernigoj/*.jpg', {
  eager: true,
  as: 'url',
}) as FrameModules;
const frameUrls: string[] = Object.keys(frameModules)
  .sort()
  .map((path) => frameModules[path]);

// Sample data for featured projects
const featuredProjects = [
  { title: 'CORPORATE REBRAND', category: 'DIGITAL DESIGN', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000' },
  { title: 'ALBUM ARTWORK', category: 'PRINT DESIGN', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000' },
  { title: 'ARCHITECTURAL SHOTS', category: 'PHOTOGRAPHY', image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000' },
  { title: 'PRODUCT LAUNCH', category: 'MOTION GRAPHICS', image: 'https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&w=2000' },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { displayText, isTyping } = useTypingEffect('Oblikovalsky', 'Osky', 150, 1000);
  const [workRef, isWorkVisible] = useIntersectionObserver({ threshold: 0.3 });

  // Refs for scroll-triggered animation
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const maxFrames = frameUrls.length;
  const [animIdx, setAnimIdx] = useState(0);

  // Update frame based on scroll within outer container
  useEffect(() => {
    const onScroll = () => {
      if (!outerRef.current) return;
      const start = outerRef.current.offsetTop;
      const totalHeight = outerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;

      // progress 0 when top of container hits top of viewport
      // progress 1 when bottom of container hits top of viewport
      const end = start + totalHeight - viewportH;
      const rawProgress = (scrollY - start) / (end - start);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      const frameIndex = Math.floor(clamped * (maxFrames - 1));
      setAnimIdx(frameIndex);

      // stick/un-stick logic
      if (innerRef.current) {
        if (scrollY >= start && scrollY <= end) {
          innerRef.current.style.position = 'fixed';
          innerRef.current.style.top = '0';
        } else if (scrollY < start) {
          innerRef.current.style.position = 'relative';
          innerRef.current.style.top = '0';
        } else {
          innerRef.current.style.position = 'absolute';
          innerRef.current.style.top = `${totalHeight - viewportH}px`;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [maxFrames]);

  return (
    <div className="min-h-screen bg-grid">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-start px-6 md:px-16 lg:pl-80 lg:pr-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-mono font-bold mb-6">
            <span>{displayText}</span>
            {isTyping && <span className="typing-cursor" />}
          </h1>
          <h2 className="text-xl md:text-3xl font-mono mb-8 text-muted-foreground">
            NEO-BRUTALIST <br className="md:hidden" /> DIGITAL DESIGN
          </h2>
          <p className="text-lg mb-12 max-w-2xl">
            Creating unapologetically bold designs with a focus on raw expression, structural honesty, and interactive experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="neo-button bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
              onClick={() => navigate('/portfolio')}
            >
              VIEW WORK
            </Button>
            <Button
              className="neo-button bg-accent text-accent-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
              onClick={() => navigate('/contact')}
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll-Triggered Animation Section */}
      <div ref={outerRef} className="relative h-[200vh]">
        <div ref={innerRef} className="w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-mono font-bold mb-8 mt-8">{'< SELECTED WORK >'}</h2>
          <div className="relative w-full max-w-4xl aspect-video overflow-hidden brutalist-border">
            <img
              src={frameUrls[animIdx]}
              alt={`Frame ${animIdx + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).src = '/fallback.png'; }}
            />
            <div className="absolute bottom-4 right-4 font-mono text-xs bg-background/80 px-2 py-1">
              FRAME {animIdx + 1}/{maxFrames}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <section ref={workRef} className="py-24 px-6 md:px-16 lg:pl-80 lg:pr-20">
        <h2 className="text-3xl font-mono font-bold mb-16">{'< FEATURED PROJECTS >'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`thumbnail brutalist-card overflow-hidden ${isWorkVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop'; }}
              />
              <div className="p-4">
                <h3 className="text-xl font-mono font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button
            className="neo-button bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
            onClick={() => navigate('/portfolio')}
          >
            VIEW ALL WORK
          </Button>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 overflow-hidden border-y-2 border-foreground">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(10).fill('OBLIKOVALSKY NEO-BRUTALIST DIGITAL DESIGN ').map((text, index) => (
            <span key={index} className="text-4xl font-mono font-bold mx-4">
              {text}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;