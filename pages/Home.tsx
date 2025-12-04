import React from 'react';
import { PageView, Course } from '../types';
import { ArrowRight, CheckCircle, Smartphone, Brain, Zap, Users } from 'lucide-react';
import { stats } from '../data';

interface HomeProps {
  onNavigate: (page: PageView) => void;
  courses: Course[];
  onCourseSelect: (course: Course) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, courses, onCourseSelect }) => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-block px-4 py-1 rounded-full bg-primary-500/30 border border-primary-400 text-sm font-medium mb-6">
              Nouveau : Module IA générative disponible
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              L'école algérienne de demain <br />
              <span className="text-primary-200">commence aujourd'hui.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl">
              Formez-vous aux outils numériques, à l'intelligence artificielle et à la réalité augmentée pour transformer votre classe et engager vos élèves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('COURSES')}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 transition-colors shadow-lg"
              >
                Découvrir les cours
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => onNavigate('ABOUT')}
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white shadow-lg -mt-10 relative z-20 max-w-7xl mx-auto rounded-lg grid grid-cols-2 md:grid-cols-4 gap-8 p-8 mx-4 md:mx-auto">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-3xl font-bold text-primary-700">{stat.value}</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Pourquoi nous choisir ?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Une pédagogie adaptée au 21ème siècle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligence Artificielle</h3>
              <p className="text-gray-600">
                Maîtrisez les assistants intelligents pour préparer vos cours, différencier votre pédagogie et gagner du temps précieux.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Learning & RA</h3>
              <p className="text-gray-600">
                Utilisez les smartphones des élèves comme outils d'apprentissage grâce à la réalité augmentée et aux quiz interactifs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gamification</h3>
              <p className="text-gray-600">
                Rendez l'apprentissage addictif en intégrant des mécaniques de jeu dans vos séquences pédagogiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Formations à la une</h2>
              <p className="mt-2 text-gray-600">Les modules les plus populaires auprès des enseignants.</p>
            </div>
            <button 
              onClick={() => onNavigate('COURSES')}
              className="hidden md:flex text-primary-600 hover:text-primary-700 font-medium items-center"
            >
              Voir tout le catalogue <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 h-48 w-full relative">
                   <img className="h-full w-full object-cover" src={course.image} alt={course.title} />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary-700 uppercase tracking-wider">
                     {course.category}
                   </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="flex items-center"><Users className="h-4 w-4 mr-1"/> {course.level}</span>
                      <span className="mx-2">•</span>
                      <span>{course.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{course.shortDescription}</p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <button 
                      onClick={() => onCourseSelect(course)}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                    >
                      Voir le module
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <button onClick={() => onNavigate('COURSES')} className="text-primary-600 font-medium">Voir toutes les formations</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Prêt à transformer votre enseignement ?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Rejoignez une communauté de plus de 1000 enseignants innovants en Algérie.
          </p>
          <div className="mt-8">
            <button 
              onClick={() => onNavigate('COURSES')}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 md:text-lg"
            >
              Commencer gratuitement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};