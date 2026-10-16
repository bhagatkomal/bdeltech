import { services } from './home'
import type { ImageRegion } from '../components/ui/FigmaImageRegion'

type ServiceOffering = {
  title: string
  description: string
  image: ImageRegion
  iconSource: 'home' | 'services'
}

export const serviceOfferings: ServiceOffering[] = [
  ...services.map((service) => ({ ...service, iconSource: 'home' as const })),
  {
    title: 'Quality Engineering',
    description: 'Functional testing, automation, API testing, and security assurance.',
    image: { x: 170, y: 2328, width: 72, height: 72 },
    iconSource: 'services',
  },
]
