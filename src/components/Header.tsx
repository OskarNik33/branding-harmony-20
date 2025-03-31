
import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactClick = () => {
    window.location.href = "mailto:oskar.miketic@gmail.com";
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-display font-bold text-xl text-designer-primary">
          Oskar Miketič
        </div>
        
        {!isMobile ? (
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-designer-primary hover:text-designer-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-designer-primary hover:text-designer-accent transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-designer-primary hover:text-designer-accent transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-designer-primary hover:text-designer-accent transition-colors"
            >
              Skills
            </button>
            <Button 
              onClick={contactClick}
              className="bg-designer-accent hover:bg-designer-accent/90"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </nav>
        ) : (
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-xl font-display font-medium text-designer-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-xl font-display font-medium text-designer-primary"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-xl font-display font-medium text-designer-primary"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-xl font-display font-medium text-designer-primary"
            >
              Skills
            </button>
            <Button 
              onClick={contactClick}
              className="bg-designer-accent hover:bg-designer-accent/90 w-full mt-4"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
