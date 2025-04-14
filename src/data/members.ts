import { Member } from './member';

export const membersData: Member[] = [
  {
    id: 1,
    name: 'Alice Smith',
    photoUrl: '/images/alice.jpg', // Ensure these image paths are correct in your `public` folder
    role: 'Lead UI/UX Designer',
    details: [
      'Expert in Figma and Adobe XD',
      'Passionate about user-centered design',
      '5+ years of experience',
    ],
  },
  {
    id: 2,
    name: 'Bob Johnson',
    photoUrl: '/images/bob.jpg',
    role: 'Front-End Developer',
    details: [
      'Proficient in React, TypeScript, and JavaScript',
      'Experience with responsive design',
      'Contributes to open-source projects',
    ],
  },
  {
    id: 3,
    name: 'Charlie Brown',
    photoUrl: '/images/charlie.jpg',
    role: 'Back-End Developer',
    details: [
      'Skilled in Node.js and Python',
      'Database management with PostgreSQL and MongoDB',
      'Experience building scalable APIs',
    ],
  },
  {
    id: 4,
    name: 'Diana Miller',
    photoUrl: '/images/diana.jpg',
    role: 'Project Manager',
    details: [
      'Agile and Scrum certified',
      'Excellent communication and organizational skills',
      'Ensures projects are delivered on time and within budget',
    ],
  },
  {
    id: 5,
    name: 'Ethan Davis',
    photoUrl: '/images/ethan.jpg',
    role: 'Quality Assurance Engineer',
    details: [
      'Experienced in manual and automated testing',
      'Attention to detail and commitment to quality',
      'Familiar with testing frameworks like Jest and Cypress',
    ],
  },
  {
    id: 6,
    name: 'Fiona Wilson',
    photoUrl: '/images/fiona.jpg',
    role: 'Marketing Specialist',
    details: [
      'Develops and executes marketing strategies',
      'Social media management and content creation',
      'Data-driven approach to marketing',
    ],
  },
];