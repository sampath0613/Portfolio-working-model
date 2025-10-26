export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8" data-testid="text-about-heading">
          About Me
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed font-body">
          <p className="text-foreground" data-testid="text-about-intro">
            Passionate about understanding how machines think and modifying architectures to create real-world impact. I'm on a journey to explore the frontiers of artificial intelligence, not as a claim of expertise, but as a continuous learning path driven by curiosity and determination.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="text-current-focus-heading">Current Focus</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start" data-testid="text-focus-transformers">
                <span className="text-primary mr-2">•</span>
                <span>Transformer and LLM architectures - understanding attention mechanisms and their applications</span>
              </li>
              <li className="flex items-start" data-testid="text-focus-quantum">
                <span className="text-primary mr-2">•</span>
                <span>Quantum computing and its intersection with machine learning</span>
              </li>
              <li className="flex items-start" data-testid="text-focus-rl">
                <span className="text-primary mr-2">•</span>
                <span>Reinforcement learning for complex decision-making systems</span>
              </li>
              <li className="flex items-start" data-testid="text-focus-space">
                <span className="text-primary mr-2">•</span>
                <span>Applying ML to astronomy and space domain problems</span>
              </li>
            </ul>
          </div>
          
          <p className="text-foreground/80" data-testid="text-about-mission">
            My mission is to bring change to the AI/ML industry through consistent hard work and innovation. I believe in creating things from scratch, learning deeply, and building technology that genuinely improves people's lives. Whether it's through research, development, or leadership, I'm committed to making a meaningful impact.
          </p>
          
          <p className="text-foreground/80 italic" data-testid="text-about-journey">
            This is a learning journey, and I'm excited about every step of discovering how AI can transform our world.
          </p>
        </div>
      </div>
    </section>
  );
}
