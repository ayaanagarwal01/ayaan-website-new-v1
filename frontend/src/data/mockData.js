export const navItems = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'About', href: '/about' },
  {
    label: 'Theatre',
    href: '#theatre',
    dropdown: [
      { label: 'If You Were Me', href: '/theatre/if-you-were-me' },
      { label: 'Do You Hear the People Sing?', href: '/theatre/do-you-hear-the-people-sing' },
    ],
  },
  {
    label: 'Research',
    href: '#research',
    dropdown: [
      { label: 'Machine Learning & Multiple Sclerosis', href: '/research/machine-learning-driven' },
      { label: 'Unified RNA-seq Meta-analysis', href: '/research/unified-rna-seq' },
      { label: 'RNA Therapeutics', href: '/research/rna-therapeutics' },
    ],
  },
  { label: 'Music', href: '#music' },
  { label: 'Service', href: '#service' },
  { label: 'Debate', href: '#debate' },
  { label: 'My Community', href: '/community' },
  { label: 'Social Awareness', href: '#social-awareness' },
];

export const servicesData = [
  {
    id: 1,
    title: 'Theatre',
    description: "Ever since I first saw Hamilton as a 13 year old, I've been invested in musical theatre; I'm proud to say I've done two productions since: find them here!",
    icon: 'drama',
    link: '#theatre',
  },
  {
    id: 2,
    title: 'Music',
    description: "I'm an avid singer, and have been performing independently and with my band on multiple occasions. Check out some performances here!",
    icon: 'music',
    link: '#music',
  },
  {
    id: 3,
    title: 'Service',
    description: 'I believe in service for growth \u2013 democratising scientific information and education, nature, and awareness for social issues are topics I feel strongly for.',
    icon: 'heart',
    link: '#service',
  },
  {
    id: 4,
    title: 'Research',
    description: "As a passionate student researcher interested in computational and microbiology, I've engaged in multiple research endeavours! More details here.",
    icon: 'microscope',
    link: '#research',
  },
];

export const researchProjects = [
  {
    id: 'machine-learning-driven',
    title: 'Machine Learning-Driven Meta-Analysis Reveals Shared B Cell Repertoires Linked to Multiple Sclerosis',
    shortTitle: 'Machine Learning-Driven Meta-Analysis Reveals shared B Cell Repertoires linked to Multiple Sclerosis',
    thumbnail: 'https://www.ayaanportfolio.com/ss1.png',
    link: '/research/machine-learning-driven',
    organization: '',
    subtitle: '',
    videoId: '598LeXmEWYo',
    videoTitle: 'A summary video from a preliminary version of this project!',
    videoLabel: 'Original IRIS video 2024',
    gallery: [
      'https://www.ayaanportfolio.com/folder1/Example%20result.png',
      'https://www.ayaanportfolio.com/folder1/Graphical%20Abstract.png',
      'https://www.ayaanportfolio.com/folder1/IRIS-image-2.jpeg',
      'https://www.ayaanportfolio.com/folder1/IRIS-image-1.jpeg',
      'https://www.ayaanportfolio.com/folder1/IRIS-image-3.jpeg',
      'https://www.ayaanportfolio.com/folder1/IRIS-image-4.jpeg',
    ],
    additionalVideoId: 'JC2q9rrqUfk',
    additionalVideoTitle: 'IRIS video #1',
    paperLabel: 'Research Paper',
    paperLink: 'https://www.ayaanportfolio.com/meeting-details.html',
    extras: [],
  },
  {
    id: 'unified-rna-seq',
    title: 'Unified RNA-seq Meta-analysis Reveals Conserved Metabolic Pathways',
    shortTitle: 'Unified RNA-seq Meta-analysis Reveals Conserved Metabolic Pathways Underlying Mycobacter...',
    thumbnail: 'https://www.ayaanportfolio.com/ss2.png',
    link: '/research/unified-rna-seq',
    organization: 'Tata Institute of Fundamental Research',
    subtitle: 'Underlying Mycobacterial Tolerance to Immune and Antimicrobial Stresses',
    videoId: 'CTA6-Px8ur8',
    videoTitle: 'Summary video TIFR project',
    videoLabel: 'Summary Video',
    gallery: [
      'https://www.ayaanportfolio.com/folder2/image-1.jpg',
      'https://www.ayaanportfolio.com/folder2/image-2.jpg',
      'https://www.ayaanportfolio.com/folder2/image-3.jpg',
      'https://www.ayaanportfolio.com/folder2/image-4.jpg',
    ],
    additionalVideoId: null,
    additionalVideoTitle: '',
    paperLabel: 'Research Paper',
    paperLink: null,
    extras: [
      { type: 'link', label: 'Letter of Interest', href: null },
    ],
  },
  {
    id: 'rna-therapeutics',
    title: 'Exploring the Potential of RNA Therapeutics to Combat Neurodegenerative Diseases',
    shortTitle: 'Exploring the Potential of RNA Therapeutics to Combat Neurodegenerative Diseases',
    thumbnail: 'https://www.ayaanportfolio.com/ss3.png',
    link: '/research/rna-therapeutics',
    organization: '',
    subtitle: 'Exploring the Potential of RNA Therapeutics to Combat Neurodegenerative Diseases',
    videoId: 'ipSFnRjw42o',
    videoTitle: 'Arianna (MIT/Harvard) & Ayaan - STEM Excellence Fellowship Spotlight',
    videoLabel: 'Hebbian STEM Excellence Spotlight',
    gallery: [],
    additionalVideoId: null,
    additionalVideoTitle: '',
    paperLabel: 'Review Paper',
    paperLink: null,
    extras: [
      {
        type: 'text',
        title: 'Immerse Essay',
        description: 'I submitted an inspired essay from this research project to the Immerse essay competition and received a 10% scholarship.',
      },
    ],
  },
];

