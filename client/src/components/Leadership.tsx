import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Trophy, Calendar, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Leadership() {
  const achievements = [
    {
      icon: Trophy,
      title: "ML Hackathon Organization",
      description: "Organized a space-domain ML hackathon with 16 teams competing across 6 problem statements",
      details: ["Satellite collision prediction", "Exoplanet atmosphere analysis", "Cloud segmentation", "And 3 more challenges"]
    },
    {
      icon: Calendar,
      title: "National Space Day Celebration",
      description: "Led university-level celebration of National Space Day, bringing together students and faculty",
      details: ["Guest Speeches", "Games & Competitions", "Student Presentations", "Community engagement"]
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Built active social media presence and organized 2 major events",
      details: ["Growing student community", "Regular technical sessions", "Collaborative projects"]
    }
  ];

  return (
    <section id="leadership" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-leadership-heading">
            Leadership & Impact
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl" data-testid="text-leadership-subtitle">
            Taking initiative to build communities and create opportunities for fellow students
          </p>
        </div>

        <Collapsible>
          <CollapsibleTrigger asChild>
            <Card className="mb-8 border-primary/20 cursor-pointer hover:border-primary/40 transition-all" data-testid="card-space-club">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2" data-testid="text-space-club-title">Antariksh President</CardTitle>
                      <p className="text-muted-foreground font-body" data-testid="text-space-club-org">Space Club, School of Engineering</p>
                      <p className="text-muted-foreground font-body" data-testid="text-space-club-org">Jawaharlal Nehru University</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" data-testid="badge-co-founder">Co-founder</Badge>
                      <Badge variant="outline" data-testid="badge-timeline">April 2025 - Present</Badge>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 collapsible-open:rotate-180" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 font-body mb-0" data-testid="text-space-club-description">
                  Co-founded and currently leading the Space Club, fostering interest in astronomy, space technology, and machine learning applications in the space domain.
                </p>
              </CardContent>
            </Card>
          </CollapsibleTrigger>

          <CollapsibleContent className="space-y-6 mt-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-achievement-${index}`}>
                  <CardHeader>
                    <div className="p-2 bg-primary/10 rounded-md w-fit mb-3">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl" data-testid={`text-achievement-title-${index}`}>
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 font-body mb-3" data-testid={`text-achievement-description-${index}`}>
                      {achievement.description}
                    </p>
                    <ul className="space-y-1">
                      {achievement.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start" data-testid={`text-achievement-detail-${index}-${idx}`}>
                          <span className="text-primary mr-2">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
