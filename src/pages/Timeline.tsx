
import { useEffect, useRef } from 'react';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-grid px-6 md:px-16 lg:pl-80 lg:pr-20 py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold">
          TIMELINE
        </h1>
        <p className="text-lg mt-4 max-w-2xl">
          A chronological journey through my career and projects.
        </p>
      </div>

      <div ref={timelineRef} className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-foreground"></div>

        {/* Timeline items */}
        {timelineData.map((item, index) => (
          <div 
            key={index}
            className={`timeline-item relative mb-16 md:mb-24 ${
              index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
            }`}
          >
            <div className={`relative flex ${
              index % 2 === 0 
                ? 'flex-row md:text-right md:justify-end' 
                : 'flex-row md:text-left'
            }`}>
              {/* Dot */}
              <div className="absolute left-0 md:left-[calc(50%-0.5px)] md:-translate-x-1/2 transform -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-2 border-foreground"></div>
              
              {/* Content */}
              <div className={`pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              } w-full md:w-[calc(100%-1rem)]`}>
                <div className="brutalist-card p-6">
                  <div className="mb-2 text-accent font-mono text-sm">{item.date}</div>
                  <h3 className="text-xl font-mono font-bold mb-2">{item.title}</h3>
                  <div className="text-primary text-sm mb-4">{item.subtitle}</div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs font-mono px-2 py-1 brutalist-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample timeline data
const timelineData = [
  {
    date: '2023 - PRESENT',
    title: 'SENIOR DIGITAL DESIGNER',
    subtitle: 'Studio Brutalist',
    description: 'Leading design projects for major tech and cultural clients, with a focus on creating bold, unapologetic digital experiences.',
    tags: ['UX/UI', 'BRANDING', 'CREATIVE DIRECTION']
  },
  {
    date: '2022 - 2023',
    title: 'CREATIVE DESIGNER',
    subtitle: 'Neo Agency',
    description: 'Developed brand identities and interactive experiences for clients in the fashion and technology sectors.',
    tags: ['BRAND IDENTITY', 'PRINT', 'DIGITAL']
  },
  {
    date: '2021 - 2022',
    title: 'ALBUM ARTWORK PROJECT',
    subtitle: 'Independent Work',
    description: 'Created a series of album covers for independent musicians, exploring the intersection of typography and photography.',
    tags: ['PRINT', 'TYPOGRAPHY', 'PHOTOGRAPHY']
  },
  {
    date: '2020 - 2021',
    title: 'JUNIOR DESIGNER',
    subtitle: 'Design Collective',
    description: 'Collaborated with a team of designers on branding and digital projects for startups and established companies.',
    tags: ['COLLABORATION', 'BRANDING', 'DIGITAL']
  },
  {
    date: '2019 - 2020',
    title: 'DESIGN INTERNSHIP',
    subtitle: 'Print Studio',
    description: 'Assisted with the production of print materials and learned about the technical aspects of print design.',
    tags: ['PRINT', 'PRODUCTION', 'LEARNING']
  },
  {
    date: '2016 - 2019',
    title: 'DESIGN EDUCATION',
    subtitle: 'Design Academy',
    description: 'Studied graphic design with a focus on typography, branding, and digital media. Graduated with honors.',
    tags: ['EDUCATION', 'FOUNDATION', 'THEORY']
  }
];

export default Timeline;
