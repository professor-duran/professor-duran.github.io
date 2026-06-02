export interface NewsItem {
  date: string;
  // Sortable ISO date for "most recent" picks. Roughly approximate when only season is known.
  sortDate: string;
  html: string;
  // Plain-text headline for the LatestStrip; falls back to first sentence if absent.
  headline?: string;
  url?: string;
}

export const news: NewsItem[] = [
  {
    date: 'Spring 2026',
    sortDate: '2026-03-01',
    headline: 'Selected for DOE EcoCAR Innovation Challenge as Co-PI (~$520K / 4 yr)',
    url: 'https://avtcseries.org/next-avtc-series/',
    html: 'Selected for <a href="https://avtcseries.org/next-avtc-series/" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">DOE EcoCAR Innovation Challenge</a> as Co-PI, one of a limited number of institutions nationwide. Approximately $520K over four years.',
  },
  {
    date: 'Spring 2026',
    sortDate: '2026-02-15',
    headline: 'Selected for KEEN Crescendo Program (national cohort)',
    url: 'https://engineeringunleashed.com',
    html: 'Selected as part of a small group of nationally recognized experts for the <a href="https://engineeringunleashed.com" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">KEEN Crescendo Program</a>.',
  },
  {
    date: 'Spring 2026',
    sortDate: '2026-01-20',
    headline: 'New course launch: EBGN 599 Financial Engineering',
    html: 'New course launch: EBGN 599 Financial Engineering, an accelerated 8-week online graduate course taught as an independent study.',
  },
  {
    date: '2025',
    sortDate: '2025-09-01',
    headline: 'Named Mines Trefny Center Engineering Learning Fellow & Kern Family Foundation Community Catalyst',
    url: 'https://www.mines.edu/trefny-center/',
    html: 'Named <a href="https://www.mines.edu/trefny-center/" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">Mines Trefny Center</a> Engineering Learning Fellow and <a href="https://www.kffdn.org/" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">Kern Family Foundation</a> Community Catalyst, Cohort 13.',
  },
  {
    date: '2025',
    sortDate: '2025-11-01',
    headline: 'Co-authored paper in ACS Energy Letters on decarbonizing off-road vehicles',
    url: 'https://doi.org/10.1021/acsenergylett.5c02459',
    html: 'Co-authored paper in <a href="https://doi.org/10.1021/acsenergylett.5c02459" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">ACS Energy Letters</a> on decarbonizing off-road vehicles.',
  },
  {
    date: '2024',
    sortDate: '2024-06-01',
    headline: 'DOE Battery Workforce Challenge: 1st place nationally (Year 1)',
    url: 'https://www.minesnewsroom.com/news/mines-acc-team-named-first-year-champions-battery-workforce-challenge',
    html: '<a href="https://www.minesnewsroom.com/news/mines-acc-team-named-first-year-champions-battery-workforce-challenge" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">DOE Battery Workforce Challenge: 1st place nationally</a> in the inaugural Year 1 competition, with prize money awarded to the student team.',
  },
];
