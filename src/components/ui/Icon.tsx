export type IconName = 'arrow' | 'bulb' | 'code' | 'cloud' | 'ai' | 'layers' | 'grid' | 'rocket' | 'team' | 'retail' | 'heart' | 'factory' | 'finance' | 'education' | 'menu' | 'close'

const paths: Record<IconName, string[]> = {
  arrow: ['M4 12h15', 'm14 7 5 5-5 5'],
  bulb: ['M9 18h6M10 21h4', 'M8 14a6 6 0 1 1 8 0c-1.5 1-1.5 2-1.5 3h-5c0-1 0-2-1.5-3Z', 'M12 2V1M3 5l2 2M19 7l2-2M2 12h2M20 12h2'],
  code: ['m8 7-5 5 5 5', 'm16 7 5 5-5 5', 'm14 4-4 16'],
  cloud: ['M6 18a4 4 0 0 1-1-7.9A6 6 0 0 1 16.5 8a5 5 0 0 1 1.5 10Z'],
  ai: ['m12 2 8 4.5v11L12 22l-8-4.5v-11Z', 'M9 9h6v6H9ZM9 7v2M12 7v2M15 7v2M9 15v2M12 15v2M15 15v2M7 9h2M7 12h2M7 15h2M15 9h2M15 12h2M15 15h2'],
  layers: ['m12 3 10 5-10 5L2 8Z', 'm3 12 9 5 9-5', 'm3 16 9 5 9-5'],
  grid: ['M3 3h6v6H3ZM15 3h6v6h-6ZM3 15h6v6H3ZM15 15h6v6h-6Z'],
  rocket: ['M9 15c-3-3 2-11 11-11 0 9-8 14-11 11Z', 'm9 9-5 1-2 5 6-1M15 15l-1 5-5 2 1-6', 'M5 17c-2 0-3 2-3 5 3 0 5-1 5-3', 'M15 7h2v2h-2Z'],
  team: ['M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 10a2.5 2.5 0 1 0 0-5', 'M2 20v-2a6 6 0 0 1 12 0v2ZM16 14a5 5 0 0 1 6 4v2h-5'],
  retail: ['M4 11h16v10H4ZM2 11l2-7h16l2 7', 'M2 11a3 3 0 0 0 5 2 3 3 0 0 0 5 0 3 3 0 0 0 5 0 3 3 0 0 0 5-2', 'M9 21v-6h6v6'],
  heart: ['M20 5c-3-3-6-1-8 1-2-2-5-4-8-1-5 5 1 10 8 15 7-5 13-10 8-15Z', 'M7 12h3l1-3 2 6 1-3h3'],
  factory: ['M3 21V10l6 3V9l6 4V3h4l2 18Z', 'M7 17h1M12 17h1M17 17h1'],
  finance: ['M4 5h16v16H4ZM8 5V2h8v3', 'm12 9 4 2v4l-4 3-4-3v-4Z', 'M12 11v4'],
  education: ['m12 2 9 5v10l-9 5-9-5V7Z', 'M8 8h4v9H8ZM12 8h4v9h-4'],
  menu: ['M3 6h18M3 12h18M3 18h18'],
  close: ['m5 5 14 14M19 5 5 19'],
}

export default function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name].map((d) => <path key={d} d={d} />)}</svg>
}
