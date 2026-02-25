import { 
  Shield, 
  Globe, 
  Network, 
  Terminal, 
  Code, 
  Lock,
  Search,
  Server,
  Database,
  Bug,
  Wifi,
  Key
} from "lucide-react";

const skillCategories = [
  {
    title: "Red Teaming",
    icon: Shield,
    skills: ['Social Engineering Awareness',
    'Red Team Methodologies',
    'Threat Analysis',
    'Vulnerability Assessment'],
  },
  {
    title: "Web Security",
    icon: Globe,
    skills: ['SQL Injection', 'XSS',   'Authentication Bypass', 'Web Application Recon'],
  },
  {
    title: "Network Security",
    icon: Network,
    skills: ["Network Penetration", "Wireless Attacks", "Traffic Analysis", 'Lateral Movement'],
  },
  {
    title: "Linux & Security Tools",
    icon: Terminal,
    skills: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap & Recon"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Bash Scripting", "C++" , "JavaScript"],
  },
  {
    title: "Cryptography",
    icon: Lock,
    skills: ["Encryption Analysis", "Hash Cracking", "SSL/TLS", "PKI"],
  },
];

const additionalSkills = [
  { icon: Search, name: "OSINT" },
  { icon: Server, name: "Cloud Security" },
  { icon: Database, name: "Database Attacks" },
  { icon: Bug, name: "Exploit Development" },
  { icon: Wifi, name: "Wireless Security" },
  { icon: Key, name: "Password Cracking" },
];

const Skills = () => {
  return (
    <section className="section-container">
      {/* Header */}
      <div className="text-center mb-16 opacity-0 animate-fade-in">
        <h1 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h1>
        <p className="section-subtitle mx-auto">
          Intermediate ethical hacking skills honed through hands-on experience, CTFs, and continuous learning — focused on offensive security, penetration testing, and vulnerability research.
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="skill-card opacity-0 animate-fade-in group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            {/* Skills as tags */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-mono rounded-lg bg-secondary border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <h2 className="text-2xl font-bold text-center mb-8">Additional Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {additionalSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
            >
              <skill.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-16 cyber-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <h2 className="text-2xl font-bold text-center mb-6">Favorite Tools</h2>
        <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
          {[
            "Metasploit",
            "Burp Suite",
            "Nmap",
            "Wireshark",
           "Nikto",
           "Bettercap",    
           "tcpdump",      
           "Wireshark",
            "Hashcat",
            "Gobuster",
            "SQLMap",
            "Hydra",
            "John the Ripper",
            "Aircrack-ng",
          ].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
