import { Link } from "react-router-dom";
import { ArrowRight, Shield, Terminal } from "lucide-react";
import heroImage from "@/assets/hero-hacker.jpg";
import profilePhoto from "@/assets/profile-photo3.jpg";


const Home = () => {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cyber security background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20" 
        style={{ background: "radial-gradient(circle, hsl(0 72% 51% / 0.3) 0%, transparent 70%)" }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 opacity-0 animate-fade-in">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Red Team Specialist</span>
            </div>

        {/* Name */}
<div className="space-y-4">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
    <span className="text-foreground">Hi, I'm </span>

    <span className="block gradient-text glow-text tracking-tight">
      Masresha Habtamu
    </span>

    <span className="block mt-2 font-mono text-lg md:text-xl text-red-400 tracking-widest neon-red">
      (rexwho)_
    </span>
  </h1>
  </div>
{/* why you see my source code??  */}

            {/* Title with Terminal Effect */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 opacity-0 animate-fade-in stagger-2">
              <Terminal className="w-5 h-5 text-primary" />
              <p className="font-mono text-lg sm:text-xl text-muted-foreground">
                Ethical Hacker & CTF player 
                <span className="terminal-cursor" />
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in stagger-3">
              Cybersecurity enthusiast focused on ethical hacking, penetration testing, and vulnerability research — learning by building and breaking responsibly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in stagger-4">
              <Link to="/skills" className="btn-cyber inline-flex items-center justify-center gap-2">
                View Skills
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-cyber-outline inline-flex items-center justify-center gap-2">
                Contact Me
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 opacity-0 animate-fade-in stagger-5">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "50+", label: "CTFs Completed" },
                { value: "5+", label: "Certifications" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in-right stagger-2">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full animate-glow" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 float-animation">
                <img
                  src={profilePhoto}
                  alt="rexwho - Ethical Hacker"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-6">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Home;
