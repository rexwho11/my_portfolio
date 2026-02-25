import { Trophy, Award, ExternalLink, Shield, Star, Target } from "lucide-react";

const achievements = [

  {
    icon: Award,
    title: "Cybersecurity Excellence Award",
    description: "Recognized for outstanding contributions to the cybersecurity community and ethical hacking practices.",
    year: "2024",
  },

  {
    icon: Target,
    title: "CTF Competition Winner",
    description: "First place in international Capture The Flag competitions, demonstrating advanced exploitation skills.",
    year: "2024",
  },
];

const certifications = [
  {
    name: "GTST",
    fullName: "Geez Tech Security Tester",
    issuer: "Ethical Hacking Institute",
    link: "https://www.offensive-security.com/pwk-oscp/",
  },
  {
    name: "OSCE3",
    fullName: "Offensive Security Certified Expert",
    issuer: "Offensive Security",
    link: "https://www.offensive-security.com/",
  },
  {
    name: "CRTO",
    fullName: "Certified Red Team Operator",
    issuer: "Zero-Point Security",
    link: "https://training.zeropointsecurity.co.uk/",
  },
  {
    name: "GPEN",
    fullName: "GIAC Penetration Tester",
    issuer: "SANS Institute",
    link: "https://www.giac.org/certifications/penetration-tester-gpen/",
  },
  {
    name: "CEH",
    fullName: "Certified Ethical Hacker",
    issuer: "EC-Council",
    link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
  },
  {
    name: "CISSP",
    fullName: "Certified Information Systems Security Professional",
    issuer: "(ISC)²",
    link: "https://www.isc2.org/Certifications/CISSP",
  },
];

const Achievements = () => {
  return (
    <section className="section-container">
      {/* Header */}
      <div className="text-center mb-16 opacity-0 animate-fade-in">
        <h1 className="section-title">
          My <span className="gradient-text">Achievements</span>
        </h1>
        <p className="section-subtitle mx-auto">
          Recognition and milestones in my cybersecurity journey
        </p>
      </div>

      {/* Achievements */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center opacity-0 animate-fade-in stagger-1">
          Notable Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`achievement-card opacity-0 animate-fade-in`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">{achievement.title}</h3>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          Professional Certifications
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`certificate-card p-6 block opacity-0 animate-fade-in`}
              style={{ animationDelay: `${(index + 6) * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-primary font-mono">{cert.name}</span>
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-1">{cert.fullName}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Stats Banner */}
      <div className="mt-16 cyber-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "200+", label: "Bugs Reported" },
            { value: "50+", label: "Certifications" },
            { value: "100+", label: "Systems Tested" },
            { value: "15+", label: "CVEs Published" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
