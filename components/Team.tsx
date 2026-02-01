
import React from 'react';
import { ShieldCheck, User } from 'lucide-react';

const team = [
  { name: 'Dra. Mily', role: 'Biomedicina & Estética' },
  { name: 'Dr. Anderson', role: 'Implantodontista' },
  { name: 'Dr. Ramon', role: 'Implantodontista' },
  { name: 'Dra. Tatiane', role: 'Clínica Geral' },
  { name: 'Dra. Isabela', role: 'Ortodontia' },
  { name: 'Dayana', role: 'Assistente Odontológica' },
  { name: 'Luiz Gustavo', role: 'TI' },
];

export const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-[#64B5F6] font-bold tracking-widest uppercase text-xs mb-4">Corpo Clínico e Administrativo</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Nossa <span className="text-primary">Equipe</span>
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Profissionais qualificados prontos para oferecer o melhor atendimento para você e sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="group p-8 rounded-3xl bg-white border border-gray-100 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 text-center"
            >
              <div className="relative mb-6 mx-auto w-20 h-20">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <User size={32} />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1.5 rounded-lg shadow-lg border-2 border-white">
                  <ShieldCheck size={14} />
                </div>
              </div>
              
              <h4 className="font-montserrat text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h4>
              
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest group-hover:text-secondary transition-colors">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-100/30 rounded-[2.5rem] border border-blue-100 inline-block">
          <p className="text-primary font-bold">
            Agende uma avaliação com um de nossos especialistas hoje mesmo.
          </p>
        </div>
      </div>
    </section>
  );
};
