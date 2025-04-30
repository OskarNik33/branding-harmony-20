
export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  image: string;
  details?: string[];
  category?: string;
}

export const projects: Project[] = [
  // Main featured projects with detailed information
  {
    slug: 'konglomerat-2024',
    title: 'Konglomerat 2024',
    description: 'An exhibition organized by alumni and former students of Oblikovna, showcasing various art forms and design approaches.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop',
    details: [
      'Developed comprehensive exhibition design system',
      'Created cohesive visual identity across all materials',
      'Coordinated with multiple stakeholders to ensure design consistency'
    ],
    category: 'Exhibition Design'
  },
  {
    slug: 'fanfara-2024',
    title: '17. Fanfara - 2024',
    description: 'The biggest student organised marketing conference in Slovenia, featuring innovative design solutions and brand strategies.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2940&auto=format&fit=crop',
    details: [
      'Led event branding initiatives',
      'Designed comprehensive marketing materials',
      'Developed digital and print assets'
    ],
    category: 'Event Branding'
  },
  {
    slug: 'generali-levji-delez',
    title: 'Generali - Levji delež',
    description: 'Created the Levji delež profile on Instagram, focusing on financial knowledge and investment confidence building.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2940&auto=format&fit=crop',
    details: [
      'Developed social media strategy',
      'Created educational content series',
      'Designed visual identity for financial education content'
    ],
    category: 'Digital Design'
  },
  // Photography projects
  {
    slug: 'zha-music',
    title: 'ZHA - music',
    description: 'Music photography capturing the essence of live performances and artist portraits.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000',
    details: [
      'Concert photography',
      'Artist portraits',
      'Album cover photography'
    ],
    category: 'Photography'
  },
  {
    slug: 'industrial-spaces',
    title: 'INDUSTRIAL SPACES',
    description: 'Exploration of industrial architecture and abandoned spaces through photography.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000',
    category: 'Photography'
  },
  // Additional projects with basic information
  {
    slug: 'modern-portraits',
    title: 'MODERN PORTRAITS',
    description: 'Contemporary portrait photography with emphasis on lighting and composition.',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000',
    category: 'Photography'
  },
  {
    slug: 'kinetic-typography',
    title: 'KINETIC TYPOGRAPHY',
    description: 'Animated text designs that bring typography to life through motion.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=2000',
    category: 'Motion Graphics'
  },
  {
    slug: 'brand-animations',
    title: 'BRAND ANIMATIONS',
    description: 'Motion graphics for brand identity and advertising campaigns.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&w=2000',
    category: 'Motion Graphics'
  }
];
