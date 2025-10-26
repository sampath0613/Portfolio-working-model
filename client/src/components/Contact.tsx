import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sampathdevamgoth9999@gmail.com",
      href: "sampathdevamgoth9999@gmail.com",
      testId: "link-email"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sampath0613",
      href: "https://www.linkedin.com/in/sampath0613/",
      testId: "link-linkedin"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sampath0613",
      href: "https://github.com/sampath0613",
      testId: "link-github"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "JNU, Delhi",
      href: null,
      testId: "text-location"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-heading">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Interested in my technical and research work, or just want to connect? Feel free to reach out!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto" data-testid="card-contact">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 rounded-md bg-background hover-elevate"
                  data-testid={`row-contact-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-foreground font-medium">{link.value}</p>
                    </div>
                  </div>
                  {link.href && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(link.href, "_blank")}
                      data-testid={link.testId}
                    >
                      Visit
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center">
          <p className="text-sm text-muted-foreground font-body" data-testid="text-footer">
            © {new Date().getFullYear()} Portfolio. Built with dedication to learning and growth.
          </p>
        </footer>
      </div>
    </section>
  );
}
