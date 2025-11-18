import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Aviral
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create modern web applications.
            Specializing in front-end development, I build interfaces that are reliable and user-friendly.
          </p>
          
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer hover:text-primary transition-colors duration-300 group"
      >
        <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors duration-300"> 
          Scroll 
        </span>
        <ArrowDown className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
      </a>
    </section>
  );
};