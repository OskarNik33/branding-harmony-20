
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-designer-primary mb-12 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-square bg-gradient-to-br from-designer-accent/20 to-designer-accent/5 rounded-lg flex items-center justify-center">
              <div className="w-[90%] h-[90%] bg-gradient-to-tr from-designer-accent/30 to-designer-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-8xl font-display font-bold text-designer-accent/50">OM</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed text-designer-secondary">
              I'm a graphic designer with a passion for creating visual solutions that communicate effectively. My approach combines strategic thinking with creative execution to deliver designs that not only look good but also solve problems.
            </p>
            
            <p className="text-lg leading-relaxed text-designer-secondary">
              With experience across branding, print, digital media, and motion graphics, I bring a versatile skill set to every project. I believe in the power of design to transform ideas into compelling visual narratives.
            </p>
            
            <p className="text-lg leading-relaxed text-designer-secondary">
              Currently pursuing a Bachelor's degree in Graphic and Media Technology at the University of Ljubljana, I'm constantly expanding my knowledge and skills to stay at the forefront of design innovation.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="border-designer-accent/20 hover:border-designer-accent transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-4 text-designer-primary">
                Visual Communication
              </h3>
              <p className="text-designer-secondary">
                Crafting designs that effectively communicate messages and evoke emotions through thoughtful visual elements.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-designer-accent/20 hover:border-designer-accent transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-4 text-designer-primary">
                Creative Problem Solving
              </h3>
              <p className="text-designer-secondary">
                Approaching design challenges with analytical thinking and innovative solutions that address client needs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-designer-accent/20 hover:border-designer-accent transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-4 text-designer-primary">
                Technical Expertise
              </h3>
              <p className="text-designer-secondary">
                Combining artistic vision with technical skills across various design tools and media formats.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
