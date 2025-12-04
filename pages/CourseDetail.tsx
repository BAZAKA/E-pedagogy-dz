import React from 'react';
import { Course } from '../types';
import { ChevronLeft, PlayCircle, FileText, CheckCircle, Clock } from 'lucide-react';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header Banner */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Retour au catalogue
          </button>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-600 text-white mb-4">
                {course.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Durée: {course.duration}</span>
                <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" /> Niveau: {course.level}</span>
              </div>
            </div>
            {/* Simulated Video Placeholder */}
            <div className="w-full md:w-1/3 bg-black rounded-lg overflow-hidden shadow-2xl aspect-video relative group cursor-pointer">
              <img src={course.image} alt="Cover" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-white opacity-90 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Modules */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Contenu du cours</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {course.modules.length > 0 ? (
                    course.modules.map((module, idx) => (
                    <div key={module.id} className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                            {idx + 1}
                        </span>
                        {module.title}
                        </h3>
                        <div className="space-y-3 pl-11">
                        {module.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center justify-between group p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors">
                            <div className="flex items-center text-gray-600">
                                {lesson.type === 'video' ? (
                                <PlayCircle className="h-4 w-4 mr-3 text-primary-500" />
                                ) : (
                                <FileText className="h-4 w-4 mr-3 text-gray-400" />
                                )}
                                <span className="group-hover:text-primary-700 font-medium text-sm">{lesson.title}</span>
                            </div>
                            <span className="text-xs text-gray-400">{lesson.duration}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    ))
                ) : (
                    <div className="p-6 text-gray-500 italic">Contenu en cours de développement...</div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Votre progression</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-xs text-gray-500 text-right">0% Complété</p>
              <button className="w-full mt-6 bg-primary-600 text-white py-3 rounded-md font-bold hover:bg-primary-700 transition-colors shadow-sm">
                Commencer la formation
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Ce que vous apprendrez</h3>
              <ul className="space-y-3">
                {course.tags.map(tag => (
                  <li key={tag} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    Maîtriser {tag}
                  </li>
                ))}
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  Obtenir une certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};