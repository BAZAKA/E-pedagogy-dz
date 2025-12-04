import React, { useState } from 'react';
import { Course } from '../types';
import { Search, Filter, Clock, BarChart } from 'lucide-react';

interface CoursesProps {
  courses: Course[];
  onCourseSelect: (course: Course) => void;
}

export const Courses: React.FC<CoursesProps> = ({ courses, onCourseSelect }) => {
  const [filter, setFilter] = useState('Tous');
  const [search, setSearch] = useState('');

  const categories = ['Tous', 'IA', 'Gamification', 'Réalité Augmentée', 'Pédagogie Hybride', 'Évaluation'];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = filter === 'Tous' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                          course.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Catalogue des Formations</h1>
          <p className="mt-4 text-xl text-gray-500">Développez vos compétences numériques à votre rythme.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto space-x-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher une formation..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-200 flex flex-col h-full">
                <div className="relative h-48">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="inline-block px-2 py-1 bg-primary-600 rounded text-xs font-semibold mb-1">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{course.shortDescription}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BarChart className="h-4 w-4 mr-1" />
                        {course.level}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onCourseSelect(course)}
                    className="w-full mt-4 bg-white border-2 border-primary-600 text-primary-600 py-2 px-4 rounded-md font-medium hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Voir le détail
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg">Aucune formation trouvée pour cette recherche.</p>
              <button 
                onClick={() => {setFilter('Tous'); setSearch('');}}
                className="mt-4 text-primary-600 font-medium hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};