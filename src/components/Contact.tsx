
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Instagram, Dribbble } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-designer-primary mb-6">
          Get In Touch
        </h2>
        <p className="text-lg md:text-xl text-designer-secondary max-w-2xl mx-auto mb-8">
          Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
        </p>
        
        <Button 
          onClick={() => window.location.href = "mailto:oskar.miketic@gmail.com"}
          size="lg"
          className="bg-designer-accent hover:bg-designer-accent/90 mb-12"
        >
          <Mail className="mr-2 h-5 w-5" />
          oskar.miketic@gmail.com
        </Button>
        
        <div className="flex justify-center space-x-6">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-designer-accent/30 hover:border-designer-accent hover:bg-designer-accent/10">
            <Linkedin className="h-5 w-5 text-designer-accent" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-designer-accent/30 hover:border-designer-accent hover:bg-designer-accent/10">
            <Instagram className="h-5 w-5 text-designer-accent" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-designer-accent/30 hover:border-designer-accent hover:bg-designer-accent/10">
            <Dribbble className="h-5 w-5 text-designer-accent" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
