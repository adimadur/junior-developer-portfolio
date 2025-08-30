import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-secondary font-medium mb-2">Hello, I&apos;m</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Junior Frontend Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I build responsive web applications with modern JavaScript frameworks.
              Passionate about clean code and user-friendly interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Resume
              </Button>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:contact@example.com" className="text-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-surface flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-surface p-2 rounded-full shadow-lg">
                <div className="bg-secondary text-white p-2 rounded-full">
                  <code className="text-xs font-mono">{`<coder/>`}</code>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="animate-bounce"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
