
import { useEffect, useState } from "react";
import Comet from "./Comet";

const SpaceBackground = () => {
  const [comets, setComets] = useState<number[]>([]);

  useEffect(() => {
    // Adiciona cometas periodicamente
    const addComet = () => {
      setComets(prev => [...prev, Date.now()]);
      
      // Limpa cometas antigos para não sobrecarregar o DOM
      if (comets.length > 5) {
        setComets(prev => prev.slice(-5));
      }
    };

    // Adiciona o primeiro cometa
    addComet();

    // Configura um intervalo para adicionar novos cometas
    const interval = setInterval(() => {
      addComet();
    }, 8000 + Math.random() * 5000); // Intervalo entre 8-13 segundos

    return () => clearInterval(interval);
  }, [comets.length]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-black to-blue-950">
        {/* Nebulosas distantes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </div>
      
      {/* Estrelas pequenas */}
      {Array.from({ length: 100 }).map((_, i) => (
        <div 
          key={`small-${i}`}
          className="absolute rounded-full bg-white"
          style={{ 
            width: `${Math.random() * 2 + 1}px`, 
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite alternate`
          }}
        />
      ))}
      
      {/* Estrelas médias */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div 
          key={`medium-${i}`}
          className="absolute rounded-full bg-white"
          style={{ 
            width: `${Math.random() * 3 + 2}px`, 
            height: `${Math.random() * 3 + 2}px`,
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            boxShadow: `0 0 ${Math.random() * 4 + 2}px rgba(255, 255, 255, 0.7)`,
            animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite alternate`
          }}
        />
      ))}
      
      {/* Cometas */}
      {comets.map(id => (
        <Comet key={id} />
      ))}
    </div>
  );
};

// Export já definido no final do arquivo

export default SpaceBackground;
