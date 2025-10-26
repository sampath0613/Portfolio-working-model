import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Eye, Rocket, Cpu, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: typeof Brain;
  githubUrl?: string;
}

interface CategoryInfo {
  title: string;
  description: string;
  icon: typeof Brain;
}

export default function Projects() {
  const categories: { [key: string]: CategoryInfo } = {
    "Natural Language Processing": {
      title: "Natural Language Processing",
      description: "Advancing computational models that enable machines to comprehend, generate, and reason with human language for more intelligent communication systems.",
      icon: Brain
    },
    "Computer Vision": {
      title: "Computer Vision",
      description: "Developing algorithms that allow machines to perceive, analyze, and interpret visual data to bridge the gap between perception and understanding.",
      icon: Eye
    }
  };

  const projects: Project[] = [
    {
      title: "Emotion Prediction",
      description: "NLP model for detecting and classifying emotions in text using transformer-based architectures",
      technologies: ["Python", "PyTorch", "Transformers", "BERT"],
      category: "Natural Language Processing",
      icon: Brain,
      githubUrl: "#"
    },
    {
      title: "Named Entity Recognition in Finance",
      description: "Extracting financial entities from text documents to support automated analysis and decision-making",
      technologies: ["Python", "spaCy", "TensorFlow", "NLP"],
      category: "Natural Language Processing",
      icon: Brain,
      githubUrl: "#"
    },
    {
      title: "Pediatric Pneumonia Detection",
      description: "Computer vision system for detecting pneumonia in pediatric chest X-rays using CNNs",
      technologies: ["Python", "Keras", "OpenCV", "CNN"],
      category: "Computer Vision",
      icon: Eye,
      githubUrl: "#"
    },
    {
      title: "Reinforcement Learning",
      description: "Exploring RL algorithms and their applications in complex decision-making environments",
      technologies: ["Python", "OpenAI Gym", "PyTorch"],
      category: "Current Research",
      icon: Cpu,
      githubUrl: "#"
    },
    {
      title: "Quantum Machine Learning",
      description: "Investigating quantum computing approaches to enhance machine learning algorithms",
      technologies: ["Qiskit", "Python", "Quantum Circuits"],
      category: "Current Research",
      icon: Cpu,
      githubUrl: "#"
    }
  ];

  const categoryInfo: { [key: string]: CategoryInfo } = {
    "Natural Language Processing": {
      title: "Natural Language Processing",
      description: "Advancing computational models that enable machines to comprehend, generate, and reason with human language for more intelligent communication systems.",
      icon: Brain
    },
    "Computer Vision": {
      title: "Computer Vision",
      description: "Developing algorithms that allow machines to perceive, analyze, and interpret visual data to bridge the gap between perception and understanding.",
      icon: Eye
    },
    "Space & ML": {
      title: "Space & Machine Learning",
      description: "Applying data-driven and learning-based methodologies to enhance space exploration, astronomical analysis, and autonomous decision-making in extraterrestrial environments.",
      icon: Rocket
    },
    "Current Research": {
      title: "Research & Innovation",
      description: "Investigating adaptive learning paradigms and quantum-enhanced algorithms to advance intelligent decision-making and next-generation computational intelligence.",
      icon: Cpu
    }
  };

  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as { [key: string]: Project[] });

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-projects-heading">
            Projects & Research
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl" data-testid="text-projects-subtitle">
            Building practical solutions and exploring cutting-edge AI/ML applications
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(categoryInfo).map(([categoryKey, info], index) => (
            <Collapsible key={categoryKey} className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -m-6 transition-all duration-300 opacity-0 group-data-[state=open]:opacity-100"></div>
              <CollapsibleTrigger asChild>
                <Card className="mb-4 border-primary/20 cursor-pointer hover:border-primary/40 transition-all relative" data-testid={`card-category-${index}`}>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-md">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2" data-testid={`text-category-title-${index}`}>
                            {info.title}
                          </CardTitle>
                          <p className="text-muted-foreground font-body" data-testid={`text-category-description-${index}`}>
                            {info.description}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-full p-1.5 bg-primary/5 transition-colors group-hover:bg-primary/10">
                        <ChevronDown className="h-4 w-4 text-primary transition-transform duration-300 ease-out group-data-[state=open]:rotate-180" />
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>

              <CollapsibleContent className="space-y-6 mt-2 relative">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-300 transform origin-top">
                  {projectsByCategory[categoryKey]?.map((project, projectIndex) => (
                    <Card key={projectIndex} className="hover-elevate" data-testid={`card-project-${index}-${projectIndex}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-4">
                            <div className="p-2 bg-primary/10 rounded-md w-fit">
                              <project.icon className="w-5 h-5 text-primary" />
                            </div>
                            <CardTitle className="text-xl" data-testid={`text-project-title-${index}-${projectIndex}`}>
                              {project.title}
                            </CardTitle>
                          </div>
                          {project.githubUrl && (
                            <Button variant="ghost" size="icon" className="mt-2" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-testid={`link-github-${index}-${projectIndex}`}>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 font-body mb-4" data-testid={`text-project-description-${index}-${projectIndex}`}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" data-testid={`badge-tech-${index}-${projectIndex}-${techIndex}`}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
