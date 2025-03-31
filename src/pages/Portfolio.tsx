
import { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Category = 'Photography' | 'Motion Graphics' | 'Print Design' | 'Digital Design';

const Portfolio = () => {
  const [openCategory, setOpenCategory] = useState<Category | null>(null);
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.1 }, true);
  
  const toggleCategory = (category: Category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-grid px-6 md:px-16 lg:pl-80 lg:pr-20 py-24">
      <div 
        ref={headerRef} 
        className={`mb-16 transform transition-all duration-700 ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold">
          PORTFOLIO
        </h1>
        <p className="text-lg mt-4 max-w-2xl">
          Exploring bold, unapologetic designs across different mediums. View my work 
          categorized by discipline.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.name} className="brutalist-card">
            <div 
              className="category-header p-4 md:p-6"
              onClick={() => toggleCategory(category.name as Category)}
            >
              <h2 className="text-2xl md:text-3xl font-mono font-bold">
                {"< "}{category.name}{" >"}
              </h2>
              <ChevronRight 
                className={`chevron w-6 h-6 transition-transform ${openCategory === category.name ? 'open' : ''}`} 
              />
            </div>
            
            {openCategory === category.name && (
              <div className="p-4 md:p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project) => (
                  <div key={project.title} className="thumbnail overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full aspect-square object-cover"
                      onError={(e) => {
                        // If image fails to load, show a fallback with category name
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000';
                      }}
                    />
                    <div className="p-3">
                      <h3 className="text-lg font-mono font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample data
const categories = [
  {
    name: 'Photography',
    projects: [
      { title: 'URBAN GEOMETRY', year: '2023', image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000' },
      { title: 'INDUSTRIAL SPACES', year: '2023', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000' },
      { title: 'MODERN PORTRAITS', year: '2022', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000' },
      { title: 'ARCHITECTURAL STUDY', year: '2022', image: 'https://images.unsplash.com/photo-1486744328743-c1a306f6caba?q=80&w=2000' },
      { title: 'CONTRAST SERIES', year: '2021', image: 'https://images.unsplash.com/photo-1459478309853-2c33a60058e7?q=80&w=2000' },
      { title: 'MINIMALIST FORMS', year: '2021', image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=2000' },
    ]
  },
  {
    name: 'Motion Graphics',
    projects: [
      { title: 'KINETIC TYPOGRAPHY', year: '2023', image: 'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=2000' },
      { title: 'BRAND ANIMATIONS', year: '2023', image: 'https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&w=2000' },
      { title: 'EXPLAINER VIDEOS', year: '2022', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000' },
      { title: '3D PRODUCT REVEAL', year: '2022', image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2000' }
    ]
  },
  {
    name: 'Print Design',
    projects: [
      { title: 'VINYL ALBUM ARTWORK', year: '2023', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000' },
      { title: 'MAGAZINE LAYOUT', year: '2023', image: 'https://images.unsplash.com/photo-1520013333831-acd77cc09d8e?q=80&w=2000' },
      { title: 'TYPOGRAPHIC POSTERS', year: '2022', image: 'https://images.unsplash.com/photo-1506269351850-254b471c0cb7?q=80&w=2000' },
      { title: 'BUSINESS IDENTITY', year: '2022', image: 'https://images.unsplash.com/photo-1599443015574-edf7d17d72c1?q=80&w=2000' },
      { title: 'EVENT MATERIALS', year: '2021', image: 'https://images.unsplash.com/photo-1583197098665-ee64a9a886fc?q=80&w=2000' }
    ]
  },
  {
    name: 'Digital Design',
    projects: [
      { title: 'E-COMMERCE WEBSITE', year: '2023', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000' },
      { title: 'MOBILE APP UI', year: '2023', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000' },
      { title: 'CORPORATE REBRAND', year: '2022', image: 'https://images.unsplash.com/photo-1545239351-cefa43af60f3?q=80&w=2000' },
      { title: 'SOCIAL MEDIA CAMPAIGN', year: '2022', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000' },
      { title: 'LANDING PAGE DESIGN', year: '2021', image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2000' },
      { title: 'INTERACTIVE DASHBOARD', year: '2021', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000' }
    ]
  }
];

export default Portfolio;
