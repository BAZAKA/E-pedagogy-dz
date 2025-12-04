import React, { useState } from 'react';
import { Bot, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold">Pédagogie numérique <span className="text-primary-500">DZ</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              La première plateforme algérienne dédiée à la formation des enseignants aux outils pédagogiques 4.0.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('HOME')} className="text-gray-400 hover:text-white text-sm">Accueil</button></li>
              <li><button onClick={() => onNavigate('COURSES')} className="text-gray-400 hover:text-white text-sm">Formations</button></li>
              <li><button onClick={() => onNavigate('ABOUT')} className="text-gray-400 hover:text-white text-sm">À propos</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Conditions d'utilisation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Contact</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Mail className="h-4 w-4 mr-2" />
              contact@pedagogie-numerique.dz
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pédagogie numérique DZ. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};