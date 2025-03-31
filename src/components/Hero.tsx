
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-designer-primary mb-6 animate-fade-in">
          Graphic Designer
        </h1>
        <p className="text-xl md:text-2xl text-designer-secondary max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          A dynamic and versatile Graphic Designer with a strong foundation in visual communication and media technology.
        </p>
        <p className="text-lg text-designer-muted max-w-2xl mx-auto mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Deeply committed to continuous learning and professional growth.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button 
            onClick={scrollToProjects}
            className="bg-designer-primary hover:bg-designer-primary/90 text-white px-8 py-6"
            size="lg"
          >
            View Work
          </Button>
          <Button 
            onClick={() => window.location.href = "mailto:oskar.miketic@gmail.com"}
            variant="outline"
            className="border-designer-accent text-designer-accent hover:bg-designer-accent/10 px-8 py-6"
            size="lg"
          >
            Get in Touch
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={() => {
              const about = document.getElementById('about');
              if (about) {
                about.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ArrowDown className="h-6 w-6 text-designer-accent" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
