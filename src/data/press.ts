export interface PressOutlet {
  name: string;
  url?: string;
  // Optional sortable date for "most recent press" pick.
  sortDate?: string;
  // Headline shown in LatestStrip; falls back to outlet name if absent.
  headline?: string;
}

export const outlets: PressOutlet[] = [
  {
    name: 'Engineering Unleashed (Kern Family Foundation)',
    url: 'https://engineeringunleashed.com/keen-rising-star-adam-duran',
    sortDate: '2026-07-01',
    headline: 'Adam Duran: 2026 National KEEN Rising Star',
  },
  {
    name: 'Mines Newsroom',
    url: 'https://www.minesnewsroom.com/news/mines-acc-team-named-first-year-champions-battery-workforce-challenge',
    sortDate: '2024-06-15',
    headline: 'Mines, ACC team named first-year champions of Battery Workforce Challenge',
  },
  {
    name: 'PR Newswire',
    url: 'https://www.prnewswire.com/news-releases/battery-workforce-challenge-names-year-one-champion-teams-302141954.html',
    sortDate: '2024-06-10',
    headline: 'Battery Workforce Challenge names Year One champion teams',
  },
  {
    name: 'Battery Tech Online',
    url: 'https://www.batterytechonline.com/design-manufacturing/battery-workforce-challenge-declares-first-year-champion-teams',
    sortDate: '2024-06-12',
    headline: 'Battery Workforce Challenge declares first-year champion teams',
  },
  {
    name: 'Business Wire',
    url: 'https://www.businesswire.com/news/home/20191113005026/en/Five-Companies-Selected-to-Join-GCxN-Cleantech-Accelerator',
    sortDate: '2019-11-13',
    headline: 'Five Companies Selected to Join GCxN Cleantech Accelerator',
  },
  {
    name: 'GlobeNewswire',
    url: 'https://www.globenewswire.com/news-release/2018/09/20/1574024/0/en/Shell-and-NREL-Launch-Cleantech-Incubator-Shell-GameChanger-Accelerator-Powered-by-NREL.html',
    sortDate: '2018-09-20',
    headline: 'Shell and NREL launch GCxN cleantech incubator',
  },
  { name: 'Scientific American' },
  { name: 'CleanTechnica' },
];
