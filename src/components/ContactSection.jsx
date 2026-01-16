//trying new config for emailjs
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Code2,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      console.error("EmailJS configuration missing. Please check your environment variables.");
      console.error("Missing variables:", {
        SERVICE_ID: !SERVICE_ID,
        TEMPLATE_ID: !TEMPLATE_ID,
        USER_ID: !USER_ID
      });
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured. Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log("Email send error:", error.text);
          toast({
            title: "Error sending message",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              ⠀Contact Information
            </h3>

  
          <div className="flex flex-col items-center space-y-2 ml-4">
          <div className="p-3 rounded-full bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <a
            href="mailto:aviraltripathi25@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
    >
      aviraltripathi25@gmail.com
      </a>
      </div>
      </div>
      <div className="flex flex-col items-center space-y-2 ml-4">   {/* ⬅️ added ml-4 */}
        <div className="p-3 rounded-full bg-primary/10">
        <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium">Location</h4>
          <span className="text-muted-foreground">
            Greater Noida, Uttar Pradesh, India
            </span>
            </div>
            </div>
            
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                ⠀<a href="https://www.linkedin.com/in/aviral-tripathi-836763204/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://x.com/AviralTrip2503" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://github.com/aviraltrip" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://leetcode.com/u/aviraltrip/" target="_blank" rel="noopener noreferrer">
                  <Code2 className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://codeforces.com/profile/aviraltrip" target="_blank" rel="noopener noreferrer">
                  <Zap className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a <span className="text-primary">Message</span></h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hey, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};