import { PersonalInfo, Project, TimelineItem, SkillCategory, ServiceItem, RecognitionItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Görkem Uçar',
  greeting: "Hey There, I'm Görkem",
  tagline: 'Unity & C# Developer (Since 2021) • Computer Engineering @ Politecnico di Torino',
  bio: 'I make scalable and cooperative systems for games and I am now enhancing my productivity with AI-integrated workflows. Computer Engineering student at Politecnico di Torino developing with Unity & C# since 2021.',
  education: 'Politecnico di Torino — Computer Engineering (2024 - Present)',
  educationDetail: 'Buca Science High School (95.73/100) • Game Academy • ESP Certified',
  email: 'gorkem.ucar74@gmail.com',
  phone: '+39 334 150 6249',
  location: 'Torino, Italy',
  status: 'Computer Engineering @ Politecnico di Torino (2024 - Present)',
  languages: [
    { language: 'English', level: 'C2 Proficient / C1 Spoken' },
    { language: 'Turkish', level: 'Native' },
    { language: 'Italian', level: 'A1 Basic' },
  ],
  socialLinks: {
    github: 'https://github.com/Gorkem97?tab=repositories',
    itchio: 'https://gorkemucar.itch.io',
    email: 'mailto:gorkem.ucar74@gmail.com',
  },
  avatarUrl: '/profile.jpg',
  stats: [
    {
      label: 'Unity & C# Experience',
      value: 'Since 2021',
      description: 'Continuous hands-on game development & modular systems programming',
    },
    {
      label: 'Shipped Projects',
      value: '4',
      description: 'Featured games, VR titles, and game jam releases',
    },
    {
      label: 'Academic Honors',
      value: '95.73',
      suffix: '/100',
      description: 'Buca Science High School High Honors diploma in mathematics and science',
    },
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: 'game-development',
    title: 'Unity 3D & C# Game Dev',
    count: 'Since 2021 • 4 Projects',
    description: 'Engineering modular gameplay loops, responsive player mechanics, and decoupled state machines in Unity & C#.',
    iconType: 'game',
    bgColor: '#1F5A63', // Deep Teal
  },
  {
    id: 'ai-integration',
    title: 'AI-Integrated Workflows',
    count: 'Productivity & Tooling',
    description: 'Enhancing development productivity with AI tools (like Antigravity) to accelerate prototyping and gameplay logic iteration.',
    iconType: 'ai',
    bgColor: '#F5AF38', // Warm Amber / Mustard
  },
  {
    id: 'architecture-collaboration',
    title: 'Scalable Systems & Collab',
    count: 'Cooperative & Modular',
    description: 'Building scalable, decoupled architectures and collaborating effectively through structured Git/GitHub team workflows.',
    iconType: 'code',
    bgColor: '#E26D46', // Terracotta
  },
];

export const recognitionsData: RecognitionItem[] = [
  {
    id: 'icyss-belgrade',
    name: 'ICYSS 2021 International',
    role: '3rd Place in Psychology / Empirical Research',
    organization: 'Belgrade, Serbia • International Jury',
    description: 'Awarded 3rd place by an international scientific jury for empirical data modeling, statistical methodology, and research presentation.',
    year: '2021',
    tag: 'International Award',
    iconType: 'trophy',
    badgeColor: '#F5AF38',
  },
  {
    id: 'esp-europe',
    name: 'JA Europe / GençBizz',
    role: 'Entrepreneurship Skills Pass (ESP)',
    organization: 'Junior Achievement Europe',
    description: 'Certified international accreditation in entrepreneurial management and product leadership, steering product development in national finals.',
    year: '2022',
    tag: 'International Certification',
    iconType: 'certificate',
    badgeColor: '#1F5A63',
  },
  {
    id: 'buca-science-honors',
    name: 'Buca Science High School',
    role: 'High School Diploma with High Honors',
    organization: 'İzmir, Turkey',
    description: 'Graduated with high honors with a 95.73 / 100 grade point average.',
    year: '2022',
    tag: 'Academic Honors',
    iconType: 'academic',
    badgeColor: '#E26D46',
  },
];

