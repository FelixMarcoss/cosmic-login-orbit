
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
    // Aqui você pode adicionar a lógica de autenticação
  };

  return (
    <div className="w-full max-w-md space-y-6 p-8 rounded-xl bg-black/30 backdrop-blur-sm border border-blue-500/30 text-white shadow-xl relative overflow-hidden">
      {/* Efeito de brilho superior */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl"></div>
      
      <div className="relative text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Login</h2>
        <p className="text-blue-300 mt-2">Acesse sua conta espacial</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="seu@email.com"
            className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Senha
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="********"
            className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
              Lembrar-me
            </label>
          </div>
          <a href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300">
            Esqueceu a senha?
          </a>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20"
        >
          Entrar no Sistema
        </Button>
      </form>
      
      <div className="text-center text-sm">
        <span className="text-gray-400">Não tem uma conta? </span>
        <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
          Registre-se
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
