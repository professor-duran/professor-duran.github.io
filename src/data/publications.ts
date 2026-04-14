export interface Publication {
  year: number;
  authors: string;
  title: string;
  venue: string;
}

export const publications: Publication[] = [
  {
    year: 2025,
    authors: 'Mistry, A., Brodsky, P., Brickey, A., Duran, A., et al.',
    title: 'Not-So-Quick and Not-So-Dirty Solutions to Decarbonize Off-Road Vehicles.',
    venue: 'ACS Energy Letters, 10, 5322-5327.',
  },
  {
    year: 2024,
    authors: 'Brucker, A., Duran, A., Sullivan, P., Mistry, A.',
    title: 'Electrifying Off-Road Vehicles: Is 1000 [Wh/kg] Enough?',
    venue: 'ACS Energy Letters, 9(8), 4053-4058.',
  },
  {
    year: 2026,
    authors: 'Duran, A.',
    title: 'The Teaching Workload Index: A Composite Metric for Equitable Faculty Load Assessment.',
    venue: 'Journal of Engineering Education (in preparation).',
  },
  {
    year: 2026,
    authors: 'Duran, A.',
    title: 'Book chapter on Engineering Ethics.',
    venue: '(forthcoming).',
  },
  {
    year: 2021,
    authors: 'Miller, E. and Duran, A.',
    title: 'A Deterministic Multivariate Clustering Method for Drive Cycle Generation from In-Use Vehicle Data.',
    venue: 'SAE Technical Paper 2021-01-0395.',
  },
  {
    year: 2018,
    authors: 'Duran, A., Phillips, C., Perr-Sauer, J., Kelly, K., Konan, A.',
    title: 'Leveraging Big Data Analysis Techniques for US Vocational Vehicle Drive Cycle Characterization, Segmentation, and Development.',
    venue: 'SAE Technical Paper 2018-01-1199.',
  },
  {
    year: 2017,
    authors: 'Muratori, M., Holden, J., Lammert, M., Duran, A., et al.',
    title: 'Potentials for Platooning in U.S. Highway Freight Transport.',
    venue: 'SAE International Journal of Commercial Vehicles, 10(1).',
  },
];

export const pubStats = {
  publications: '30+',
  citations: '1,006',
  yearsActive: '18',
};