export const timelineData: TimelineItem[] = [
  {
    id: 'polito-computer-engineering',
    period: '2024 - Present',
    title: 'Computer Engineering (B.Sc.)',
    organization: 'Politecnico di Torino',
    location: 'Torino, Italy',
    type: 'education',
    typeLabel: 'Higher Education',
    description: 'Pursuing Bachelor of Science in Computer Engineering at Politecnico di Torino.',
    achievements: [
      'Core coursework in computer architecture, software engineering, and computational systems.',
    ],
    skills: ['Computer Engineering', 'C / C++', 'Object-Oriented Design', 'Systems Architecture'],
    accentColor: 'blue',
  },
  {
    id: 'unity-game-dev-2021',
    period: '2021 - Present',
    title: 'Unity 3D & C# Game Development',
    organization: 'Independent & Team Projects',
    location: 'Torino, Italy / Remote',
    type: 'project',
    typeLabel: 'Core Experience',
    description: 'Hundreds of hours of hands-on game development experience since 2021. Built diverse systems both solo and in teams—ranging from custom shaders to directory management, singletons, and ScriptableObject-based architectures.',
    achievements: [
      'Engineered modular game systems from shaders and singleton managers to ScriptableObject data pipelines.',
      'Shipped multiple titles including Game Jam games, GreenMate, and VR projects through solo and team workflows.',
      'Maintained light practical exploration of AI workflow tools like Antigravity for prototyping assistance.',
    ],
    skills: ['Unity 3D', 'C#', 'ScriptableObjects', 'Shaders', 'Architecture', 'Team Collaboration'],
    accentColor: 'teal',
  },
  {
    id: 'game-academy-hypercasual',
    period: '2022 - 2023',
    title: 'Game Developer Program',
    organization: 'Game Academy (Oyun ve Uygulama Akademisi)',
    location: 'İzmir, Turkey',
    type: 'certification',
    typeLabel: 'Certification',
    description: 'Hands-on training focused on rapid game prototyping, C# scripting, team sprints, and core player feedback loops.',
    achievements: [
      'Built a strong foundation in modular code design and an intuition in all aspects of video game development',
    ],
    skills: ['Unity 3D', 'C#', 'Prototyping', 'Teamwork', 'Game Loops'],
    accentColor: 'amber',
  },
  {
    id: 'high-school-fen-lisesi',
    period: '2018 - 2022',
    title: 'Science High School Diploma',
    organization: 'Buca İnci Özer Tırnaklı Science High School',
    location: 'İzmir, Turkey',
    type: 'education',
    typeLabel: 'High School Degree',
    description: 'Graduated with high honors (GPA: 95.73 / 100).',
    achievements: [
      'Graduated with high honors (GPA: 95.73 / 100).',
    ],
    skills: ['Mathematics', 'Physics', 'Analytical Problem Solving'],
    accentColor: 'amber',
  },
];

