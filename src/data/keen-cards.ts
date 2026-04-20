// KEEN Engineering Unleashed activity cards authored by Adam W. Duran.
// Source of truth: https://engineeringunleashed.com/members/5952
// To add a card: fill in id, headline, subhead, tags, and the full card
// URL is auto-derived from id as https://engineeringunleashed.com/card/{id}.

export interface KeenCard {
  id: string;
  headline: string;  // Part of title before the colon, or the whole title
  subhead?: string;  // Part of title after the colon, if applicable
  tags: string[];
}

export const keenCards: KeenCard[] = [
  {
    id: '6037',
    headline: 'Engineer First, AI Second',
    subhead: 'A Framework for AI-Augmented Engineering Thinking',
    tags: ['AI Pedagogy', 'Engineering Thinking'],
  },
  {
    id: '6038',
    headline: 'Mastery at Scale',
    subhead: 'AI-Augmented Experiential Learning for Engineering Education',
    tags: ['AI Pedagogy', 'Mastery-Based Assessment', 'Experiential Learning'],
  },
  {
    id: '6031',
    headline: 'Before You Build',
    subhead: 'AI-Assisted Requirements Development for Engineering Design',
    tags: ['AI Pedagogy', 'Requirements'],
  },
  {
    id: '5293',
    headline: 'Fail Faster, Build Better',
    subhead: 'AI-Driven Test Planning',
    tags: ['AI Pedagogy', 'Test & Verification'],
  },
  {
    id: '6027',
    headline: 'Ask First, Design Second',
    subhead: 'The 5Ws+H for Engineering Problem Definition',
    tags: ['Problem Definition', 'Design Process'],
  },
  {
    id: '6036',
    headline: 'Start with the Stakeholder',
    subhead: 'From Client Needs to Engineering Action',
    tags: ['Problem Definition', 'Stakeholders', 'Requirements'],
  },
  {
    id: '6030',
    headline: 'From Requirements to Reality',
    subhead: 'Concept Generation, Trade Studies, and Design Down-Selection',
    tags: ['Concept Generation', 'Trade Studies', 'Design Process'],
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
    id: '6073',
    headline: 'Beyond the Grade',
    subhead: 'Authentic Assessment',
    tags: ['Authentic Assessment'],
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
    id: '5092',
    headline: 'Driving Down Drag',
    subhead: 'How Super Trucks Combine Technology and Human Behavior to Save Fuel',
    tags: ['Case Study', 'Vehicle Systems', 'Fuel Economy'],
  },
];

export const PROFILE_URL = 'https://engineeringunleashed.com/members/5952';
export const CARD_URL_PREFIX = 'https://engineeringunleashed.com/card/';
