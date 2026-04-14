export interface Course {
  code: string;
  name: string;
  description: string;
}

export const courses: Course[] = [
  {
    code: 'MEGN 417',
    name: 'Vehicle Dynamics & Powertrain Systems',
    description: 'Advanced vehicle systems analysis with simulation-based and hardware-in-the-loop components.',
  },
  {
    code: 'MEGN 441',
    name: 'Aerospace Systems Engineering',
    description: 'Systems engineering methodology applied to aerospace mission design and operations.',
  },
  {
    code: 'MEGN 300/301',
    name: 'Automation & Instrumentation',
    description: 'Programming, hardware interface, and measurement systems for mechanical engineers.',
  },
  {
    code: 'EDNS 491/492',
    name: 'Capstone Design',
    description: 'Year-long industry-sponsored senior design with emphasis on professional practice and engineering character.',
  },
  {
    code: 'MEGN 315',
    name: 'Mechanical Integration & Design',
    description: 'Integrated design projects connecting thermodynamics, fluids, and mechanics of materials.',
  },
  {
    code: 'EDNS 151',
    name: 'IDEAS',
    description: 'Innovation and Discovery in Engineering, Arts, and Sciences — interdisciplinary first-year design thinking.',
  },
];
