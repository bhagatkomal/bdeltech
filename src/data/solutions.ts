import type { ImageRegion } from '../components/ui/FigmaImageRegion'

type Solution = { title: string; description: string; image: ImageRegion; imageSource?: 'home' }

export const solutions: Solution[] = [
  { title: 'Digital Transformation', description: 'Modernise legacy applications, processes, and customer experiences.', image: { x: 184, y: 1360, width: 80, height: 80 } },
  { title: 'E-commerce Transformation', description: 'Build connected digital commerce experiences across channels.', image: { x: 964, y: 1360, width: 80, height: 80 } },
  { title: 'Enterprise Modernisation', description: 'Move from legacy platforms to scalable modern architectures.', image: { x: 1742, y: 1360, width: 80, height: 80 } },
  { title: 'AI-Powered Business', description: 'Identify and implement AI opportunities across operations and journeys.', image: { x: 585, y: 1297, width: 48, height: 48 }, imageSource: 'home' },
  { title: 'Product & Platform Development', description: 'Turn ideas into scalable, market-ready digital products.', image: { x: 112, y: 1297, width: 48, height: 48 }, imageSource: 'home' },
]
