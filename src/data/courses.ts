export interface Course {
  code: string;
  name: string;
  description: string;
  crossList?: string;
  developed?: boolean;
}

export const courses: Course[] = [
  {
    code: 'MEGN 417',
    name: 'Vehicle Dynamics & Powertrain Systems',
    description: 'Advanced vehicle systems analysis covering suspension, tire, and powertrain dynamics with simulation-based and hardware-in-the-loop components.',
    crossList: 'MEGN 527 (Graduate)',
    developed: true,
  },
  {
    code: 'MEGN 455',
    name: 'Aerospace Systems Engineering',
    description: 'Systems engineering methodology applied to aerospace vehicle design. Uses an SBIR Phase I-inspired white paper format mirroring federal proposal practice.',
    developed: true,
  },
  {
    code: 'MEGN 456',
    name: 'Space Operations & Mission Design',
    description: 'Semester-long NASA RFP-inspired mission design project covering orbital mechanics, sensor trade studies, and full systems engineering documentation.',
    developed: true,
  },
  {
    code: 'MEGN 566',
    name: 'Combustion',
    description: 'Online graduate elective covering combustion fundamentals, flame dynamics, and emissions. Iteratively redesigned across two offerings for asynchronous learners.',
    developed: true,
  },
  {
    code: 'MEGN 301',
    name: 'Mechanical Integration & Design',
    description: 'Combines mechanical systems with electrical controls, sensors, and actuators in integrated design projects connecting thermodynamics, fluids, and mechanics of materials with hands-on prototyping.',
    developed: true,
  },
  {
    code: 'MEGN 300',
    name: 'Instrumentation & Automation',
    description: 'Combines mechanical systems with electrical controls, sensors, and actuators. Covers measurement systems, signal processing, data acquisition, and system-level instrumentation.',
  },
  {
    code: 'MEGN 200',
    name: 'Intro to ME: Programming & Hardware Interface',
    description: 'Introductory programming in C with hands-on hardware troubleshooting for mechanical engineers. Covers low-level embedded systems work, sensor integration, and the diagnostic skills that bridge code and physical systems.',
  },
  {
    code: 'EBGN 599A',
    name: 'Financial Engineering for Engineers',
    description: 'Accelerated 8-week online graduate course (taught as independent study) developing quantitative finance skills in Python, including walk-forward validation, regime detection, and tail hedging.',
    developed: true,
  },
  {
    code: 'EDS 491/492',
    name: 'Senior Capstone Design',
    description: 'Year-long industry-sponsored senior design sequence with emphasis on professional practice, engineering character, and authentic assessment.',
  },
];
