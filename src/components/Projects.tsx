import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Dashboard",
      description: "A responsive admin dashboard for an e-commerce platform with analytics, inventory management, and order processing features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true
    },
    {
      title: "Weather App",
      description: "A weather application that provides current weather data and forecasts for any location using a third-party API.",
      image: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      tags: ["JavaScript", "React", "CSS", "API Integration"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A task management application with features like task creation, categorization, due dates, and progress tracking.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      tags: ["React", "Firebase", "Material UI"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true
    },
    {
      title: "Personal Blog",
      description: "A blog platform with content management system, comment functionality, and responsive design.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built to solve a specific problem or learn new technologies.
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="project-card h-full flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" variant="accent" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                
                <CardFooter className="flex flex-wrap gap-2 pt-4 border-t">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="skill-badge flex items-center">
                      <Code className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
