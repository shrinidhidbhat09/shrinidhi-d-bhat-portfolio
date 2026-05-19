import nlFedqueryDiagram from './architecture_diagrams/nl-fedquery.png';
import videocallDiagram from './architecture_diagrams/videocall.png';
import tdraDiagram from './architecture_diagrams/tdra.png';
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

    motivation: 'The  existing static analysis tools evaluate code in isolated snapshots and fail to capture how security risks evolve across commits. This led us to explore how changes between versions introduce new execution paths and potential vulnerabilities.',

    description: 'A commit-level analysis framework that compares consecutive code versions to identify newly introduced or weakened security paths based on execution reachability (Group Project – 4 members, Ongoing).',

    problem: 'Traditional SAST tools analyze fixed snapshots and cannot detect whether a specific commit introduces new exploitable paths or weakens existing security checks.',

    approach: 'Developed a commit-level analysis pipeline that extracts consecutive code versions, builds ASTs, constructs program graphs (CFG + Call Graph), and performs reachability analysis between ENTRY and SINK nodes. Compared versions to detect new attack paths and reduced validation guards.',

    systemDesign: 'Graph-based analysis system with commit differencing, AST extraction, node classification (ENTRY, SINK, GUARD), reachability analysis, and quantitative risk scoring.',

    github: '',

    architecture: tdraDiagram
  },

  {
    id: 'one-to-one-video-calling',
    category: 'Communication',
    title: 'One-to-One Video Calling Application',
    tech: ['Flutter', 'Django', 'PostgreSQL', 'Agora SDK', 'BLoC'],

    motivation: 'I wanted to understand how real-time systems handle communication under different app states and network conditions, especially how reliability is maintained in production-grade video calling systems.',

    description: 'Real-time video communication system with robust session handling across app states.',

   

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

    motivation: 'Experiencing dry eyes during extended screen time led me to think about the problem from a non-medical perspective and explore how computer vision could be used to build a practical solution.',

    description: 'Real-time blink detection system for eye health monitoring.',

    problem: 'Users often experience reduced blink rates during prolonged screen usage, leading to eye strain.',

    approach: 'Used MediaPipe for real-time facial landmark detection and blink rate computation with adaptive alerting.',

    systemDesign: 'Client-server architecture with real-time blink detection and alert handling.',

    github: 'https://github.com/shrinidhidbhat09/blinkeasy',

  
  },

  {
    id: 'movieshub',
    category: 'User',
    title: 'MoviesHub',
    tech: ['Flutter', 'Firebase'],

    motivation: 'I built this project to learn and apply concepts like BLoC state management, API integration, and real-time data handling in a complete application setup.',

    description: 'Movie discovery and watchlist application with real-time synchronization.',

    

   problem: 'Built as a learning project to explore BLoC state management and API integration in a Flutter application.',

   systemDesign: 'Simple client-side app with API calls and BLoC-based state management.',

    github: 'https://github.com/shrinidhidbhat09/movieshub',

    
  },

  {
    id: 'smart-checklist-reminder',
    category: 'User',
    title: 'Smart Checklist Reminder',
    tech: ['Flutter'],

    motivation: 'I noticed that people often forget tasks when they are in a hurry. As part of exploring design thinking, I wanted to build a system that improves task engagement through better interaction and timing.',

    description: 'Behavior-driven checklist system to improve task completion rates.',

    problem: 'Traditional checklist apps suffer from low engagement and high task drop-off rates.',

    approach: 'Designed simple interactions to make it easier for users to manage and complete tasks.',

systemDesign: 'Frontend-only app with basic task handling and reminder functionality.',

    github: 'https://github.com/shrinidhidbhat09/smart-checklist-reminder',

    architecture: 'smart-checklist.png'
  }

];

export default projects;