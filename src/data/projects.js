import nlFedqueryDiagram from './architecture_diagrams/nl-fedquery.png';
import videocallDiagram from './architecture_diagrams/videocall.png';

const projects = [
 
  {
    id: 'federated-query-engine',
    category: 'Data',
    title: 'Federated Query Engine',
    tech: ['Python', 'PostgreSQL', 'MongoDB', 'HTML', 'CSS', 'JS'],
    description: ': A cloud-native query engine built on AWS (EC2,S3,IAM) featuring a modular parsing and execution pipeline that unifies data retrieval across MongoDB Atlas and Amazon RDS.',
    problem: 'Querying across heterogeneous data sources with different schemas and performance characteristics.',
    approach: 'Built a layered architecture with parsing, planning, and execution phases, using adapters for different database types.',
    systemDesign: 'Modular pipeline with query parsing, optimization, and distributed execution across multiple data stores.',
    github: 'https://github.com/shrinidhidbhat09/federated-query-engine',
    
    architecture: nlFedqueryDiagram

  },
   {
    id: 'one-to-one-video-calling',
    category: 'Communication',
    title: 'One-to-One Video Calling Application',
    tech: ['Flutter', 'Django', 'PostgreSQL', 'Agora SDK', 'BLoC'],
    description: 'Real-time communication system with token lifecycle handling, retries, and multi-state support.',
    problem: 'Building a reliable video calling system that handles network instability and maintains connection quality.',
    approach: 'Implemented BLoC pattern for state management, token-based authentication, and retry mechanisms with exponential backoff.',
    systemDesign: 'Client-server architecture with real-time signaling, session management, and media pipeline optimization.',
    github: 'https://github.com/shrinidhidbhat09/one-to-one-video-calling',
    
    architecture: videocallDiagram
  },
  {
    id: 'blinkeasy',
    category: 'Vision',
    title: 'BlinkEasy',
    tech: ['Flutter', 'MediaPipe', 'Flask', 'Firebase'],
    description: 'Computer vision-based blink detection system.',
    problem: 'Creating an accessible reminder system using natural human-computer interaction.',
    approach: 'Integrated MediaPipe for real-time blink detection with Firebase for cross-device synchronization.',
    systemDesign: 'Edge computing with local ML inference, cloud synchronization, and adaptive notification scheduling.',
    github: 'https://github.com/shrinidhidbhat09/blinkeasy',
    architecture: 'https://via.placeholder.com/720x420.png?text=Architecture+Diagram'
  },
  {
    id: 'movieshub',
    category: 'User',
    title: 'MoviesHub',
    tech: ['Flutter', 'Firebase'],
    description: 'Movie discovery app with search and watchlist.',
    problem: 'Building an intuitive media discovery experience with personalized recommendations.',
    approach: 'Implemented clean UI patterns with Firebase for real-time data sync and user preferences.',
    systemDesign: 'Client-side caching with cloud synchronization, reactive UI updates, and offline-first architecture.',
    github: 'https://github.com/shrinidhidbhat09/movieshub',
    architecture: 'https://via.placeholder.com/720x420.png?text=Architecture+Diagram'
  },
  {
    id: 'smart-checklist-reminder',
    category: 'User',
    title: 'Smart Checklist Reminder',
    tech: ['Flutter'],
    description: 'Improves task engagement using better interaction design.',
    problem: 'Increasing task completion rates through improved user experience and engagement.',
    approach: 'Applied behavioral design principles with progressive disclosure and contextual feedback.',
    systemDesign: 'Local-first architecture with intelligent scheduling and adaptive UI based on user behavior patterns.',
    github: 'https://github.com/shrinidhidbhat09/smart-checklist-reminder',
    architecture: 'https://via.placeholder.com/720x420.png?text=Architecture+Diagram'
  }
];

export default projects;
