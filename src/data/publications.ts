export interface Publication {
  year: number;
  authors: string;
  title: string;
  venue: string;
  doi?: string;
  note?: string;
  status?: 'published' | 'in_press' | 'in_preparation';
}

export const publications: Publication[] = [
  {
    year: 2026,
    authors: 'Duran, A.',
    title: 'Hydrogen Dreams, False Claims: The Ethical Collapse of Nikola Corporation.',
    venue: 'Book chapter case study, Elgar Publishing, 2026.',
  },
  {
    year: 2025,
    authors: 'Mistry, A.N., Brodsky, P., Brickey, A.J., Duran, A., Mozur, E., Rajasegar, R., et al.',
    title: 'Not-So-Quick and Not-So-Dirty Solutions to Decarbonize Off-Road Vehicles.',
    venue: 'ACS Energy Letters, 10(11), 5322-5327.',
    doi: '10.1021/acsenergylett.5c02459',
  },
  {
    year: 2024,
    authors: 'Mistry, A.N., Brodsky, P., Duran, A., Mozur, E., Rajasegar, R., et al.',
    title: 'Electrifying Off-Road Vehicles: Is 1000 Wh/kg Enough?',
    venue: 'ACS Energy Letters, 9(8), 4053-4058.',
    doi: '10.1021/acsenergylett.4c01276',
  },
  {
    year: 2021,
    authors: 'Miller, E. and Duran, A.',
    title: 'A Deterministic Multivariate Clustering Method for Drive Cycle Generation from In-Use Vehicle Data.',
    venue: 'SAE Technical Paper 2021-01-0395.',
    doi: '10.4271/2021-01-0395',
  },
  {
    year: 2018,
    authors: 'Duran, A., Li, K., Kresse, J., and Kelly, K.',
    title: 'Development of 80 and 100 Mile Work Day Cycles Representative of Commercial Pickup and Delivery Operation.',
    venue: 'SAE Technical Paper 2018-01-1192.',
    doi: '10.4271/2018-01-1192',
  },
  {
    year: 2018,
    authors: 'Duran, A., Phillips, C., Perr-Sauer, J., Kelly, K., and Konan, A.',
    title: 'Leveraging Big Data Analysis Techniques for US Vocational Vehicle Drive Cycle Characterization, Segmentation, and Development.',
    venue: 'SAE Technical Paper 2018-01-1199.',
    doi: '10.4271/2018-01-1199',
    note: 'Drive cycles adopted by U.S. EPA in GHG Phase 2 rulemaking.',
  },
  {
    year: 2018,
    authors: 'Lammert, M., Bugbee, B., Hou, Y., Mack, A., Muratori, M., Holden, J., Duran, A., and Swaney, E.',
    title: 'Analysis of Opportunities for Truck Platooning from Telematics Data.',
    venue: 'SAE Technical Paper 2018-01-1083.',
    doi: '10.4271/2018-01-1083',
  },
  {
    year: 2017,
    authors: 'Muratori, M., Holden, J., Lammert, M., Duran, A., et al.',
    title: 'Potentials for Platooning in U.S. Highway Freight Transport.',
    venue: 'SAE International Journal of Commercial Vehicles, 10(1).',
    doi: '10.4271/2017-01-0086',
  },
  {
    year: 2016,
    authors: 'Wood, E., Duran, A., and Kelly, K.',
    title: 'EPA GHG Certification of Medium- and Heavy-Duty Vehicles: Development of Road Grade Profiles Representative of US Controlled Access Highways.',
    venue: 'SAE International Journal of Commercial Vehicles, 9(2), 94-104.',
    doi: '10.4271/2016-01-8017',
  },
  {
    year: 2016,
    authors: 'Marcinkoski, J., Vijayagopal, R., Kast, J., and Duran, A.',
    title: 'Driving an Industry: Medium and Heavy Duty Fuel Cell Electric Truck Component Sizing.',
    venue: 'World Electric Vehicle Journal, 8(1).',
  },
  {
    year: 2015,
    authors: 'Lammert, M., Burton, J., Sindler, P., and Duran, A.',
    title: 'Hydraulic Hybrid and Conventional Parcel Delivery Vehicles\' Measured Laboratory Fuel Economy on Targeted Drive Cycles.',
    venue: 'SAE International Journal of Alternative Powertrains, 4(1).',
    doi: '10.4271/2014-01-2375',
  },
  {
    year: 2014,
    authors: 'Duran, A., Ragatz, A., Prohaska, R., Kelly, K., and Walkowicz, K.',
    title: 'Characterization of In-Use Medium Duty Electric Vehicle Driving and Charging Behavior.',
    venue: 'IEEE International Electric Vehicle Conference (IEVC).',
    doi: '10.1109/IEVC.2014.7056213',
  },
  {
    year: 2014,
    authors: 'Lammert, M., Duran, A., Diez, J., Burton, K., et al.',
    title: 'Effect of Platooning on Fuel Consumption of Class 8 Vehicles Over a Range of Speeds, Following Distances, and Mass.',
    venue: 'SAE International Journal of Commercial Vehicles, 7(2), 626-639.',
    doi: '10.4271/2014-01-2438',
  },
  {
    year: 2013,
    authors: 'Duran, A. and Walkowicz, K.',
    title: 'A Statistical Characterization of School Bus Drive Cycles Collected via Onboard Logging Systems.',
    venue: 'SAE International Journal of Commercial Vehicles, 6(2).',
    doi: '10.4271/2013-01-2400',
  },
  {
    year: 2012,
    authors: 'Duran, A. and Earleywine, M.',
    title: 'GPS Data Filtration Method for Drive Cycle Analysis Applications.',
    venue: 'SAE Technical Paper 2012-01-0743.',
    doi: '10.4271/2012-01-0743',
  },
];

export const worksInProgress: Publication[] = [];

export const pubStats = {
  publications: '30+',
  citations: '1,006',
  hIndex: '17',
  i10Index: '20',
};
