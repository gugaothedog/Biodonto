import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Marcos Ferreira',
    text: 'Foi muito bom ser atendido na Biodonto. Fiz meu tratamento completo e fiquei muito satisfeito. Sempre indico para outras pessoas. Meus filhos também já foram atendidos — da criança ao adulto, em nada deixam a desejar. Parabéns!',
    rating: 5,
    tag: 'Tratamento Completo'
  },
  {
    name: 'Crystal Xavier',
    text: 'Excelência no atendimento, profissionais bem qualificados e ambiente limpo e agradável. Nota 10! Recomendo a todos.',
    rating: 5,
    tag: 'Excelente'
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-blue-50 relative overflow-hidden scroll-mt-24">
      {/* Decorative quotes */}
      <Quote className="absolute top-20 left-20 text-blue-200/40 w-40 h-40 -rotate-12" />
      <Quote className="absolute bottom-20 right-20 text-blue-200/40 w-40 h-40 rotate-180 rotate-12" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#64B5F6] font-bold tracking-widest uppercase text-sm mb-4">Depoimentos</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            O que nossos <span className="text-primary">pacientes</span> dizem
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((rev) => (
            <div key={rev.name} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-b-4 border-secondary">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic leading-relaxed mb-8">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{rev.name}</h4>
                  <span className="text-xs bg-blue-50 text-blue-500 px-2 py-1 rounded-full font-bold uppercase">{rev.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};