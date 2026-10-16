import FigmaImageRegion from '../ui/FigmaImageRegion'

const regions = {
  office: { x: 647, y: 63, width: 93, height: 111 },
  meeting: { x: 416, y: 193, width: 146, height: 89 },
  workspace: { x: 576, y: 396, width: 117, height: 67 },
  mission: { x: 583, y: 194, width: 21, height: 21 },
  vision: { x: 416, y: 299, width: 22, height: 21 },
  values: { x: 600, y: 299, width: 21, height: 21 },
} as const

type AboutImageProps = {
  region: keyof typeof regions
  alt: string
  className?: string
}

export default function AboutImage({ region, alt, className = '' }: AboutImageProps) {
  return <FigmaImageRegion region={regions[region]} alt={alt} className={`about-image about-image--${region} ${className}`} />
}
