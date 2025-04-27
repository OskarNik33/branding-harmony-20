
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Find the project data based on the ID
  const project = projects.find(p => p.slug === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-grid px-6 md:px-16 lg:pl-80 lg:pr-20 py-24">
        <h1 className="text-4xl font-mono font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grid px-6 md:px-16 lg:pl-80 lg:pr-20 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-8">{project.title}</h1>
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">{project.year}</p>
          <p className="text-lg">{project.description}</p>
          {project.details && (
            <div className="space-y-4">
              {project.details.map((detail, index) => (
                <p key={index} className="text-lg">{detail}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Mock project data - this could be moved to a separate file later
const projects = [
  {
    slug: 'konglomerat-2024',
    title: 'Konglomerat 2024',
    description: 'An exhibition organized by alumni and former students of Oblikovna, showcasing various art forms and design approaches.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop',
    details: [
      'Developed comprehensive exhibition design system',
      'Created cohesive visual identity across all materials',
      'Coordinated with multiple stakeholders to ensure design consistency'
    ]
  },
  {
    slug: 'fanfara-2024',
    title: '17. Fanfara - 2024',
    description: 'The biggest student organised marketing conference in Slovenia, featuring innovative design solutions and brand strategies.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2940&auto=format&fit=crop',
    details: [
      'Led event branding initiatives',
      'Designed comprehensive marketing materials',
      'Developed digital and print assets'
    ]
  },
  {
    slug: 'generali-levji-delez',
    title: 'Generali - Levji delež',
    description: 'Created the Levji delež profile on Instagram, focusing on financial knowledge and investment confidence building.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2940&auto=format&fit=crop',
    details: [
      'Developed social media strategy',
      'Created educational content series',
      'Designed visual identity for financial education content'
    ]
  }
];

export default ProjectDetail;

