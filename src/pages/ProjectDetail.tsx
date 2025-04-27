
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Find the project data based on the ID
  const project = projects.find(p => p.slug === id);

  console.log("Project ID:", id);
  console.log("Found project:", project);

  if (!project) {
    return (
      <div className="min-h-screen bg-grid px-6 md:px-16 lg:pl-80 lg:pr-20 py-24">
        <h1 className="text-4xl font-mono font-bold">Project not found</h1>
        <p className="mt-4">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/portfolio" className="inline-flex items-center mt-6 text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grid px-6 md:px-16 lg:pl-80 lg:pr-20 py-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/portfolio" className="inline-flex items-center mb-8 text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-8">{project.title}</h1>
        
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <p className="text-lg text-muted-foreground">{project.year}</p>
            {project.category && (
              <span className="ml-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                {project.category}
              </span>
            )}
          </div>
          
          <p className="text-lg">{project.description}</p>
          
          {project.details && (
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-mono font-semibold">Project Details</h2>
              <ul className="space-y-2">
                {project.details.map((detail, index) => (
                  <li key={index} className="text-lg flex items-start">
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
