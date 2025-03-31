
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const About = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.1 }, true);
  const [bioRef, isBioVisible] = useIntersectionObserver({ threshold: 0.1 }, true);
  const [gridRef, isGridVisible] = useIntersectionObserver({ threshold: 0.1 }, true);

  return (
    <div className="min-h-screen bg-grid px-6 md:px-16 lg:pl-80 lg:pr-20 py-24">
      <div 
        ref={headerRef} 
        className={`mb-16 transform transition-all duration-700 ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold">
          ABOUT
        </h1>
        <p className="text-lg mt-4 max-w-2xl">
          The mind behind the neo-brutalist designs.
        </p>
      </div>

      <div 
        ref={bioRef}
        className={`brutalist-card p-6 md:p-8 mb-16 transform transition-all duration-700 ${isBioVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <h2 className="text-2xl font-mono font-bold mb-6">{"< BIO >"}</h2>
        <div className="space-y-4">
          <p>
            Oblikovalsky is a digital designer with a passion for neo-brutalist aesthetics, 
            combining raw structural elements with bold typography and interactive experiences.
          </p>
          <p>
            With over seven years of experience across print and digital media, my work 
            embraces the honesty of materials, functionality, and unapologetic expression 
            that defines the brutalist movement, adapted for the digital age.
          </p>
          <p>
            Based in Berlin, I work with clients globally to create distinctive visual 
            identities and digital experiences that stand out in a world of minimalist 
            sameness.
          </p>
        </div>
        
        <h2 className="text-2xl font-mono font-bold mt-12 mb-6">{"< PHILOSOPHY >"}</h2>
        <div className="space-y-4">
          <p>
            My design approach embraces structural honesty, raw expression, and functional 
            clarity. I believe that design should communicate directly and without pretense, 
            celebrating its construction rather than hiding it.
          </p>
          <p>
            In a digital landscape dominated by polished, homogenized interfaces, I create 
            work that demands attention through contrast, unexpected interactions, and 
            distinctive typography—all while maintaining usability and purpose.
          </p>
        </div>
      </div>

      <div 
        ref={gridRef}
        className={`transform transition-all duration-700 ${isGridVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <h2 className="text-2xl font-mono font-bold mb-8">{"< EXPERTISE >"}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tools */}
          <div className="brutalist-card p-6">
            <h3 className="text-xl font-mono font-bold mb-4">TOOLS</h3>
            <ul className="space-y-2">
              {tools.map((tool, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-primary mr-2">►</span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Education */}
          <div className="brutalist-card p-6">
            <h3 className="text-xl font-mono font-bold mb-4">EDUCATION</h3>
            <ul className="space-y-4">
              {education.map((item, index) => (
                <li key={index}>
                  <div className="text-primary font-mono text-sm">{item.year}</div>
                  <div className="font-bold">{item.degree}</div>
                  <div className="text-sm text-muted-foreground">{item.institution}</div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Specialties */}
          <div className="brutalist-card p-6">
            <h3 className="text-xl font-mono font-bold mb-4">SPECIALTIES</h3>
            <ul className="space-y-2">
              {specialties.map((specialty, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-accent mr-2">►</span>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample data
const tools = [
  'Adobe Creative Suite',
  'Figma',
  'Blender',
  'HTML/CSS/JS',
  'Cinema 4D',
  'After Effects',
  'Procreate',
  'Webflow',
];

const education = [
  {
    year: '2012 - 2016',
    degree: 'Bachelor of Fine Arts in Design',
    institution: 'Berlin University of the Arts'
  },
  {
    year: '2016 - 2018',
    degree: 'Master of Arts in Digital Media',
    institution: 'Royal College of Art, London'
  },
  {
    year: '2019',
    degree: 'Typography Masterclass',
    institution: 'Type Directors Club'
  }
];

const specialties = [
  'Digital Design',
  'Brand Identity',
  'Typography',
  'User Interface Design',
  'Editorial Design',
  'Motion Graphics',
  'Web Development',
  'Interactive Experiences'
];

export default About;
