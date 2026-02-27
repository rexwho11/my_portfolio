import { Shield, Target, Cpu, Award, Lock, AlertTriangle } from "lucide-react";
import profilePhoto from "@/assets/prrofile-photo4.jpg";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Ethical Mindset",
      description: "Think before exploit. Hack with responsibility.",
    },
    {
      icon: Target,
      title: "Offensive Focus",
      description: "Attack like an adversary. Defend like a guardian.",
    },
    {
      icon: Cpu,
      title: "Technical Depth",
      description: "Deep understanding of systems,Code, networks, — mastered through practice and CTFs.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Proof through certifications, CTFs, and real-world labs.",
    },
  ];

  return (
    <section className="section-container">
      {/* Header */}
      <div className="text-center mb-16 opacity-0 animate-fade-in">
        <h1 className="section-title">
          About <span className="gradient-text">Me</span>
        </h1>
        <p className="section-subtitle mx-auto">
         Ethical hacker | Cybersecurity student | CTF Player_
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative opacity-0 animate-fade-in-left stagger-1">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 cyber-card rounded-2xl overflow-hidden">
              <img
                src={profilePhoto}
                alt="About me"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-full h-full border border-primary/10 rounded-2xl -z-20" />
          </div>
        </div>

        {/* Content Section */}
          <div className="space-y-8">
            {/* Who I Am */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Who I Am</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
               My name is Masresha(rexwho) Habtamu 
               I’m a passionate cybersecurity student and offensive security enthusiast with a strong 
               interest in ethical hacking, penetration testing, and vulnerability research. My journey 
               began with curiosity about how systems work — and how they fail under attack. Today, 
               I focus on simulating real-world threats to identify weaknesses and strengthen digital defenses.
              </p>
            </div>

             {/* My Passion */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">My Passion</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
               Cybersecurity is more than a field of study for me — it’s a constant learning journey. 
               I enjoy thinking like an attacker, analyzing complex systems, and uncovering hidden vulnerabilities.
                Through hands-on labs, CTF competitions, security research, and tool development, 
                I continuously push myself to improve my technical skills and problem-solving ability.
              </p>
            </div>
            


            {/* Ethical Hacking Mindset */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Ethical Hacking Mindset</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
            I strongly believe in ethical, responsible security research. 
            Every system I test and every vulnerability I study is done with the goal of making 
            technology safer and more resilient. My approach combines technical curiosity, discipline, 
            and ethical responsibility — ensuring that my work always protects rather than harms.
              </p>
            </div>



            {/* Disclaimer */}
            <div className="bg-secondary/50 border border-border rounded-lg p-6 glow-border">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Legal & Ethical Disclaimer</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All security activities I perform are conducted legally and with proper 
                    authorization. I only test systems I own or have explicit written permission 
                    to assess. My work adheres to industry standards and ethical guidelines, 
                    ensuring responsible disclosure of any vulnerabilities discovered.
                  </p>
                </div>
                </div>
            </div>



          {/* Quote */}
          <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8 italic text-lg">
            "I hack to understand. I secure to protect. I learn to grow. In the world of cybersecurity, curiosity is my compass and ethics is my guide."
          </blockquote>
        </div>
      </div>
      




      

      {/* Highlights */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className={`skill-card text-center opacity-0 animate-fade-in stagger-${index + 2}`}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    

    
  );
};

export default About;
