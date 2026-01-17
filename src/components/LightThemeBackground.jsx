import { useEffect, useState } from "react";

export const LightThemeBackground = () => {
  const [particles, setParticles] = useState([]);
  const [floatingShapes, setFloatingShapes] = useState([]);

  useEffect(() => {
    generateParticles();
    generateFloatingShapes();

    const handleResize = () => {
      generateParticles();
      generateFloatingShapes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateParticles = () => {
    const numberOfParticles = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000
    );

    const newParticles = [];

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random();
      const particleType = size > 0.7 ? 'large' : size > 0.4 ? 'medium' : 'small';
      
      newParticles.push({
        id: i,
        size: particleType === 'large' ? 5 : particleType === 'medium' ? 3.5 : 2.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.35 + 0.35,
        animationDuration: Math.random() * 4 + 3,
        animationDelay: Math.random() * 3,
        type: particleType,
        color: Math.random() > 0.5 ? 'blue' : Math.random() > 0.5 ? 'purple' : 'indigo',
      });
    }

    setParticles(newParticles);
  };

  const generateFloatingShapes = () => {
    const shapes = [];
    const numberOfShapes = 6;

    for (let i = 0; i < numberOfShapes; i++) {
      shapes.push({
        id: i,
        x: Math.random() * 90,
        y: Math.random() * 90,
        size: Math.random() * 150 + 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        shape: Math.random() > 0.5 ? 'circle' : 'blob',
        color: i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'purple' : 'pink',
      });
    }

    setFloatingShapes(shapes);
  };

  const getParticleColorClass = (color) => {
    switch(color) {
      case 'blue':
        return 'bg-blue-400';
      case 'purple':
        return 'bg-purple-400';
      case 'indigo':
        return 'bg-indigo-400';
      default:
        return 'bg-blue-300';
    }
  };

  const getShapeColorClass = (color) => {
    switch(color) {
      case 'blue':
        return 'bg-blue-200/20';
      case 'purple':
        return 'bg-purple-200/20';
      case 'pink':
        return 'bg-pink-200/20';
      default:
        return 'bg-blue-200/20';
    }
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {floatingShapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${getShapeColorClass(shape.color)} ${
            shape.shape === 'circle' ? 'rounded-full' : 'rounded-3xl'
          } blur-3xl animate-float-slow`}
          style={{
            width: shape.size + "px",
            height: shape.size + "px",
            left: shape.x + "%",
            top: shape.y + "%",
            animationDuration: shape.duration + "s",
            animationDelay: shape.delay + "s",
          }}
        />
      ))}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${getParticleColorClass(particle.color)} ${
            particle.type === 'large' 
              ? 'animate-pulse shadow-md shadow-blue-300/50' 
              : particle.type === 'medium'
              ? 'animate-pulse'
              : 'animate-twinkle'
          }`}
          style={{
            width: particle.size + "px",
            height: particle.size + "px",
            left: particle.x + "%",
            top: particle.y + "%",
            opacity: particle.opacity,
            animationDuration: particle.animationDuration + "s",
            animationDelay: particle.animationDelay + "s",
          }}
        >
          {particle.type === 'large' && (
            <div className="absolute inset-0 rounded-full bg-blue-200/40 blur-sm scale-150" />
          )}
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-50/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-50/30 to-transparent" />

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};