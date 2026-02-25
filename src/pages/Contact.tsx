import { useState, useEffect } from "react";
import { Mail, Phone, Send, MapPin, Clock, Terminal, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const TerminalLine = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={`font-mono text-sm transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
    { icon: Mail, label: "Email", value: "contact@redteam.com", href: "mailto:contact@redteam.com" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
  ];

  return (
    <section className="section-container">
      {/* Header */}
      <div className="text-center mb-16 opacity-0 animate-fade-in">
        <h1 className="section-title">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="section-subtitle mx-auto">
          Have a security concern or want to discuss a project? Let's connect.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left - Contact Info (hacker terminal style) */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {/* Terminal Window */}
          <div className="rounded-xl border border-border overflow-hidden bg-card shadow-[0_0_40px_hsl(var(--primary)/0.08)]">
            {/* Terminal Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/80 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-2">root@redteam:~/contact</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 space-y-3 min-h-[320px]">
              <TerminalLine delay={200}>
                <span className="text-primary">$</span> <span className="text-muted-foreground">cat contact_info.txt</span>
              </TerminalLine>

              {contactInfo.map((item, i) => (
                <TerminalLine key={item.label} delay={500 + i * 300}>
                  <div className="flex items-center gap-3 pl-4 py-2">
                    <item.icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item.label}:</span>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground">{item.value}</span>
                    )}
                  </div>
                </TerminalLine>
              ))}

              <TerminalLine delay={1800}>
                <span className="text-primary">$</span> <span className="text-muted-foreground">cat status.log</span>
              </TerminalLine>

              <TerminalLine delay={2100}>
                <div className="flex items-center gap-2 pl-4 py-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-500">ONLINE</span>
                  <span className="text-muted-foreground">— Available for projects</span>
                </div>
              </TerminalLine>

              <TerminalLine delay={2400}>
                <div className="flex items-center gap-0">
                  <span className="text-primary">$</span>
                  <span className="terminal-cursor" />
                </div>
              </TerminalLine>
            </div>
          </div>

          {/* Why Work With Me */}
          <div className="mt-6 cyber-card p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              Why Work With Me?
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Proven track record with Fortune 500 companies",
                "Confidential and professional engagement",
                "Comprehensive reports with actionable recommendations",
                "Ongoing support and remediation guidance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="cyber-card p-6 md:p-8 relative">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-xl" />

            <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
            <p className="text-sm text-muted-foreground mb-6 font-mono">// establish_connection()</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-primary mb-2">
                  &gt; name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cyber-input"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-primary mb-2">
                  &gt; email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cyber-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-primary mb-2">
                  &gt; message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="cyber-input resize-none"
                  placeholder="Tell me about your security needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-cyber w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-mono"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    ./send_message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
