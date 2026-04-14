export interface Course {
  code: string;
  name: string;
  description: string;
  crossList?: string;
  semesters?: string;
  developed?: boolean;
}

export const courses: Course[] = [
  {
    code: 'MEGN 417',
    name: 'Vehicle Dynamics & Powertrain Systems',
    description: 'Advanced vehicle systems analysis covering suspension, tire, and powertrain dynamics with simulation-based and hardware-in-the-loop components.',
    crossList: 'MEGN 527 (Graduate)',
    semesters: 'F22, F23, F24, F25',
    developed: true,
  },
  {
    code: 'MEGN 455',
    name: 'Aerospace Systems Engineering',
    description: 'Systems engineering methodology applied to aerospace vehicle design. Uses a live SBIR Phase I white paper format mirroring federal proposal practice.',
    semesters: 'F22, F23, F24',
    developed: true,
  },
  {
    code: 'MEGN 456',
    name: 'Space Operations & Mission Design',
    description: 'Semester-long NASA RFP mission design project covering orbital mechanics, sensor trade studies, and full systems engineering documentation.',
    semesters: 'S23, S24, S25',
    developed: true,
  },
  {
    code: 'MEGN 566',
    name: 'Combustion',
    description: 'Online graduate elective covering combustion fundamentals, flame dynamics, and emissions. Iteratively redesigned across two offerings for asynchronous learners.',
    semesters: 'F23, F24',
    developed: true,
  },
  {
    code: 'MEGN 301',
    name: 'Mechanical Integration & Design',
    description: 'Integrated design projects connecting thermodynamics, fluids, and mechanics of materials into cohesive mechanical systems.',
    semesters: 'SSI25, S26, SSI26',
    developed: true,
  },
  {
    code: 'MEGN 300',
    name: 'Instrumentation & Automation',
    description: 'Measurement systems, signal processing, actuator control, and data acquisition for mechanical engineers. Course Coordinator, Spring 2025.',
    semesters: 'S25 (Coordinator)',
  },
  {
    code: 'MEGN 200',
    name: 'Intro to ME: Programming & Hardware Interface',
    description: 'Introductory programming and hardware interface for mechanical engineers. Covers programming fundamentals, sensor integration, and embedded systems basics.',
    semesters: 'F25',
  },
  {
    code: 'EBGN 599A',
    name: 'Financial Engineering for Engineers',
    description: 'Graduate course developing quantitative finance skills in Python, including walk-forward validation, regime detection, and tail hedging.',
    semesters: 'S26',
    developed: true,
  },
  {
    code: 'EDS 491/492',
    name: 'Senior Capstone Design',
    description: 'Year-long industry-sponsored senior design sequence with emphasis on professional practice, engineering character, and authentic assessment.',
    semesters: 'F22-S26 (continuous)',
  },
];
