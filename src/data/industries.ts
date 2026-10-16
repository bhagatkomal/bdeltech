import type { ImageRegion } from '../components/ui/FigmaImageRegion'

type IndustrySector = { title: string; description: string; image: ImageRegion; imageSource?: 'home' }

export const industrySectors: IndustrySector[] = [
  { title: 'Retail & E-commerce', description: 'Digital commerce, PIM, marketplaces, integrations, and customer experiences.', image: { x: 184, y: 1360, width: 80, height: 80 } },
  { title: 'Healthcare & Life Sciences', description: 'Digital platforms supporting regulated environments and better outcomes.', image: { x: 964, y: 1360, width: 80, height: 80 } },
  { title: 'Manufacturing', description: 'Connected systems, automation, and digital transformation.', image: { x: 1742, y: 1360, width: 80, height: 80 } },
  { title: 'Financial Services', description: 'Secure platforms, automation, and exceptional customer experiences.', image: { x: 886, y: 3080, width: 24, height: 24 }, imageSource: 'home' },
  { title: 'Technology Companies', description: 'Engineering, product development, and accelerated innovation.', image: { x: 1117, y: 3080, width: 24, height: 24 }, imageSource: 'home' },
  { title: 'Consumer & Digital', description: 'Digital products, platforms, engagement, and sustainable growth.', image: { x: 1352, y: 3080, width: 24, height: 24 }, imageSource: 'home' },
]
