
const Comet = () => {
  const randomTop = Math.random() * 60 + 10; // Posição vertical aleatória entre 10% e 70%
  const randomDuration = Math.random() * 2 + 6; // Duração entre 6 e 8 segundos
  const randomSize = Math.random() * 15 + 20; // Tamanho entre 20 e 35px
  
  return (
    <div 
      className="absolute left-0 bg-gradient-to-r from-blue-400 via-indigo-300 to-transparent rounded-full animate-comet shadow-lg shadow-blue-500/50" 
      style={{ 
        top: `${randomTop}%`, 
        width: `${randomSize}px`, 
        height: `${randomSize / 10}px`,
        animationDuration: `${randomDuration}s`
      }}
    >
      {/* Cabeça do cometa */}
      <div className="absolute right-0 top-1/2 w-2 h-2 bg-white rounded-full -translate-y-1/2 shadow-xl shadow-blue-500"></div>
      
      {/* Cauda do cometa */}
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-l from-transparent via-blue-400/30 to-blue-500/70 blur-sm rounded-full"></div>
      
      {/* Brilho */}
      <div className="w-24 h-12 -top-5 -left-6 absolute bg-blue-400 rounded-full blur-2xl opacity-20"></div>
    </div>
  );
};

export default Comet;
