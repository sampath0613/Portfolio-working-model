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
                Pursuing research in advanced neural architectures, natural language understanding, and quantum machine learning to advance reasoning, generalization, and interpretability in intelligent systems.
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
                Committed to bridging theoretical advancements and applied innovation in AI to design learning systems that are not only performant but also transparent, reliable, and human-aligned AI that advances scientific and societal goals.
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
                Collaborating across academia, research, and industry to translate machine learning and computational intelligence research into practical solutions that contribute to knowledge, discovery, and societal progress.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20" data-testid="card-vision-statement">
          <CardContent className="pt-6">
            <p className="text-lg text-center text-foreground leading-relaxed font-body">
              I believe that the next frontier of Artificial Intelligence lies at the intersection of rigorous research and responsible innovation. Through my work in natural language processing, computer vision, reinforcement learning, and quantum machine learning, I aim to develop models that are both theoretically grounded and empirically robust. My broader vision is to advance AI as a scientific discipline — one that expands human understanding, augments discovery, and operates with transparency and trust.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
