import nlFedqueryDiagram from './architecture_diagrams/nl-fedquery.png';
import videocallDiagram from './architecture_diagrams/videocall.png';
const projects = [

  {
    id: 'federated-query-engine',
    category: 'Data',
    title: 'Federated Query Engine',
    tech: ['Python', 'PostgreSQL', 'MongoDB', 'AWS EC2', 'S3', 'IAM'],

    motivation: 'While working with multiple databases, I became curious about how systems handle querying across different data sources. This curiosity about multi-system query execution led me to explore and build a federated query engine.',

    description: 'Cloud-native federated query system enabling unified querying across heterogeneous databases with schema abstraction and distributed execution.',

    problem: 'Applications often store data across multiple databases with different schemas and query languages, making cross-database querying complex, inefficient, and hard to scale.',

    approach: 'Designed a modular query pipeline with parsing, planning, ranking, and execution stages. Implemented schema graph construction, join path inference, and database-specific adapters to translate and execute queries across PostgreSQL and MongoDB.',

    systemDesign: 'Layered architecture with query parser, optimizer, schema graph engine, and distributed executor coordinating cross-database operations with cost-aware planning.',

    github: 'https://github.com/shrinidhidbhat09/federated-query-engine',

    architecture: nlFedqueryDiagram
  },

  {
    id: 'tdra-security-analysis',
    category: 'Security',
    title: 'Temporal Differential Reachability Analysis (TDRA) [Major Project]',
    tech: ['Python', 'Java', 'NetworkX', 'Soot', 'JavaParser', 'PyDriller'],

    motivation: 'In our group, we observed that existing static analysis tools focus only on a single version of code and fail to capture how security risks evolve across commits. This motivated us to explore how code changes impact execution paths and security at a structural level.',

    description: 'A static analysis framework that detects security risks introduced by code changes by analyzing execution path differences across commits (Group Project – 4 members, Ongoing).',

    problem: 'Traditional SAST tools analyze fixed snapshots and cannot detect whether a specific commit introduces new exploitable paths or weakens existing security checks.',

    approach: 'Developed a commit-level analysis pipeline that extracts consecutive code versions, builds ASTs, constructs program graphs (CFG + Call Graph), and performs reachability analysis between ENTRY and SINK nodes. Compared versions to detect new attack paths and reduced validation guards.',

    systemDesign: 'Graph-based analysis system with commit differencing, AST extraction, node classification (ENTRY, SINK, GUARD), reachability analysis, and quantitative risk scoring.',

    github: '',

    architecture: null
  },

  {
    id: 'one-to-one-video-calling',
    category: 'Communication',
    title: 'One-to-One Video Calling Application',
    tech: ['Flutter', 'Django', 'PostgreSQL', 'Agora SDK', 'BLoC'],

    motivation: 'I wanted to understand how real-time systems handle communication under different app states and network conditions, especially how reliability is maintained in production-grade video calling systems.',

    description: 'Real-time video communication system with robust session handling across app states.',

    problem: 'Maintaining reliable video communication across network fluctuations and different app lifecycle states (foreground, background, terminated).',

    approach: 'Implemented BLoC-based state management, token lifecycle handling, and retry strategies with exponential backoff along with backend-driven session control.',

    systemDesign: 'Client-server architecture with real-time signaling, Agora media pipeline, session persistence, and multi-state lifecycle handling.',

    github: 'https://github.com/shrinidhidbhat09/one-to-one-video-calling',

    architecture: videocallDiagram
  },

  {
    id: 'blinkeasy',
    category: 'Vision',
    title: 'BlinkEasy',
    tech: ['Flutter', 'MediaPipe', 'Flask', 'Firebase'],

    motivation: 'I was interested in exploring how computer vision can be used for practical health-related applications, especially using real-time inference on mobile devices.',

    description: 'Real-time blink detection system for eye health monitoring.',

    problem: 'Users often experience reduced blink rates during prolonged screen usage, leading to eye strain.',

    approach: 'Used MediaPipe for real-time facial landmark detection and blink rate computation with adaptive alerting.',

    systemDesign: 'Edge-based ML inference with cloud synchronization and intelligent notification scheduling.',

    github: 'https://github.com/shrinidhidbhat09/blinkeasy',

    architecture: 'blinkeasy.png'
  },

  {
    id: 'movieshub',
    category: 'User',
    title: 'MoviesHub',
    tech: ['Flutter', 'Firebase'],

    motivation: 'I built this project to learn and apply concepts like BLoC state management, API integration, and real-time data handling in a complete application setup.',

    description: 'Movie discovery and watchlist application with real-time synchronization.',

    problem: 'Users need a simple way to track and discover movies across devices.',

    approach: 'Built a reactive UI with search, auto-suggestions, and Firebase-backed watchlist functionality.',

    systemDesign: 'Offline-first client architecture with caching and cloud synchronization.',

    github: 'https://github.com/shrinidhidbhat09/movieshub',

    architecture: 'movieshub.png'
  },

  {
    id: 'smart-checklist-reminder',
    category: 'User',
    title: 'Smart Checklist Reminder',
    tech: ['Flutter'],

    motivation: 'I noticed that people often forget tasks when they are in a hurry. As part of exploring design thinking, I wanted to build a system that improves task engagement through better interaction and timing.',

    description: 'Behavior-driven checklist system to improve task completion rates.',

    problem: 'Traditional checklist apps suffer from low engagement and high task drop-off rates.',

    approach: 'Applied behavioral design principles with progressive disclosure and contextual feedback.',

    systemDesign: 'Local-first adaptive UI with intelligent scheduling based on user behavior.',

    github: 'https://github.com/shrinidhidbhat09/smart-checklist-reminder',

    architecture: 'smart-checklist.png'
  }

];

export default projects;