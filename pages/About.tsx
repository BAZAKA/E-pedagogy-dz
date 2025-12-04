import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">À propos du projet</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Une initiative pour moderniser l'éducation en Algérie par la technologie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
              alt="Team working" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Pédagogie numérique DZ est née d'un constat simple : le monde change, et l'école doit évoluer avec lui. 
              L'émergence de l'intelligence artificielle, de la réalité augmentée et des nouveaux modes d'apprentissage 
              offre des opportunités incroyables pour rendre l'enseignement plus inclusif, plus engageant et plus efficace.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre plateforme a pour vocation d'accompagner chaque enseignant algérien, quel que soit son niveau technique, 
              dans l'adoption de ces outils 4.0. Nous croyons en une technologie qui sert la pédagogie, et non l'inverse.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-10 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Les piliers de l'Education 4.0</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Personnalisation</h3>
              <p className="text-gray-600">L'IA permet d'adapter le contenu au rythme de chaque élève, offrant un soutien sur mesure.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Immersion</h3>
              <p className="text-gray-600">La RA et la RV transforment des concepts abstraits en expériences visuelles concrètes et mémorables.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary-700 mb-3">Collaboration</h3>
              <p className="text-gray-600">Les outils cloud favorisent le travail d'équipe et la créativité collective, compétences clés de demain.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};