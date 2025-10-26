import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Eye, Rocket, Cpu } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: typeof Brain;
  githubUrl?: string;
}

export default function Projects() {
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
      title: "Space ML Applications",
      description: "Ongoing research exploring machine learning applications in astronomy and satellite data analysis",
      technologies: ["Python", "Scikit-learn", "Astronomy Tools"],
      category: "Space & ML",
      icon: Rocket,
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

  const categories = Array.from(new Set(projects.map(p => p.category)));

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

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid={`text-category-${catIndex}`}>
              {category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(p => p.category === category)
                .map((project, index) => (
                  <Card key={index} className="hover-elevate flex flex-col" data-testid={`card-project-${catIndex}-${index}`}>
                    <CardHeader>
                      <div className="p-2 bg-primary/10 rounded-md w-fit mb-3">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl" data-testid={`text-project-title-${catIndex}-${index}`}>
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-foreground/80 font-body mb-4 flex-1" data-testid={`text-project-description-${catIndex}-${index}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs" data-testid={`badge-tech-${catIndex}-${index}-${idx}`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                          className="w-full"
                          data-testid={`button-github-${catIndex}-${index}`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
