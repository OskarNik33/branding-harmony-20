
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto">
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-designer-secondary font-medium">
              © {currentYear} Oskar Miketič
            </p>
          </div>
          
          <div className="text-designer-muted text-sm">
            Graphic Designer • Visual Communicator
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
