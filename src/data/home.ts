import type { ImageRegion } from '../components/ui/FigmaImageRegion'

type HomeService = { title: string; description: string; image: ImageRegion }
export const services: HomeService[] = [
  { title: 'Software Development', description: 'Web applications, mobile products, enterprise systems, and API development.', image: { x: 112, y: 1297, width: 48, height: 48 } },
  { title: 'AI & Automation', description: 'AI strategy, generative AI solutions, intelligent assistants, and RPA.', image: { x: 585, y: 1297, width: 48, height: 48 } },
  { title: 'Cloud & Modernisation', description: 'Cloud migration, application modernisation, and infrastructure optimisation.', image: { x: 1058, y: 1297, width: 48, height: 48 } },
  { title: 'Digital Commerce', description: 'E-commerce development, PIM platforms, and scalable marketplaces.', image: { x: 112, y: 1613, width: 48, height: 48 } },
  { title: 'Project & Delivery', description: 'Product leadership, agile delivery, PMO services, and transformation.', image: { x: 585, y: 1613, width: 48, height: 48 } },
  { title: 'Digital Marketing', description: 'Digital strategy, campaigns, content, and performance marketing that drive growth.', image: { x: 1058, y: 1613, width: 48, height: 48 } },
]

export const statistics = [
  { value: '15+', label: 'Years of delivery' },
  { value: '120+', label: 'Products launched' },
  { value: '96%', label: 'Client retention' },
] as const

export const industries: { title: string; image: ImageRegion }[] = [
  { title: 'Retail & E-commerce', image: { x: 177, y: 3080, width: 24, height: 24 } },
  { title: 'Healthcare & Life Sciences', image: { x: 412, y: 3080, width: 24, height: 24 } },
  { title: 'Manufacturing', image: { x: 647, y: 3080, width: 24, height: 24 } },
  { title: 'Financial Services', image: { x: 886, y: 3080, width: 24, height: 24 } },
  { title: 'Technology Companies', image: { x: 1117, y: 3080, width: 24, height: 24 } },
  { title: 'Consumer & Digital', image: { x: 1352, y: 3080, width: 24, height: 24 } },
]
