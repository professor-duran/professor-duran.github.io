export interface Framework {
  name: string;
  acronym: string;
  description: string;
}

export const frameworks: Framework[] = [
  {
    name: 'Experiential Mastery-Based Learning',
    acronym: 'EMBL',
    description: 'A pedagogical framework for structuring engineering courses around demonstrated mastery of authentic competencies rather than points-based assessment. EMBL integrates experiential learning progressions with transparent rubrics that mirror professional practice standards. Currently the basis of my doctoral research.',
  },
  {
    name: 'Teaching Workload Index',
    acronym: 'TWI',
    description: 'A composite metric for equitable faculty teaching load assessment that normalizes across enrollment, prep type, lab vs. lecture, coordination burden, and unique preps. Designed to give department heads defensible, data-driven tools for resource allocation and new-hire justification. Paper in preparation for the Journal of Engineering Education.',
  },
  {
    name: 'Experiential Program Incubator',
    acronym: 'EPI',
    description: 'An institutional model for launching and scaling new experiential engineering education programs. EPI provides a structured pathway from concept through pilot to sustained operation, addressing the resource, governance, and assessment challenges that typically prevent innovative programs from reaching scale.',
  },
  {
    name: 'Mastery Evidence & Skill Assessment',
    acronym: 'MESA',
    description: 'A research methodology for measuring learning outcomes in mastery-based engineering courses. MESA provides the empirical backbone for validating the EMBL framework through multi-instrument assessment of student competency development over time.',
  },
];
