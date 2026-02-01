
import React from 'react';
import { Heart, Cpu, GraduationCap, Coffee } from 'lucide-react';

const features = [
  {
    title: 'Atendimento Humanizado',
    desc: 'Ouvimos cada paciente para entender suas necessidades e medos individuais.',
    icon: <Heart size={32} />
  },
  {
    title: 'Tecnologia Moderna',
    desc: 'Equipamentos digitais para diagnósticos precisos e tratamentos rápidos.',
    icon: <Cpu size={32} />
  },
  {
    title: 'Profissionais Qualificados',
    desc: 'Corpo clínico especialista em diversas áreas da saúde bucal.',
    icon: <GraduationCap size={32} />
  },
  {
    title: 'Ambiente Confortável',
    desc: 'Espaço pensado para o relaxamento de adultos e a diversão das crianças.',
    icon: <Coffee size={32} />
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, idx) => (
            <div key={idx} className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold">{f.title}</h4>
              <p className="text-blue-100/80 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
