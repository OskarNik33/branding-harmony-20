
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Konglomerat 2024",
      description: "An exhibition organized by alumni and former students of Oblikovna",
      categories: ["Exhibition Design", "Visual Identity"],
      color: "bg-[#182432]"
    },
    {
      title: "17. Fanfara - 2024",
      description: "The biggest student organised marketing conference in Slovenia",
      categories: ["Event Branding", "Marketing Materials"],
      color: "bg-[#3B2C39]"
    },
    {
      title: "Generali - Levji delež",
      description: "Created the Levji delež profile on Instagram, which focuses on gaining financial knowledge and building confidence in saving and investing",
      categories: ["Social Media", "Financial Education"],
      color: "bg-[#313A3C]"
    },
    {
      title: "Krik : Prvi glas",
      description: "Visual identity of events for a theatre play, on heavy thematics about sexual abuse of children",
      categories: ["Theatre", "Identity Design"],
      color: "bg-[#252123]"
    },
    {
      title: "ZHA music videos",
      description: "Filming BTS, photographing, visual design and creative direction",
      categories: ["Music Video", "Visual Direction"],
      color: "bg-[#272423]"
    }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-designer-primary mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden border-0 rounded-xl">
              <div className={`${project.color} aspect-video w-full flex items-center justify-center p-6`}>
                <span className="text-white font-display font-bold text-2xl text-center">
                  {project.title}
                </span>
              </div>
              <CardContent className="p-6">
                <p className="text-designer-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, idx) => (
                    <Badge key={idx} variant="outline" className="border-designer-accent/50 text-designer-accent">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
