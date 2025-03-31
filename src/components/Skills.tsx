
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const designSkills = [
    { name: "Visual Identity", level: 95 },
    { name: "Social Media Graphics", level: 90 },
    { name: "Print Design", level: 85 },
    { name: "Web Design", level: 80 },
    { name: "Branding", level: 95 },
    { name: "Typography", level: 90 },
    { name: "Layout Design", level: 85 },
    { name: "3D Design", level: 75 }
  ];

  const toolSkills = [
    { name: "Adobe Creative Suite", level: 90 },
    { name: "Figma", level: 85 },
    { name: "After Effects", level: 80 },
    { name: "Premiere Pro", level: 85 },
    { name: "Blender", level: 70 },
    { name: "Procreate", level: 80 }
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-designer-primary mb-12 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-display font-semibold text-designer-primary mb-6">
                Design
              </h3>
              
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-designer-secondary">{skill.name}</span>
                      <span className="text-designer-accent">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-designer-muted/20" indicatorClassName="bg-designer-accent" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-display font-semibold text-designer-primary mb-6">
                Tools
              </h3>
              
              <div className="space-y-6">
                {toolSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-designer-secondary">{skill.name}</span>
                      <span className="text-designer-accent">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-designer-muted/20" indicatorClassName="bg-designer-accent" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