export const projectsData: Project[] = [
  {
    id: 'ww2-military-management',
    title: 'Current Project: AI-Augmented WW2 Game',
    category: 'ai',
    categoryLabel: 'Current Project • AI-Augmented Development',
    subtitle: 'Active solo project leveraging AI workflows, clean C# architecture, and IK animations',
    description: 'My current active solo project: a WW2 military management game developed to master AI-driven workflows, clean C# architecture, IK character animation, and atmospheric lighting—positioning my engineering at the forefront of AI-shaped development.',
    longDescription: 'This ongoing solo WW2 project serves as my primary initiative for mastering AI-augmented game engineering. By actively embedding modern AI workflows into my day-to-day development, I implement clean C# architectures, procedural Inverse Kinematics (IK) animations, realistic lighting, and solid state machines. I believe the future of game and software development belongs to AI-human synergy, and this project is built to master that discipline at a high standard.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    videos: [
      '/videos/assign.m4v',
      '/videos/carry.m4v',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    ],
    tags: ['Unity 3D', 'AI Workflows', 'C#', 'IK Animation', 'Lighting & VFX'],
    techStack: ['Unity Engine', 'C#', 'AI-Augmented Dev', 'Inverse Kinematics (IK)', 'Scene Lighting'],
    year: '2024 - Present',
    featured: true,
    status: 'In Active Development',
    metrics: {
      label: 'Specialization',
      value: 'AI-Augmented Dev',
    },
    links: {
      github: 'https://github.com/Gorkem97?tab=repositories',
      itchio: 'https://gorkemucar.itch.io',
    },
    features: [
      'AI-augmented development workflows for high-velocity code scaffolding and rapid iteration.',
      'Inverse Kinematics (IK) character rigging for natural object handling and carrying animations.',
      'Atmospheric 3D lighting, mood-setting post-processing, and visual composition.',
      'Clean, decoupled C# state machine architecture structured for long-term scalability.',
    ],
    technicalHighlights: [
      'Daily integration of modern AI tooling to accelerate architecture design and bug prevention.',
      'Procedural animation constraints synchronized seamlessly with gameplay state transitions.',
    ],
  },
  {
    id: 'vr-spatial-experience',
    title: 'Digital Bridges Over The Gender Gap',
    category: 'vr',
    categoryLabel: 'Erasmus+ VR • Educational Experience',
    subtitle: 'Narrative VR experience highlighting women in science and spatial 3D interactions',
    description: 'Developed as a 2-student team for an Erasmus+ project, this VR experience tells the inspiring life stories and challenges faced by notable women scientists across countries, providing deep experience in 3D environment design and spatial interaction.',
    longDescription: 'Created as part of the European Erasmus+ initiative "Digital Bridges Over The Gender Gap" by a 2-student team. We designed an interactive VR experience showcasing the life stories, achievements, and unique obstacles encountered by pioneering female scientists from diverse nations. Working on this project provided extensive hands-on experience in 3D environment design, immersive world building, spatial hand interactions, and narrative pacing in virtual reality.',
    coverImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop',
    videos: [
      '/videos/vr.mp4',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop',
    ],
    tags: ['Unity VR', 'Erasmus+', 'C#', '3D Environment', 'Spatial Interactions'],
    techStack: ['Unity XR', 'C#', '3D Environment Design', 'Blender', 'Spatial Audio'],
    year: '2023 - 2024',
    featured: true,
    status: 'Completed',
    metrics: {
      label: 'Initiative',
      value: 'Erasmus+ Project',
    },
    links: {
      github: 'https://github.com/JustWeety/Gozde-Durmus-Vr-Project',
      articleUrl: 'https://epale.ec.europa.eu/en/blog/digital-bridges-over-gender-gap-coming-end',
      articleLabel: 'EPALE Erasmus+ Article',
    },
    features: [
      'Narrative 3D environments presenting stories and challenges of pioneering women scientists.',
      'Tactile 6-DoF spatial hand interactions and interactive physics-based exploration.',
      'Co-developed in a focused 2-student team within the international Erasmus+ program.',
      'Comprehensive practice in 3D scene composition, spatial lighting, and VR optimization.',
    ],
    technicalHighlights: [
      'Optimized single-pass rendering targeting stable VR framerates and comfortable locomotion.',
      'Modular interaction components for smooth grabbing, inspecting, and trigger-based narrative events.',
    ],
  },
  {
    id: 'greenmate-eco-game',
    title: 'GreenMate',
    category: 'game',
    categoryLabel: 'Unity 3D • First Completed Title',
    subtitle: 'My first fully completed game teaching environmental awareness to children',
    description: 'My first fully completed project, originally published on Google Play Store to teach environmental awareness to children alongside a companion board game. The playable version is now available on itch.io for PC.',
    longDescription: 'GreenMate is my first fully finished project. Originally released on the Google Play Store, it was designed as an educational game teaching children environmental awareness and sustainability while working in tandem with a physical companion board game. The playable version is currently hosted on itch.io for PC.',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    videos: [
      '/videos/greenkids/greenkids_1.m4v',
      '/videos/greenkids/greenkids_2.m4v',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    ],
    tags: ['Unity', 'C#', 'First Completed Project', 'Google Play Store', 'itch.io'],
    techStack: ['Unity 3D', 'C#', 'Mobile & PC', 'Game Design'],
    year: '2023 - 2024',
    featured: true,
    status: 'Completed',
    metrics: {
      label: 'Status',
      value: '1st Shipped Game',
    },
    links: {
      itchio: 'https://gorkemucar.itch.io/greenmate',
      github: 'https://github.com/Gorkem97/GreenKids',
      liveDemo: 'https://gorkemucar.itch.io/greenmate',
    },
    features: [
      'Teaches environmental awareness and waste management loops to children.',
      'Designed to work in tandem with a physical companion board game.',
      'Originally shipped on Google Play Store; playable on PC via itch.io.',
    ],
    technicalHighlights: [
      'Event-driven architecture separating gameplay state from UI components.',
    ],
  },
  {
    id: 'game-jam-series',
    title: 'Game Jam Releases (3 Jams • 2 Shipped)',
    category: 'game',
    categoryLabel: 'Game Jams • Foundational Projects',
    subtitle: '3 Game Jams entered, 2 playable games shipped as foundational learning milestones',
    description: 'Participated in 3 Game Jams and successfully shipped 2 fully playable titles. These initial projects served as valuable hands-on training for my game development foundation.',
    longDescription: 'Participated in 3 separate Game Jam sprints, delivering 2 complete, playable games to publication. As my earliest development initiatives, these projects served as intensive hands-on training grounds in rapid prototyping, tight deadline scoping, cross-discipline teamwork, and responsive C# gameplay architecture.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    videos: [
      '/videos/jam/trapped.mp4',
      '/videos/jam/smoke.mp4',
      '/videos/jam/jam_gameplay.mp4',
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop',
    ],
    tags: ['Unity', 'C#', '3 Jams (2 Shipped)', 'Early Projects', 'Itch.io'],
    techStack: ['Unity 3D', 'C#', 'Aseprite', 'Audacity'],
    year: '2022 - 2024',
    featured: true,
    status: '3 Jams / 2 Playable Releases',
    metrics: {
      label: 'Participations',
      value: '3 Jams (2 Shipped)',
    },
    links: {
      itchio: 'https://gorkemucar.itch.io',
      github: 'https://github.com/Gorkem97?tab=repositories',
    },
    features: [
      'Entered 3 Game Jam sprints, practicing rapid core loop design under strict time constraints.',
      'Shipped 2 complete playable prototypes with responsive player feedback, particle FX, and audio.',
      'Served as essential hands-on training projects cementing core Unity and C# gameplay patterns.',
    ],
    technicalHighlights: [
      'Modular ScriptableObject architecture for rapid prototyping and clean state decoupling.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'game-engine',
    name: 'Game Development & Engine',
    iconName: 'Gamepad2',
    description: 'Unity 3D, C#, and interactive gameplay systems',
    skills: [
      { name: 'Unity 3D Engine', level: 'Core', experience: 'Since 2021', categoryTag: 'Engine' },
      { name: 'C# (Game Programming)', level: 'Core', experience: 'Since 2021', categoryTag: 'Programming' },
      { name: 'AI Integration & Workflows', level: 'Active', experience: 'Antigravity AI Tooling', categoryTag: 'AI & Tools' },
      { name: 'Unity XR / VR Development', level: 'Proficient', experience: 'Completed Project', categoryTag: 'VR' },
      { name: 'Game Jam Prototyping', level: 'Proficient', experience: '2 Jams Shipped', categoryTag: 'Development' },
    ],
  },
  {
    id: 'programming-cs',
    name: 'Architecture & CS Foundations',
    iconName: 'Cpu',
    description: 'Scalable software architecture, algorithms, and systems',
    skills: [
      { name: 'Scalable Architecture & Patterns', level: 'Core', experience: 'Modular & Extensible', categoryTag: 'Architecture' },
      { name: 'C# Language & OOP', level: 'Core', experience: 'Design Patterns & Systems', categoryTag: 'Languages' },
      { name: 'C Language', level: 'Core', experience: 'Pointers & Memory', categoryTag: 'Foundations' },
      { name: 'Algorithms & Data Structures', level: 'Proficient', experience: 'Core Concepts', categoryTag: 'CS Core' },
      { name: 'Computer Architecture', level: 'Academic', experience: 'Politecnico di Torino', categoryTag: 'Hardware/OS' },
    ],
  },
  {
    id: 'tools-art',
    name: 'Tools & Creative',
    iconName: 'Sparkles',
    description: 'Group collaboration, 3D/2D art, and production tools',
    skills: [
      { name: 'Git & GitHub (Group Workflows)', level: 'Proficient', experience: 'PRs, Team Collab & Version Control', categoryTag: 'Collaboration' },
      { name: 'Blender (3D & Lighting Basics)', level: 'Practical', experience: 'Asset Prep & Lighting for Dev', categoryTag: '3D Art' },
      { name: 'Aseprite & Pixel Studio', level: 'Proficient', experience: '2D Pixel Art & Sprites', categoryTag: '2D Art' },
      { name: 'Logic Pro & Audacity', level: 'Proficient', experience: 'Audio Design & Production', categoryTag: 'Audio' },
      { name: 'Affinity Suite (Designer & Photo)', level: 'Proficient', experience: 'Digital UI & Graphics', categoryTag: 'Design' },
    ],
  },
  {
    id: 'languages-spoken',
    name: 'Languages',
    iconName: 'Globe',
    description: 'International communication',
    skills: [
      { name: 'English', level: 'C2 Proficient / C1 Spoken', experience: 'Certified (TAA)', categoryTag: 'Fluent' },
      { name: 'Turkish', level: 'Native', experience: 'Mother Tongue', categoryTag: 'Native' },
      { name: 'Italian', level: 'A1 Basic', experience: 'Living in Torino', categoryTag: 'Basic' },
    ],
  },
];
