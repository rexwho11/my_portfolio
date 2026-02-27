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
    description: "First place in national Capture The Flag competitions(THM), demonstrating advanced exploitation skills.",
    year: "2024",
  },
    {
    icon: Award,
    title: "🎓 Academic Achievement",
    description: "My academic journey from Kindergarten to University, driven by curiosity, discipline, and a constant pursuit of improvementMy academic journey from Kindergarten to University, driven by curiosity, discipline, and a strong passion for ICT, Mathematics, and Physics — the subjects I enjoy most while learning and exploring.",
    year: "2010-2026",
  },
];

const certifications = [
  {
    name: "GTST",
    fullName: "Geez Tech Security Tester",
    issuer: "Ethical Hacking Institute",
    link: "https://drive.google.com/file/d/1VaFYKURb7i1PlmvGWbFOs5f95VA41BVd/view?usp=drive_link",
  },
  {
    name: "Android  Dev",
    fullName: "Android Developer Fundamentals",
    issuer: "Udacity",
    link: "https://www.udacity.com/certificate/e/bb8eec16-a32c-11f0-92b6-233a06416ee7",
  },
  {
    name: "programming",
    fullName: "programming fundamentals",
    issuer: "Udacity",
    link: "https://www.udacity.com/certificate/e/97a59e40-a330-11f0-8d7b-8f5c15400b15",
  },
  {
    name: "AI",
    fullName: "Artificial Intelligence Fundamentals",
    issuer: "Udacity",
    link: "https://www.udacity.com/certificate/e/ce6c5104-5ef6-11f0-a4a2-47d0a778bf1c",
  },
  {
    name: "Data Analysis",
    fullName: "Data Analysis Fundamentals",
    issuer: "Udacity",
    link: "https://www.udacity.com/certificate/e/8189caf0-ab19-11f0-b8e2-83b9e9be4d7b",
  },
  {
    name: "AOC 2025",
    fullName: "Advent of Cyber 2025",
    issuer: "Try Hack Me",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OFOOZUZBHX.pdf",
  },
    {
    name: "Python",
    fullName: "introduction to python",
    issuer: "sololearn",
    link: "https://www.sololearn.com/en/certificates/CC-QHVGSNOG",
  },
   {
    name: "Safe Online",
    fullName: "Keeping Yourself Safe Online",
    issuer: "Ministry of Education",
    link: "https://drive.google.com/file/d/1ViF3SbR22wycvtOHpuZFtsgQ2Ejn3owm/view?usp=drive_link",
  },
   {
    name: "Staying Safe",
    fullName: "Staying Safe with Two-Factor Authentication",
    issuer: "Ministry of Education",
    link: "https://drive.google.com/file/d/1Mto4I9MdlWSgHWudssc1O-YwX300RZsA/view?usp=drive_link",
  },
   {
    name: "Academic",
    fullName: "Academic Integrity",
    issuer: "Ministry of Education",
    link: "https://drive.google.com/file/d/11YwiN-gY-Wi62fK20I3-7L_r874BTcAD/view?usp=drive_link",
  },
  {
    name: "AI Essentials",
    fullName: "Artificial Intelligence Essentials",
    issuer: "Ministry of Education",
    link: "https://drive.google.com/file/d/1d9COEsny-zO75RLYIXEfcxNrX9CUejMZ/view?usp=drive_link",
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
            { value: "1200+", label: "Tech community " },
            { value: "10+", label: "Certifications" },
            { value: "50+", label: "completed CTFs" },
            { value: "200+", label: "YOUTUBE subscriber" },
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
