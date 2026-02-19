import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <Shield className="w-6 h-6 text-brand-600" />
           <span className="font-display font-bold text-neutral-500 tracking-wider">
             ADS SECURITY &copy; 2026
           </span>
        </div>
        
        <div className="flex gap-8 text-sm text-neutral-500">
           <a href="#/blog" className="hover:text-brand-500 transition-colors">Blog</a>
           <a href="#" className="hover:text-brand-500 transition-colors">Privacidad</a>
           <a href="#" className="hover:text-brand-500 transition-colors">Términos</a>
           <a href="#" className="hover:text-brand-500 transition-colors">Sitemap</a>
        </div>
        
        <div className="text-xs text-neutral-600 font-mono">
            RUC: <span className="text-neutral-400">20477208348</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-neutral-800/50 text-center">
        <span className="text-[11px] text-neutral-700 font-mono tracking-wider">
          Desarrollado por <a href="#" className="text-neutral-500 hover:text-brand-500 transition-colors duration-300">GACZ Developer</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;