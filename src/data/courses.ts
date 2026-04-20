export interface Course {
  code: string;
  name: string;
  description: string;
  crossList?: string;
  developed?: boolean;
}

export const courses: Course[] = [
  {
    code: 'MEGN 417/527',
    name: 'Vehicle Dynamics',
    description: 'Advanced vehicle systems analysis covering suspension, tire, and powertrain dynamics through calculation, simulation, and experimentation.',
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
    description: 'Mechanical-electrical integration for design. Teams translate subsystem concepts into working prototypes, pairing thermodynamics, fluids, and mechanics of materials with sensors and actuators in hands-on builds.',
    developed: true,
  },
  {
    code: 'MEGN 300',
    name: 'Instrumentation & Automation',
    description: 'Data acquisition, analog and digital filtering, feedback controls, and instrumentation. Signal processing and sensor integration grounded in mechanical systems.',
  },
  {
    code: 'MEGN 200',
    name: 'Intro to ME: Programming & Hardware Interface',
    description: 'Introductory programming in C with hands-on hardware troubleshooting for mechanical engineers. Covers low-level embedded systems work, sensor integration, and the diagnostic skills that bridge code and physical systems.',
  },
  {
    code: 'EBGN 599',
    name: 'Financial Engineering',
    description: 'Accelerated 8-week online graduate course (taught as independent study) developing quantitative finance skills in Python, including walk-forward validation, regime detection, and tail hedging.',
    developed: true,
  },
  {
    code: 'EDS 491/492',
    name: 'Senior Capstone Design',
    description: 'Year-long industry-sponsored senior design sequence walking teams through the full design-build arc: needs analysis, concept selection, preliminary and critical design reviews, fabrication, verification testing, and final delivery. Emphasis on professional practice, engineering character, and authentic assessment.',
  },
];
