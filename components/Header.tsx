
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand with Tagline Below */}
        <div className="flex-1 lg:flex-none">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex flex-col group leading-none"
          >
            <span className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors ${scrolled ? 'text-[#0D47A1]' : 'text-white'}`}>
              Biodonto
            </span>
            <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-colors mt-0.5 ${scrolled ? 'text-gray-500' : 'text-blue-200'}`}>
              Odontologia Integrada
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-semibold transition-colors hover:text-[#64B5F6] ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=551139036333"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D47A1] text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-800 transition-all shadow-lg transform hover:scale-105 active:scale-95"
          >
            Agende sua consulta
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'bg-blue-50 text-[#0D47A1]' : 'bg-white/20 backdrop-blur-md text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-2xl border-t animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 font-bold text-lg hover:text-[#0D47A1] border-b border-gray-100 pb-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=551139036333"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0D47A1] text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
