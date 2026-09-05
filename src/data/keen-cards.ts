// KEEN Engineering Unleashed activity cards authored by Adam W. Duran.
// Source of truth: https://engineeringunleashed.com/members/5952
// To add a card: fill in id, headline, subhead, tags, and the full card
// URL is auto-derived from id as https://engineeringunleashed.com/card/{id}.
//
// Inclusion rules (applied 2026-09-04 against the exported "My Cards" list):
//   - Published cards only. Drafts are excluded, including #6211 "Expanding
//     VIPER to a Comprehensive Experiential Learning Ecosystem".
//   - Adam must be a listed author. The export also contains cards belonging to
//     other Mines faculty (Haun, Prado, Brodsky, Kuska, Bernal and others);
//     those are not his and are excluded.
//   - #6213 is co-authored (Frances Zhu, Adam Duran, Polina Brodsky and others).
//     Every other entry below is sole-authored.
// Ordered newest first by card id.

export interface KeenCard {
  id: string;
  headline: string;  // Part of title before the colon, or the whole title
  subhead?: string;  // Part of title after the colon, if applicable
  tags: string[];
}

export const keenCards: KeenCard[] = [
  {
    id: '6795',
    headline: 'From Lab to Market',
    subhead: 'IP, Licensing, and the Tech-to-Market Path',
    tags: ['Entrepreneurial Mindset', 'Tech-to-Market', 'IP'],
  },
  {
    id: '6794',
    headline: 'Responsible by Design',
    subhead: 'Ethical Reasoning and Professional Character',
    tags: ['Engineering Character', 'Ethics'],
  },
  {
    id: '6793',
    headline: 'See the Whole System',
    subhead: 'Feedback Loops and Second-Order Effects',
    tags: ['Systems Thinking', 'Design Process'],
  },
  {
    id: '6792',
    headline: 'Make Them Care',
    subhead: 'Pitching and Storytelling with Engineering Data',
    tags: ['Communication', 'Entrepreneurial Mindset'],
  },
  {
    id: '6791',
    headline: 'Make the Numbers Work',
    subhead: 'Cost, Price, and the Business Case',
    tags: ['Entrepreneurial Mindset', 'Business Case'],
  },
  {
    id: '6790',
    headline: 'Get Out of the Building',
    subhead: 'Customer Discovery and Market Validation',
    tags: ['Entrepreneurial Mindset', 'Customer Discovery'],
  },
  {
    id: '6789',
    headline: 'Build to Learn',
    subhead: 'Rapid Prototyping and the Minimum Viable Prototype',
    tags: ['Prototyping', 'Design Process'],
  },
  {
    id: '6788',
    headline: 'Storming to Performing',
    subhead: 'Building and Repairing Engineering Teams',
    tags: ['Teaming', 'Project Management'],
  },
  {
    id: '6550',
    headline: 'Take It Apart to Put It Together',
    subhead: 'Reverse Engineering as a Discovery Engine for Connections and Creativity',
    tags: ['Curiosity', 'Reverse Engineering', 'Design Process'],
  },
  {
    id: '6549',
    headline: 'Dig to the Root',
    subhead: 'The 5 Whys for Root-Cause Curiosity',
    tags: ['Curiosity', 'Root-Cause Analysis'],
  },
  {
    id: '6213',
    headline: 'Experiential Learning Ecosystem at Colorado School of Mines',
    tags: ['Experiential Learning', 'Program Design', 'Co-authored'],
  },
  {
    id: '6212',
    headline: 'From Assistants to Innovators',
    subhead: 'Structuring Undergraduate Research for Value Creation',
    tags: ['Undergraduate Research', 'Value Creation', 'Experiential Learning'],
  },
  {
    id: '6073',
    headline: 'Beyond the Grade',
    subhead: 'Authentic Assessment',
    tags: ['Authentic Assessment'],
  },
  {
    id: '6038',
    headline: 'Mastery at Scale',
    subhead: 'AI-Augmented Experiential Learning for Engineering Education',
    tags: ['AI Pedagogy', 'Mastery-Based Assessment', 'Experiential Learning'],
  },
  {
    id: '6037',
    headline: 'Engineer First, AI Second',
    subhead: 'A Framework for AI-Augmented Engineering Thinking',
    tags: ['AI Pedagogy', 'Engineering Thinking'],
  },
  {
    id: '6036',
    headline: 'Start with the Stakeholder',
    subhead: 'From Client Needs to Engineering Action',
    tags: ['Problem Definition', 'Stakeholders', 'Requirements'],
  },
  {
    id: '6035',
    headline: 'Gate by Gate',
    subhead: 'Navigating Design Reviews from Proposal to Final Delivery',
    tags: ['Design Reviews', 'Project Management'],
  },
  {
    id: '6034',
    headline: 'Ship, Reflect, Repeat',
    subhead: 'Hybrid-Agile Project Management for Engineering Design',
    tags: ['Project Management', 'Agile'],
  },
  {
    id: '6033',
    headline: 'Test Before You Trust',
    subhead: 'Integration, Verification, and Test Planning for Engineering Design',
    tags: ['Test & Verification', 'Integration'],
  },
  {
    id: '6032',
    headline: 'After the Handoff',
    subhead: 'Designing for Operations, Maintenance, and End of Life',
    tags: ['Lifecycle', 'Operations', 'Sustainability'],
  },
  {
    id: '6031',
    headline: 'Before You Build',
    subhead: 'AI-Assisted Requirements Development for Engineering Design',
    tags: ['AI Pedagogy', 'Requirements'],
  },
  {
    id: '6030',
    headline: 'From Requirements to Reality',
    subhead: 'Concept Generation, Trade Studies, and Design Down-Selection',
    tags: ['Concept Generation', 'Trade Studies', 'Design Process'],
  },
  {
    id: '6027',
    headline: 'Ask First, Design Second',
    subhead: 'The 5Ws+H for Engineering Problem Definition',
    tags: ['Problem Definition', 'Design Process'],
  },
  {
    id: '6026',
    headline: 'Beyond the Blueprint',
    subhead: "Arguing for Engineering's Broader Impact",
    tags: ['Engineering Character', 'Broader Impact'],
  },
  {
    id: '6017',
    headline: 'From Opportunity to Execution',
    subhead: 'Building Value Propositions with FDVSE + TBL',
    tags: ['Entrepreneurial Mindset', 'Value Proposition'],
  },
  {
    id: '5293',
    headline: 'Fail Faster, Build Better',
    subhead: 'AI-Driven Test Planning',
    tags: ['AI Pedagogy', 'Test & Verification'],
  },
  {
    id: '5092',
    headline: 'Driving Down Drag',
    subhead: 'How Super Trucks Combine Technology and Human Behavior to Save Fuel',
    tags: ['Case Study', 'Vehicle Systems', 'Fuel Economy'],
  },
];

export const PROFILE_URL = 'https://engineeringunleashed.com/members/5952';
export const CARD_URL_PREFIX = 'https://engineeringunleashed.com/card/';
