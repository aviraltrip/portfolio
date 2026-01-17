import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    // Generate shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      createShootingStar();
    }, 3000);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(shootingStarInterval);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random();
      const starType = size > 0.7 ? 'large' : size > 0.4 ? 'medium' : 'small';
      
      newStars.push({
        id: i,
        size: starType === 'large' ? 3 : starType === 'medium' ? 2 : 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.6,
        animationDuration: Math.random() * 3 + 2,
        animationDelay: Math.random() * 2,
        type: starType,
        color: Math.random() > 0.9 ? 'blue' : Math.random() > 0.95 ? 'purple' : 'white',
      });
    }

    setStars(newStars);
  };

  const createShootingStar = () => {
    const id = Date.now();
    const newShootingStar = {
      id,
      x: Math.random() * 100,
      y: Math.random() * 30,
    };

    setShootingStars(prev => [...prev, newShootingStar]);

    // Remove shooting star after animation completes
    setTimeout(() => {
      setShootingStars(prev => prev.filter(star => star.id !== id));
    }, 2000);
  };

  const getStarColorClass = (color) => {
    switch(color) {
      case 'blue':
        return 'bg-blue-300';
      case 'purple':
        return 'bg-purple-300';
      default:
        return 'bg-white';
    }
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Regular stars with multiple layers */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${getStarColorClass(star.color)} ${
            star.type === 'large' 
              ? 'animate-pulse shadow-lg shadow-white/50' 
              : star.type === 'medium'
              ? 'animate-pulse'
              : ''
          }`}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            animationDelay: star.animationDelay + "s",
          }}
        >
          {/* Glow effect for larger stars */}
          {star.type === 'large' && (
            <div className="absolute inset-0 rounded-full bg-white/30 blur-sm scale-150" />
          )}
        </div>
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
          style={{
            left: star.x + "%",
            top: star.y + "%",
          }}
        >
          <div className="absolute inset-0 w-20 h-px bg-gradient-to-r from-white to-transparent blur-sm" />
        </div>
      ))}

      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px);
            opacity: 0;
          }
        }

        .animate-shooting-star {
          animation: shooting-star 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};