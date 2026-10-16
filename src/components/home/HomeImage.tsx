import FigmaImageRegion from '../ui/FigmaImageRegion'
import type { ImageRegion } from '../ui/FigmaImageRegion'
import source from '../../assets/home-figma-source.png'

export default function HomeImage({ region, alt = '', className = '' }: { region: ImageRegion; alt?: string; className?: string }) {
  return <FigmaImageRegion region={region} alt={alt} className={className} source={source} sourceWidth={1553} />
}
