import { motion } from 'framer-motion';
import { Code, Database, LayoutDashboard as Layout, Server, Settings, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  items: string[];
}

const Skills = () => {
  const skills: Skill[] = [
  {
    name: 'Frontend',
    icon: <Layout className="h-6 w-6" />,
    level: 85,
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    icon: <Server className="h-6 w-6" />,
    level: 65,
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication']
  },
  {
    name: 'Database',
    icon: <Database className="h-6 w-6" />,
    level: 60,
    items: ['MongoDB', 'PostgreSQL', 'Firebase']
  },
  {
    name: 'Tools',
    icon: <Settings className="h-6 w-6" />,
    level: 80,
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Webpack', 'npm']
  },
  {
    name: 'Mobile',
    icon: <Smartphone className="h-6 w-6" />,
    level: 50,
    items: ['React Native', 'Responsive Design']
  },
  {
    name: 'Languages',
    icon: <Code className="h-6 w-6" />,
    level: 75,
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL']
  }];


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center">Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My technical skills and technologies I&apos;ve been working with recently
        </p>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}>

          {skills.map((skill, index) =>
          <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                      className="h-full bg-secondary rounded-full"
                      style={{ width: `${skill.level}%` }}>
                    </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) =>
                  <span key={idx} className="skill-badge">{item}</span>
                  )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default Skills;
