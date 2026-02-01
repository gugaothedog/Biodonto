import React from 'react';
import { ShieldCheck, Baby, Sparkles, Smile, Zap } from 'lucide-react';

const ToothIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={{ width: '32px', height: '32px' }}
  >
    <path d="M12 2C8.5 2 6 4.5 6 8c0 3 2 4.5 2 8 0 3 1.5 5 4 5s4-2 4-5c0-3.5 2-5 2-8 0-3.5-2.5-6-6-6z" />
    <path d="M9 13a3 3 0 0 0 6 0" />
  </svg>
);

const specialties = [
  {
    title: 'Implantes e prótese dentária',
    description: 'Recupere a funcionalidade e estética do seu sorriso com as melhores tecnologias em implantes e próteses.',
    icon: <ToothIcon />,
  },
  {
    title: 'Odontopediatria',
    description: 'Atendimento lúdico e cuidadoso focado na saúde bucal dos pequenos desde os primeiros dentes.',
    icon: <Baby size={32} />,
  },
  {
    title: 'Ortodontia',
    description: 'Aparelhos modernos e alinhadores transparentes para um sorriso perfeitamente alinhado.',
    icon: <Smile size={32} />,
  },
  {
    title: 'Limpeza e prevenção',
    description: 'Manutenção essencial para evitar problemas futuros e manter o hálito sempre fresco.',
    icon: <ShieldCheck size={32} />,
  },
  {
    title: 'Clareamento dental',
    description: 'Técnicas seguras e eficazes para deixar seus dentes brancos e brilhantes.',
    icon: <Zap size={32} />,
  },
  {
    title: 'Estética dental',
    description: 'Facetas e lentes de contato dental para transformar a harmonia do seu rosto.',
    icon: <Sparkles size={32} />,
  },
];

export const Specialties: React.FC = () => {
  return (
    <section id="especialidades" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-3xl md:text-5xl font-bold text-gray-900">
            Nossas <span className="text-primary">Especialidades</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="group bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:border-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="mb-6 p-4 bg-blue-50 inline-block rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary self-start">
                {React.cloneElement(item.icon as React.ReactElement<any>, {
                   className: 'transition-colors duration-300 group-hover:text-white'
                })}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};