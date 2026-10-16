import PageIntro from '../components/ui/PageIntro'
import usePageTitle from '../hooks/usePageTitle'

export default function ComingSoonPage({ title }: { title: string }) {
  usePageTitle(title)
  return <PageIntro eyebrow="bdeltech" title={title} description="More information is coming soon." />
}
