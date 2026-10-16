import defaultSource from '../../assets/about-figma-source.png'

export type ImageRegion = { x: number; y: number; width: number; height: number }

type FigmaImageRegionProps = {
  region: ImageRegion
  alt: string
  className?: string
  source?: string
  sourceWidth?: number
}

// Both Figma frames share this original raster source. Display only the
// requested image region while rendering the page's layout and copy in HTML.
export default function FigmaImageRegion({ region, alt, className = '', source = defaultSource, sourceWidth = 1536 }: FigmaImageRegionProps) {
  const { x, y, width, height } = region
  return (
    <span className={className} style={{ display: 'block', position: 'relative', overflow: 'hidden', flexShrink: 0, aspectRatio: `${width} / ${height}` }}>
      <img
        src={source}
        alt={alt}
        draggable={false}
        style={{ position: 'absolute', display: 'block', maxWidth: 'none', height: 'auto', width: `${sourceWidth / width * 100}%`, left: `${-x / width * 100}%`, top: `${-y / height * 100}%` }}
      />
    </span>
  )
}
