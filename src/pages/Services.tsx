import { ExternalLink, Youtube, Globe } from "lucide-react";
import servicePentest from "@/assets/service-pentest.jpg";
import serviceAudit from "@/assets/service-audit.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import serviceRedteam from "@/assets/service-redteam.jpg";

const services = [
  {
    title: "Penetration Testing",
    description:
      "We safely test your systems to find weak spots before the bad guys do, keeping your web apps, networks, and infrastructure secure.",
    image: servicePentest,
    
  },
  {
    title: "Security Audits",
    description:
      "We check how secure your company really is, review your rules and policies, and help you close any gaps in your defenses.",
    image: serviceAudit,
   
  },
  {
    title: "Security Training",
    description:
      "Learn how to stay safe online! Our training helps your team spot risks, avoid attacks, and practice real-world security skills.",
    image: serviceTraining,
   
  },
  {
    title: "Red Team Operations",
    description:
      "We simulate real attacks in a safe way so your team can see what would happen and get better at stopping real hackers.",
    image: serviceRedteam,
   
  },
];

const Services = () => {
  return (
    <section className="section-container">
      {/* Header */}
      <div className="text-center mb-16 opacity-0 animate-fade-in">
        <h1 className="section-title">
          My <span className="gradient-text">Services</span>
        </h1>
        <p className="section-subtitle mx-auto">
          Professional security services to protect your organization from cyber threats
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`service-card group opacity-0 animate-fade-in`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="service-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
            
               
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <a
                
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 cyber-card p-8 md:p-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Need a Custom Security Solution?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Every organization has unique security challenges. Let's discuss how I can help 
          protect your specific environment with tailored security services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.youtube.com/@AbugidaTechTube"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber inline-flex items-center justify-center gap-2"
          >
            <Youtube className="w-5 h-5" />
            YouTube Channel
          </a>
          <a
            href="https://abugidasecurity.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-outline inline-flex items-center justify-center gap-2"
          >
            <Globe className="w-5 h-5" />
            Business Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
