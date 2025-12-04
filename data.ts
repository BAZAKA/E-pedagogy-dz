import { Course } from './types';

export const courses: Course[] = [
  {
    id: 'ai-intro',
    title: "Introduire l'IA en classe",
    shortDescription: "Maîtrisez ChatGPT et Gemini pour enrichir vos cours.",
    description: "Ce module complet vous guide dans l'intégration des assistants intelligents en classe. Apprenez à créer des prompts efficaces, à générer des exercices personnalisés et à sensibiliser vos élèves à l'éthique de l'IA.",
    category: 'IA',
    level: 'Débutant',
    duration: '4h 30m',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['ChatGPT', 'Gemini', 'Productivité', 'Innovation'],
    modules: [
      {
        id: 'm1',
        title: 'Comprendre les bases des LLM',
        lessons: [
          { id: 'l1', title: "Qu'est-ce qu'une IA générative ?", duration: '15 min', type: 'video' },
          { id: 'l2', title: "Les limites et les biais", duration: '20 min', type: 'text' }
        ]
      },
      {
        id: 'm2',
        title: 'Atelier Pratique',
        lessons: [
          { id: 'l3', title: "Créer un plan de cours avec Gemini", duration: '45 min', type: 'video' },
          { id: 'l4', title: "Générer des quiz automatiques", duration: '30 min', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'interactive-quiz',
    title: "Créer des quiz interactifs",
    shortDescription: "Dynamisez vos évaluations avec Plickers, Kahoot et Quizizz.",
    description: "Transformez l'évaluation en un moment ludique et engageant. Découvrez comment configurer des outils numériques pour obtenir des retours instantanés sur la compréhension de vos élèves.",
    category: 'Gamification',
    level: 'Débutant',
    duration: '3h 00m',
    image: 'https://picsum.photos/seed/quiz/800/600',
    tags: ['Evaluation', 'Kahoot', 'Plickers', 'Engagement'],
    modules: [
      {
        id: 'm1',
        title: 'Introduction à la Gamification',
        lessons: [
          { id: 'l1', title: "Pourquoi jouer pour apprendre ?", duration: '10 min', type: 'video' }
        ]
      },
      {
        id: 'm2',
        title: 'Outils Pratiques',
        lessons: [
          { id: 'l2', title: "Tutoriel Kahoot", duration: '25 min', type: 'video' },
          { id: 'l3', title: "Plickers : sans appareils élèves", duration: '30 min', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'ar-beginners',
    title: "Réalité Augmentée pour débutants",
    shortDescription: "Enrichissez le réel avec Vuforia et Assemblr.",
    description: "Faites sortir les modèles 3D des livres ! Ce cours vous apprend à créer des expériences de réalité augmentée simples pour visualiser des concepts abstraits (sciences, histoire, géographie).",
    category: 'Réalité Augmentée',
    level: 'Intermédiaire',
    duration: '6h 15m',
    image: 'https://picsum.photos/seed/ar/800/600',
    tags: ['AR', 'VR', 'Vuforia', 'Sciences'],
    modules: [
      {
        id: 'm1',
        title: 'Les fondamentaux de la RA',
        lessons: [
          { id: 'l1', title: "Différence entre RA et RV", duration: '12 min', type: 'text' }
        ]
      },
      {
        id: 'm2',
        title: 'Création de contenu',
        lessons: [
          { id: 'l2', title: "Utiliser Assemblr EDU", duration: '40 min', type: 'video' },
          { id: 'l3', title: "Créer des marqueurs interactifs", duration: '35 min', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'flipped-classroom',
    title: "Classe inversée & Outils numériques",
    shortDescription: "Repensez le temps de classe avec la vidéo pédagogique.",
    description: "Apprenez à structurer une classe inversée. Créez des capsules vidéos engageantes et organisez des activités de pédagogie active en présentiel.",
    category: 'Pédagogie Hybride',
    level: 'Intermédiaire',
    duration: '5h 00m',
    image: 'https://picsum.photos/seed/flipped/800/600',
    tags: ['Pédagogie Active', 'Vidéo', 'Hybride'],
    modules: [
      {
        id: 'm1',
        title: 'Concept et Enjeux',
        lessons: [
          { id: 'l1', title: "La taxonomie de Bloom inversée", duration: '20 min', type: 'text' }
        ]
      }
    ]
  },
  {
    id: 'digital-resources',
    title: "Création de ressources interactives",
    shortDescription: "Devenez créateur avec Genially et LearningApps.",
    description: "Ne soyez plus simple consommateur. Créez des infographies interactives, des escape games pédagogiques et des exercices auto-corrigés.",
    category: 'Pédagogie Hybride',
    level: 'Avancé',
    duration: '8h 00m',
    image: 'https://picsum.photos/seed/genially/800/600',
    tags: ['Genially', 'Design', 'Créativité'],
    modules: [
      {
        id: 'm1',
        title: 'Design Pédagogique',
        lessons: []
      }
    ]
  },
  {
    id: 'digital-eval',
    title: "Évaluer avec le numérique",
    shortDescription: "Suivi des compétences et feedbacks rapides.",
    description: "Utilisez le numérique pour différencier les parcours et offrir un feedback personnalisé à chaque élève grâce aux outils d'analyse de données simples.",
    category: 'Évaluation',
    level: 'Intermédiaire',
    duration: '4h 00m',
    image: 'https://picsum.photos/seed/eval/800/600',
    tags: ['Données', 'Suivi', 'Compétences'],
    modules: [
      {
        id: 'm1',
        title: 'Théorie de l\'évaluation',
        lessons: []
      }
    ]
  }
];

export const stats = [
  { label: 'Enseignants formés', value: '1,200+' },
  { label: 'Modules disponibles', value: '25+' },
  { label: 'Taux de satisfaction', value: '98%' },
  { label: 'Wilayas couvertes', value: '58' },
];