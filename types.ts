export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'text' | 'quiz';
  content?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'IA' | 'Réalité Augmentée' | 'Gamification' | 'Pédagogie Hybride' | 'Évaluation';
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
  image: string;
  modules: Module[];
  tags: string[];
}

export type PageView = 'HOME' | 'COURSES' | 'COURSE_DETAILS' | 'ABOUT' | 'CONTACT';

export interface NavItem {
  label: string;
  view: PageView;
}