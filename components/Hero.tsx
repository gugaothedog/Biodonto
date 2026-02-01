import React from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
          alt="Clínica Biodonto"
          className="w-full h-full object-cover"
        />
        {/* Modern multi-layer overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1] via-[#0D47A1]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1] via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white space-y-8 animate-fade-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-blue-100 text-sm font-bold uppercase tracking-widest">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Tecnologia e Cuidado Humanizado
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            BIODONTO <br />
            <span className="text-[#64B5F6]">Cuidando do sorriso</span> <br />
            de toda a família
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-xl leading-relaxed font-light">
            Implantes, ortodontia, odontopediatria e estética dental com o carinho e a excelência que você merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a
              href="https://api.whatsapp.com/send?phone=551139036333"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#64B5F6] text-[#0D47A1] font-bold px-10 py-5 rounded-2xl shadow-2xl hover:bg-white hover:text-[#0D47A1] transition-all transform hover:-translate-y-1 text-lg group"
            >
              <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />
              Agendar via WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-400/20 rounded-lg text-[#64B5F6]">
                <CheckCircle size={20} />
              </div>
              <span className="text-sm font-medium text-blue-100">Equipamentos de ponta</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-400/20 rounded-lg text-[#64B5F6]">
                <CheckCircle size={20} />
              </div>
              <span className="text-sm font-medium text-blue-100">Protocolos rigorosos</span>
            </div>
            <div className="flex items-center gap-3 col-span-2 md:col-span-1">
              <div className="p-2 bg-blue-400/20 rounded-lg text-[#64B5F6]">
                <CheckCircle size={20} />
              </div>
              <span className="text-sm font-medium text-blue-100">Atendimento Kids</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};