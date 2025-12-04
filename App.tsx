import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PageView, Course } from './types';
import { courses } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('HOME');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedCourse]);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    if (page !== 'COURSE_DETAILS') {
      setSelectedCourse(null);
    }
  };

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setCurrentPage('COURSE_DETAILS');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onNavigate={handleNavigate} courses={courses} onCourseSelect={handleCourseSelect} />;
      case 'COURSES':
        return <Courses courses={courses} onCourseSelect={handleCourseSelect} />;
      case 'COURSE_DETAILS':
        return selectedCourse ? (
          <CourseDetail course={selectedCourse} onBack={() => handleNavigate('COURSES')} />
        ) : (
          <Courses courses={courses} onCourseSelect={handleCourseSelect} />
        );
      case 'ABOUT':
        return <About />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} courses={courses} onCourseSelect={handleCourseSelect} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}