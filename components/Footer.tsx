import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Footer Branding with Tagline Below */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start leading-none mb-4">
              <h4 className="text-2xl font-bold text-white tracking-tight">Biodonto</h4>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mt-1">Odontologia Integrada</span>
            </div>
            <p className="text-sm max-w-xs text-center md:text-left leading-relaxed">
              Estr. Turística do Jaraguá, 1055 - sala 9 <br />
              Vila Jaraguá, São Paulo - SP
            </p>
          </div>

          <div className="text-sm text-center md:text-right">
            <p className="font-bold text-white mb-1">Biodonto</p>
            <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs opacity-40">
          Cuidando do sorriso de adultos e crianças com tecnologia e humanização. <br />
          Atendimento humanizado e protocolos rigorosos.
        </div>
      </div>
    </footer>
  );
};