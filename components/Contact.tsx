
import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Clock, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [procedure, setProcedure] = useState('');

  const address = "Estr. Turística do Jaraguá, 1055 - sala 9 - Vila Jaraguá, São Paulo - SP";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.576837775443!2d-46.73864452377286!3d-23.47573045851412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef96000000001%3A0x86915b3997672772!2sEstr.%20Tur%C3%ADstica%20do%20Jaragu%C3%A1%2C%201055%20-%20Vila%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005161-000!5e0!3m2!1spt-BR!2sbr!4v1709123456789!5m2!1spt-BR!2sbr`;

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !procedure) {
      alert('Por favor, preencha seu nome e o procedimento desejado.');
      return;
    }
    const message = encodeURIComponent(`Olá, meu nome é ${name} e gostaria de agendar uma consulta para o procedimento: ${procedure}.`);
    window.open(`https://api.whatsapp.com/send?phone=551139036333&text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border">
          <div className="grid lg:grid-cols-2">
            {/* Form and Contact Info */}
            <div className="p-8 md:p-12 space-y-12">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">Entre em contato</h2>
                  <p className="text-gray-600 text-lg text-center lg:text-left">Escolha como prefere falar conosco.</p>
                </div>

                {/* Quick Links - Layout Corrigido para ajuste perfeito */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="tel:1139036333"
                    className="flex items-center gap-4 p-5 rounded-[2rem] bg-gray-50 hover:bg-blue-50 transition-all border border-gray-100 shadow-sm hover:shadow-lg group"
                  >
                    <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                      <Phone size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest leading-none mb-1">Ligue agora</p>
                      <p className="text-base md:text-lg font-bold text-gray-900 whitespace-nowrap">(11) 3903-6333</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/oficialbiodonto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-[2rem] bg-gray-50 hover:bg-pink-50 transition-all border border-gray-100 shadow-sm hover:shadow-lg group"
                  >
                    <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                      <Instagram size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-pink-500 font-bold uppercase tracking-widest leading-none mb-1">Instagram</p>
                      <p className="text-base md:text-lg font-bold text-gray-900 whitespace-nowrap">@oficialbiodonto</p>
                    </div>
                  </a>
                </div>

                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Agende sua avaliação</h3>
                    <p className="text-gray-500">Inicie seu atendimento rapidamente via WhatsApp.</p>
                  </div>
                  
                  <form onSubmit={handleWhatsAppRedirect} className="bg-blue-50/50 p-6 md:p-8 rounded-[2rem] border border-blue-100 space-y-4 shadow-inner">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-[#0D47A1] ml-2">Seu Nome</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Ex: Maria Oliveira"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-xl border-2 border-white focus:border-[#64B5F6] outline-none transition-all shadow-sm bg-white text-gray-900"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="procedure" className="text-sm font-bold text-[#0D47A1] ml-2">Procedimento Desejado</label>
                      <select
                        id="procedure"
                        value={procedure}
                        onChange={(e) => setProcedure(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-xl border-2 border-white focus:border-[#64B5F6] outline-none transition-all shadow-sm bg-white text-gray-900"
                        required
                      >
                        <option value="" disabled>Selecione um procedimento</option>
                        <option value="Implante Dentário">Implante Dentário</option>
                        <option value="Odontopediatria">Odontopediatria</option>
                        <option value="Ortodontia">Ortodontia</option>
                        <option value="Limpeza e Prevenção">Limpeza e Prevenção</option>
                        <option value="Clareamento Dental">Clareamento Dental</option>
                        <option value="Estética Dental">Estética Dental</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-4 hover:bg-green-600 transition-all shadow-xl active:scale-95 text-lg"
                    >
                      <MessageCircle size={22} />
                      Enviar para WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Hours and Map */}
            <div id="localizacao" className="bg-gray-50 p-8 md:p-12 flex flex-col justify-between space-y-12 scroll-mt-24 border-l lg:border-l">
              <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                   <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                     <Clock size={24} />
                   </div>
                   Horário de Atendimento
                 </h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <span className="text-gray-600 font-semibold">Segunda a Sexta</span>
                      <span className="text-gray-900 font-bold">09h às 17h</span>
                   </div>
                   <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <span className="text-gray-600 font-semibold">Sábado</span>
                      <span className="text-gray-900 font-bold">09h às 13h</span>
                   </div>
                   <div className="flex justify-between items-center p-4 rounded-xl border border-dashed border-red-200">
                      <span className="text-red-400 font-semibold">Domingo</span>
                      <span className="text-red-400 font-bold uppercase text-xs tracking-widest">Fechado</span>
                   </div>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-[2rem] shadow-xl space-y-6 border border-blue-50">
                 <div className="space-y-2">
                   <h3 className="text-xl font-bold flex items-center gap-3 text-gray-900">
                     <div className="p-2 bg-blue-50 rounded-lg text-primary">
                       <MapPin size={20} />
                     </div>
                     Localização
                   </h3>
                   <p className="text-gray-600 text-base leading-relaxed font-medium">
                     {address}
                   </p>
                 </div>

                 <div className="h-56 md:h-64 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-inner relative">
                    <iframe
                      src={mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização Biodonto"
                    ></iframe>
                 </div>

                 <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Estrada+Turistica+do+Jaragua+1055+Vila+Jaragua+Sao+Paulo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#0D47A1] text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-xl group"
                 >
                   Ver rotas no Google Maps
                   <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
