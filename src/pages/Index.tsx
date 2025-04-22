
import Earth from "@/components/Earth";
import LoginForm from "@/components/LoginForm";
import SpaceBackground from "@/components/SpaceBackground";

const Index = () => {
  return (
    <>
      {/* Fundo espacial com gradiente e cometas */}
      <SpaceBackground />
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-8">
          {/* Planeta Terra à esquerda */}
          <div className="flex-shrink-0 order-2 md:order-1">
            <Earth />
          </div>
          
          {/* Formulário de login à direita */}
          <div className="order-1 md:order-2">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
