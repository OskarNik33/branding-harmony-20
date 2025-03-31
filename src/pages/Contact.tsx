
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.1 }, true);
  const [formRef, isFormVisible] = useIntersectionObserver({ threshold: 0.1 }, true);
  const [linksRef, isLinksVisible] = useIntersectionObserver({ threshold: 0.1 }, true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally include API call to submit the form
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Reset submission state after a delay
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-grid px-6 md:px-16 lg:pl-80 lg:pr-20 py-24">
      <div 
        ref={headerRef} 
        className={`mb-16 transform transition-all duration-700 ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold">
          CONTACT
        </h1>
        <p className="text-lg mt-4 max-w-2xl">
          Let's collaborate on your next project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div 
          ref={formRef}
          className={`transform transition-all duration-700 ${isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="brutalist-card p-6 md:p-8">
            <h2 className="text-2xl font-mono font-bold mb-6">{"< MESSAGE ME >"}</h2>
            
            {submitted ? (
              <div className="bg-primary/20 p-4 text-center">
                <p className="font-mono font-bold">THANK YOU!</p>
                <p>Your message has been sent. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono mb-2" htmlFor="name">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full brutalist-border p-3 bg-transparent focus:outline-none focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-mono mb-2" htmlFor="email">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full brutalist-border p-3 bg-transparent focus:outline-none focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-mono mb-2" htmlFor="message">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full brutalist-border p-3 bg-transparent resize-none focus:outline-none focus:border-primary"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="neo-button bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] w-full font-mono"
                >
                  SEND MESSAGE
                </Button>
              </form>
            )}
          </div>
        </div>
        
        {/* Social Links */}
        <div 
          ref={linksRef}
          className={`transform transition-all duration-700 ${isLinksVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="brutalist-card p-6 md:p-8">
            <h2 className="text-2xl font-mono font-bold mb-6">{"< CONNECT >"}</h2>
            
            <div className="flex flex-col space-y-4">
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-1">EMAIL</div>
                <a 
                  href="mailto:hello@oblikovalsky.com" 
                  className="text-lg hover:text-primary transition-colors"
                >
                  HELLO@OBLIKOVALSKY.COM
                </a>
              </div>
              
              <div className="mt-4">
                <div className="font-mono text-xs text-muted-foreground mb-1">LOCATION</div>
                <p className="text-lg">BERLIN, GERMANY</p>
              </div>
              
              <div className="pt-8">
                <h3 className="font-mono text-lg mb-4">SOCIAL PLATFORMS</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      className="block w-full neo-button bg-background text-foreground px-4 py-3 text-center font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="brutalist-card p-6 md:p-8 mt-8">
            <h2 className="text-2xl font-mono font-bold mb-4">{"< AVAILABILITY >"}</h2>
            <p>
              Currently available for select freelance projects and collaborations. 
              I'm particularly interested in work that pushes creative boundaries 
              and embraces bold visual exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample social links
const socialLinks = [
  { name: 'INSTAGRAM', url: 'https://instagram.com/' },
  { name: 'BEHANCE', url: 'https://behance.net/' },
  { name: 'DRIBBBLE', url: 'https://dribbble.com/' },
  { name: 'LINKEDIN', url: 'https://linkedin.com/' }
];

export default Contact;
