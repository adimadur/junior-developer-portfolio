import { motion } from 'framer-motion';
import { GraduationCap, Calendar1 as Calendar, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

interface Course {
  name: string;
  provider: string;
  date: string;
  certificate?: string;
}

const Education = () => {
  const educationItems: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2019 - 2023",
    description: "Focused on web development, algorithms, and software engineering principles. Completed capstone project on building scalable web applications.",
    achievements: [
    "Dean's List 2021-2023",
    "Best Final Year Project Award",
    "Web Development Club President"]

  }];


  const courses: Course[] = [
  {
    name: "Advanced React and Redux",
    provider: "Udemy",
    date: "2023",
    certificate: "https://example.com/cert"
  },
  {
    name: "Complete Node.js Developer",
    provider: "Zero To Mastery Academy",
    date: "2022",
    certificate: "https://example.com/cert"
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    provider: "freeCodeCamp",
    date: "2022",
    certificate: "https://example.com/cert"
  },
  {
    name: "Responsive Web Design",
    provider: "freeCodeCamp",
    date: "2021",
    certificate: "https://example.com/cert"
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
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center">Education</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My academic background and continuous learning journey
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-primary" />
              Formal Education
            </h3>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}>

              {educationItems.map((edu, index) =>
              <motion.div key={index} variants={item} className="mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-secondary font-medium mb-3">{edu.institution}</p>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      
                      {edu.achievements && edu.achievements.length > 0 &&
                    <div>
                          <h5 className="font-semibold mb-2 flex items-center">
                            <Award className="h-4 w-4 mr-1 text-secondary" />
                            Achievements
                          </h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {edu.achievements.map((achievement, idx) =>
                        <li key={idx}>{achievement}</li>
                        )}
                          </ul>
                        </div>
                    }
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
          
          {/* Online Courses */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-primary" />
              Online Courses & Certifications
            </h3>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}>

              {courses.map((course, index) =>
              <motion.div key={index} variants={item}>
                  <Card className="h-full">
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{course.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{course.provider}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {course.date}
                        </span>
                        {course.certificate &&
                      <a
                        href={course.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-secondary hover:underline">

                            View Certificate
                          </a>
                      }
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

};

export default Education;