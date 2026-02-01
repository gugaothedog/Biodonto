
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                alt="Atendimento Biodonto"
                className="w-full h-auto"
              />
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-3xl -z-10 transform rotate-12"></div>
            
            <div className="absolute bottom-8 right-8 bg-primary text-white p-8 rounded-2xl shadow-2xl hidden sm:block">
               <p className="text-4xl font-bold">10+</p>
               <p className="text-sm opacity-80 uppercase tracking-widest">Anos de Experiência</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#64B5F6] font-bold tracking-widest uppercase text-sm">Sobre a Biodonto</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Um novo conceito em <span className="text-primary">Odontologia Humanizada</span>
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Na Biodonto, acreditamos que um tratamento odontológico vai muito além de procedimentos técnicos. Nossa missão é proporcionar uma experiência acolhedora, segura e transformadora.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Tecnologia de Última Geração',
                'Ambiente 100% Higienizado',
                'Atendimento Humanizado',
                'Foco em Pacientes Especiais',
                'Protocolos Rigorosos',
                'Profissionais em Constante Atualização'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#64B5F6] flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <div className="relative p-6 bg-blue-50 rounded-2xl border-l-8 border-[#0D47A1]">
                <p className="italic text-gray-800 text-lg font-medium leading-relaxed">
                  "Nosso compromisso é devolver não apenas o sorriso, mas a confiança e a qualidade de vida de nossos pacientes através da excelência clínica."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
