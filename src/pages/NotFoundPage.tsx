import { Link } from 'react-router'
import PageIntro from '../components/ui/PageIntro'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page not found')
  return (
    <>
      <PageIntro eyebrow="404" title="Page not found" description="The page you’re looking for is unavailable." />
      <Link className="button" to="/">Back to home</Link>
    </>
  )
}