export const theatreShows = [
  {
    id: 'if-you-were-me',
    title: 'Musical: If You Were Me',
    thumbnail: 'https://www.ayaanportfolio.com/2.avif',
    link: '/theatre/if-you-were-me',
    gallery: [
      'https://www.ayaanportfolio.com/folder3/image-1.jpg',
      'https://www.ayaanportfolio.com/folder3/image-2.jpg',
      'https://www.ayaanportfolio.com/folder3/image-3.jpg',
    ],
    videos: [
      { id: 'clHyFtILUIY', title: "Haji's death" },
      { id: 'ZOncE8EGXuw', title: "Haji's Melody" },
    ],
  },
  {
    id: 'do-you-hear-the-people-sing',
    title: 'Musical: Do You Hear the People Sing?',
    thumbnail: 'https://www.ayaanportfolio.com/1.avif',
    link: '/theatre/do-you-hear-the-people-sing',
    gallery: [
      'https://www.ayaanportfolio.com/folder4/image-6.jpg',
      'https://www.ayaanportfolio.com/folder4/image-2.jpg',
      'https://www.ayaanportfolio.com/folder4/image-3.jpg',
      'https://www.ayaanportfolio.com/folder4/image-4.jpg',
      'https://www.ayaanportfolio.com/folder4/image-5.jpg',
      'https://www.ayaanportfolio.com/folder4/image-10.jpg',
      'https://www.ayaanportfolio.com/folder4/image-7.jpg',
      'https://www.ayaanportfolio.com/folder4/image-8.jpg',
      'https://www.ayaanportfolio.com/folder4/image-9.jpg',
      'https://www.ayaanportfolio.com/folder4/image-1.jpg',
    ],
    videos: [
      { id: '76mdyd0VsBY', title: 'The Confrontation' },
      { id: 'u1sza1eXYd4', title: 'Bring Him Home' },
      { id: 'gsQ3ud8tVY8', title: 'Who Am I?' },
      { id: 'ep2t3deOAC0', title: "Valjean's Soliloquy" },
      { id: 'RIh37Zn7JiI', title: "Valjean's Death" },
      { id: 'H4I-5zXMlrk', title: 'The Sewers' },
    ],
  },
];

export const musicVideos = [
  { id: '_nHOT7mb7GQ', title: 'Waving Through a Window' },
  { id: 'CIvZ1-e5TOE', title: 'Hey Jude' },
  { id: 'Uhcvy0Z_mmo', title: 'Hotel California' },
  { id: 'q0hPmS7Vjdk', title: 'You Give Love a Bad Name' },
  { id: 'DhZDE6Y4ik0', title: 'Thriller' },
];

