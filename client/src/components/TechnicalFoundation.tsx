import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, Cpu, Star } from "lucide-react";

export default function TechnicalFoundation() {
  const coursework = [
    "Data Structures",
    "Design & Analysis of Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Machine Learning",
    "Theory of Computation",
    "Introduction to AI"
  ];

  const favoriteSubjects = ["Theory of Computation", "Introduction to AI"];

  const programmingLanguages = [
    { name: "Python", level: "primary" },
    { name: "C", level: "secondary" },
    { name: "C++", level: "secondary" }
  ];

  const toolsPlatforms = [
    "Power BI",
    "Cloud Computing",
    "Git & GitHub",
    "Jupyter Notebooks"
  ];

  const aimlConcepts = [
    "Transformer Architectures",
    "Large Language Models",
    "AI Agents",
    "Graph-based Learning",
    "Neural Networks",
    "Attention Mechanisms"
  ];

  return (
    <section id="technical" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-technical-heading">
            Technical Foundation
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl" data-testid="text-technical-subtitle">
            Building blocks of my technical journey - continuous learning and growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card data-testid="card-coursework">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-md">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <CardTitle>Coursework Completed</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <Badge 
                    key={index} 
                    variant={favoriteSubjects.includes(course) ? "default" : "secondary"}
                    className="text-sm"
                    data-testid={`badge-course-${index}`}
                  >
                    {course}
                    {favoriteSubjects.includes(course) && (
                      <Star className="w-3 h-3 ml-1 fill-current" />
                    )}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 font-body" data-testid="text-favorite-note">
                <Star className="w-3 h-3 inline fill-current mr-1" />
                Favorite subjects marked with star
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-programming">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <CardTitle>Languages & Tools</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Programming Languages</h3>
                <div className="space-y-3">
                  {programmingLanguages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between" data-testid={`row-language-${index}`}>
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <Badge variant={lang.level === "primary" ? "default" : "secondary"}>
                        {lang.level === "primary" ? "Primary" : "Proficient"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsPlatforms.map((tool, index) => (
                    <Badge key={index} variant="outline" className="text-sm" data-testid={`badge-tool-${index}`}>
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card data-testid="card-aiml">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-md">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <CardTitle>AI/ML Concepts & Focus Areas</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {aimlConcepts.map((concept, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="text-sm"
                  data-testid={`badge-concept-${index}`}
                >
                  {concept}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 font-body italic" data-testid="text-learning-note">
              Actively learning and exploring these areas through projects and research
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
