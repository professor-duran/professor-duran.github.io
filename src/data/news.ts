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
    date: 'Fall 2026',
    sortDate: '2026-08-15',
    headline: 'Selected for KEEN EM-FUEL, the national faculty leadership program',
    url: 'https://engineeringunleashed.com',
    html: 'Selected for <a href="https://engineeringunleashed.com" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">KEEN EM-FUEL</a> (Entrepreneurial Mindset for Future University Engineering Leaders), a competitive national program that prepares engineering faculty for expanded roles of institutional influence across the Kern Entrepreneurial Engineering Network. Cohort begins Fall 2026.',
  },
  {
    date: 'Summer 2026',
    sortDate: '2026-07-01',
    headline: 'Named a 2026 National KEEN Rising Star',
    url: 'https://www.engineeringunleashed.com/content/keen-rising-stars',
    html: 'Named a 2026 <a href="https://www.engineeringunleashed.com/content/keen-rising-stars" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">National KEEN Rising Star</a>, one of three faculty selected nationally by the KEEN Awards Committee, honoring those who have gone above and beyond to equip undergraduate engineers with an entrepreneurial mindset to create personal, economic, and societal value for others. The award includes a Kern Family Foundation grant to Colorado School of Mines and recognition at the KEEN National Conference.',
  },
  {
    date: 'Summer 2026',
    sortDate: '2026-06-15',
    headline: 'Selected as a KEEN Engineering Unleashed Fellow (Fall 2026 cohort)',
    url: 'https://circle.engineeringunleashed.com/fellows',
    html: 'Selected as a <a href="https://circle.engineeringunleashed.com/fellows" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">KEEN Engineering Unleashed Fellow</a>, an annual competitive award supporting Fellows as advocates for the entrepreneurial mindset through funded project work. Fellowship begins Fall 2026.',
  },
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
    html: 'Named <a href="https://www.mines.edu/trefny-center/" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">Mines Trefny Center</a> Engineering Learning Fellow and <a href="https://engineeringunleashed.com/community-catalysts" target="_blank" rel="noopener" class="text-gold no-underline hover:underline">Kern Family Foundation Community Catalyst</a>, Cohort 13, joining a small national group of faculty who curate Engineering Unleashed content and connect educators across the KEEN network.',
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
