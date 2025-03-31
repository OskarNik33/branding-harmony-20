
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Experience = () => {
  const experiences = [
    {
      title: "Active Member of Design Team",
      company: "Student Section of the Slovenian Marketing Association (ŠSDMS)",
      period: "Oct 2023 - present",
      details: [
        "Collaborate extensively on internal and external marketing projects",
        "Produce social media content, visual branding materials, motion graphics and animation",
        "Create engaging presentations for marketing initiatives"
      ]
    },
    {
      title: "Visual Brand Designer",
      company: "17. Fanfara",
      period: "Mar 2024 - Nov 2024",
      details: [
        "Contributed to creating a cohesive visual identity for a marketing conference",
        "Produced banners, posters, social media graphics, motion graphics and promotional materials"
      ]
    },
    {
      title: "Junior Graphic Designer",
      company: "Internavti d.o.o., Marketing Agency",
      period: "Mar 2022 - May 2023",
      details: [
        "Assisted project management for various marketing campaigns",
        "Crafted compelling graphics for social media, digital marketing campaigns, banners, and billboards",
        "Performed essential video editing tasks",
        "Worked on projects for clients like NLB, Ljubljanske Mlekarne, Petrol, A1, Govori bob, Generali, Velux, and MOL"
      ]
    },
    {
      title: "Print Assistant",
      company: "DA Tisk",
      period: "Jan 2022 - Feb 2022",
      details: [
        "Supported prepress operations and print workflow",
        "Deepened technical knowledge of production processes"
      ]
    },
    {
      title: "Tech & Design Event Staff",
      company: "Ljubljana Pride",
      period: "Jun 2021 - Jul 2021",
      details: [
        "Filmed and photographed events",
        "Edited videos, created event trailers, intros, and motion graphics",
        "Enhanced audience engagement through visual storytelling"
      ]
    },
    {
      title: "Graphic Designer",
      company: "Inštitut 8. marec",
      period: "Feb 2021 - Mar 2021",
      details: [
        "Designed visuals for the impactful social campaign 'Samo Ja pomeni Ja'",
        "Reinforced message clarity and visibility through strategic design"
      ]
    },
    {
      title: "Graphic Design Intern",
      company: "Delo - Newspaper",
      period: "May 2019 - Jun 2019",
      details: [
        "Gained foundational industry experience in editorial design",
        "Worked on newspaper infographic design",
        "Established a strong base for future professional skills"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's degree in Graphic and Media Technology",
      institution: "University of Ljubljana, Faculty of Natural Sciences and Engineering",
      period: "2023 - present"
    },
    {
      degree: "Graphic Design",
      institution: "Secondary School of Design and Photography Ljubljana",
      period: "2017 - 2021"
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-designer-primary mb-12 text-center">
          Experience & Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-display font-semibold text-designer-primary mb-6">
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-designer-accent">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-3">
                    <h4 className="text-xl font-display font-semibold text-designer-primary">{exp.title}</h4>
                    <span className="text-designer-accent font-medium text-sm md:text-base">{exp.period}</span>
                  </div>
                  <p className="text-designer-secondary font-medium mb-4">{exp.company}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="text-designer-secondary">{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-designer-primary mb-6">
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-display font-semibold text-designer-primary mb-2">{edu.degree}</h4>
                  <p className="text-designer-secondary mb-2">{edu.institution}</p>
                  <p className="text-designer-accent font-medium">{edu.period}</p>
                </CardContent>
              </Card>
            ))}
            
            <Separator className="my-8" />
            
            <h3 className="text-2xl font-display font-semibold text-designer-primary mb-6">
              Additional Information
            </h3>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-display font-semibold text-designer-primary mb-4">Driving License</h4>
                <p className="text-designer-secondary">Full driving license</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
