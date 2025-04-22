
const Earth = () => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Brilho do planeta */}
      <div className="absolute w-44 h-44 rounded-full bg-blue-500/20 blur-xl"></div>
      
      {/* Planeta Terra girando */}
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 via-blue-800 to-blue-900 flex items-center justify-center animate-spin relative overflow-hidden shadow-lg shadow-blue-500/30" style={{ animationDuration: '20s' }}>
        {/* Continentes */}
        <div className="absolute w-12 h-8 bg-green-700 rounded-full left-5 top-8 opacity-80"></div>
        <div className="absolute w-14 h-10 bg-green-700 rounded-full right-5 top-14 opacity-80"></div>
        <div className="absolute w-8 h-6 bg-green-700 rounded-full left-14 bottom-10 opacity-80"></div>
        <div className="absolute w-10 h-7 bg-green-700 rounded-full right-12 bottom-6 opacity-80"></div>
        
        {/* Nuvens */}
        <div className="absolute w-16 h-4 bg-white rounded-full left-3 top-5 opacity-40"></div>
        <div className="absolute w-12 h-3 bg-white rounded-full right-8 top-12 opacity-40"></div>
        <div className="absolute w-14 h-3 bg-white rounded-full left-10 bottom-8 opacity-40"></div>
      </div>
      
      {/* Órbita 1 */}
      <div className="absolute w-[160px] h-[160px] rounded-full border border-white/10 animate-spin" style={{ animationDuration: '100s' }}></div>
      
      {/* Órbita 2 */}
      <div className="absolute w-[200px] h-[200px] rounded-full border border-white/5 animate-spin" style={{ animationDuration: '150s' }}></div>
      
      {/* Satélites orbitando */}
      <div className="absolute w-5 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-sm animate-orbit shadow-sm shadow-blue-500/50" style={{ animationDelay: '0s' }}>
        <div className="w-1 h-1 bg-red-500 absolute right-0 top-0 rounded-full"></div>
      </div>
      
      <div className="absolute w-4 h-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm animate-orbit shadow-sm shadow-yellow-500/50" style={{ animationDelay: '-5s', animationDuration: '12s' }}>
        <div className="w-6 h-1 bg-gray-300 absolute -right-5 top-1.5 rounded-full"></div>
      </div>
      
      <div className="absolute w-6 h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-sm animate-orbit shadow-sm shadow-blue-500/50" style={{ animationDelay: '-8s', animationDuration: '18s' }}>
        <div className="w-1 h-1 bg-blue-500 absolute right-1 top-0 rounded-full"></div>
      </div>
    </div>
  );
};

export default Earth;
