import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Compass } from "lucide-react";

export default function Vision() {
  return (
    <section id="vision" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-vision-heading">
            Interests & Vision
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto" data-testid="text-vision-subtitle">
            Driven by curiosity and a commitment to meaningful impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center" data-testid="card-curiosity">
            <CardContent className="pt-6">
              <div className="p-3 bg-primary/10 rounded-md w-fit mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Deep Curiosity</h3>
              <p className="text-sm text-foreground/80 font-body">
                Exploring transformer architectures, LLM reliability, and quantum computing applications
              </p>
            </CardContent>
          </Card>

          <Card className="text-center" data-testid="card-mission">
            <CardContent className="pt-6">
              <div className="p-3 bg-primary/10 rounded-md w-fit mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Mission-Driven</h3>
              <p className="text-sm text-foreground/80 font-body">
                Change the AI/ML industry by building technology that improves people's lives
              </p>
            </CardContent>
          </Card>

          <Card className="text-center" data-testid="card-path">
            <CardContent className="pt-6">
              <div className="p-3 bg-primary/10 rounded-md w-fit mx-auto mb-4">
                <Compass className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Open to Impact</h3>
              <p className="text-sm text-foreground/80 font-body">
                Startup roles, big tech, or founding ventures - focused on impact over path
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20" data-testid="card-vision-statement">
          <CardContent className="pt-6">
            <p className="text-lg text-center text-foreground leading-relaxed font-body">
              I believe that the future of AI lies not just in making systems smarter, but in making them more reliable, 
              interpretable, and aligned with human values. Through my work in transformer architectures, quantum ML, 
              and reinforcement learning, I aim to contribute to building AI systems that are both powerful and trustworthy. 
              My goal is to bridge the gap between cutting-edge research and real-world applications that make a tangible 
              difference in people's lives.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