export const serviceActivities = [
  {
    id: 1,
    title: 'YLAC',
    image: 'https://www.ayaanportfolio.com/318022811_1837928546571775_5559517177374462141_n.jpg',
    description: 'Youth Leadership & Civic Engagement program participation.',
  },
  {
    id: 2,
    title: 'Service Yatra',
    image: 'https://www.ayaanportfolio.com/Goa-photo-1.jpg',
    description: 'Community service travel experience contributing to rural development.',
  },
  {
    id: 3,
    title: 'ApniShala Internship',
    image: 'https://www.ayaanportfolio.com/ApniShala-photo-2.jpg',
    description: 'Internship focused on education and social-emotional learning.',
  },
];

export const debateAchievements = [
  {
    id: 1,
    title: 'Won World Schools Debating League',
    image: 'https://www.ayaanportfolio.com/certificate.png',
  },
  {
    id: 2,
    title: 'Winner of Welhams Boys School Oliphant Memorial Debate',
    image: 'https://www.ayaanportfolio.com/toi.png',
  },
  {
    id: 3,
    title: 'ISDS National Camp 2023 and 2024',
    image: 'https://www.ayaanportfolio.com/folder7/image-2.jpeg',
  },
];

export const contactInfo = {
  email: 'ayaanagarwal209@gmail.com',
  address: 'Mumbai, India',
  website: 'www.ayaanportfolio.com',
};

export const aboutData = {
  name: 'Ayaan Agarwal',
  bio: "I'm a passionate student with diverse interests spanning research, music, theatre, debate, and community service. Based in Mumbai, India, I'm driven by curiosity and a desire to make meaningful contributions across multiple disciplines.",
  interests: [
    'Computational Biology',
    'Microbiology Research',
    'Musical Theatre',
    'Vocal Performance',
    'Competitive Debate',
    'Community Service',
  ],
};


export const socialMediaHandles = [
  {
    id: 'whatsapp',
    platform: 'WhatsApp Channel',
    handle: 'Ayaan Agarwal',
    url: 'https://whatsapp.com/channel/ayaanagarwal',
    description: 'Join my WhatsApp Channel for exclusive updates on research, performances, and community initiatives. Get behind-the-scenes content and be the first to know about upcoming projects!',
    isHighlight: true,
    followers: '500+',
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: '@AyaanAgarwal',
    url: 'https://www.youtube.com/channel/UCjwP8d1SBJpRT_ErPbr1tJQ',
    description: 'Watch my musical performances, research presentations, and more.',
    isHighlight: false,
    followers: '16',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@ayaan.agarwal',
    url: 'https://instagram.com/ayaan.agarwal',
    description: 'Behind the scenes of theatre, music, and daily life.',
    isHighlight: false,
    followers: '1.2K',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'Ayaan Agarwal',
    url: 'https://linkedin.com/in/ayaanagarwal',
    description: 'Professional updates, research publications, and networking.',
    isHighlight: false,
    followers: '800+',
  },
  {
    id: 'twitter',
    platform: 'X (Twitter)',
    handle: '@ayaan_agarwal',
    url: 'https://x.com/ayaan_agarwal',
    description: 'Thoughts on science, art, and everything in between.',
    isHighlight: false,
    followers: '350+',
  },
  {
    id: 'email',
    platform: 'Email Newsletter',
    handle: 'ayaanagarwal209@gmail.com',
    url: 'mailto:ayaanagarwal209@gmail.com',
    description: 'Subscribe to receive updates directly in your inbox.',
    isHighlight: false,
    followers: '',
  },
];

export const socialAwarenessData = {
  title: 'Social Awareness',
  subtitle: 'Storytelling for Change',
  description: 'Ayaan is working on an animation series to create awareness on critical aspects of social issues through his storytelling, creative, and animation skills. The series aims to make complex social topics accessible and engaging for a wider audience, combining artistic expression with meaningful impact.',
  comingSoon: 'Stay tuned for updates and to watch the series.',
  topics: [
    'Mental Health Awareness',
    'Environmental Sustainability',
    'Digital Literacy & Online Safety',
    'Inclusivity & Diversity',
    'Youth Empowerment',
    'Science Communication',
  ],
};
