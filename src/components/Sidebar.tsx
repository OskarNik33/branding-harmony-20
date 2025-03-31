
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const routes = [
    { path: '/', label: 'HOME' },
    { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/timeline', label: 'TIMELINE' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Sidebar trigger for mobile */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-40 neo-button bg-background w-10 h-10 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <div className="w-5 h-5 relative">
          <span className={`absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
          <span className={`absolute h-0.5 w-full bg-foreground transform transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
        </div>
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full backdrop-blur-md bg-sidebar/90 brutalist-border border-l-0 border-t-0 border-b-0 overflow-y-auto">
          <div className="p-6">
            <h1 className="font-mono font-bold text-2xl text-foreground">
              OBLIKOVALSKY
            </h1>
            <p className="text-xs mt-1 text-muted-foreground font-mono">
              DIGITAL DESIGNER
            </p>
          </div>
          
          <Separator className="mb-6" />
          
          <nav className="px-6">
            <ul className="space-y-4">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className={`block py-2 font-mono text-lg transition-all duration-200 ${
                      isActive(route.path) 
                        ? 'text-accent font-bold' 
                        : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="absolute bottom-8 left-0 right-0 px-6">
            <Separator className="mb-6" />
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:hello@oblikovalsky.com" 
                className="font-mono text-sm text-muted-foreground hover:text-primary"
              >
                hello@oblikovalsky.com
              </a>
              <div className="text-xs text-muted-foreground font-mono">
                © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
