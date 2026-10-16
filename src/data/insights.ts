import meeting from '../assets/work-meeting.jpg'
import building from '../assets/home-building.jpg'
import workspace from '../assets/about-original-2.jpg'
import office from '../assets/about-original-0.jpg'

export const insightCategories = ['All', 'Technology', 'Digital Transformation', 'AI & Automation'] as const

export const insights = [
  { category: 'Technology', title: 'The Future of AI in Business', description: 'How AI is reshaping the way businesses work and create value.', image: meeting },
  { category: 'Digital Transformation', title: 'Why Modernisation Matters', description: 'Practical ways to build adaptable, resilient digital systems.', image: building },
  { category: 'Strategy', title: 'Building Better Digital Experiences', description: 'Designing customer journeys for long-term loyalty.', image: workspace },
  { category: 'AI & Automation', title: 'AI Assistants in the Workplace', description: 'How AI assistants improve productivity and collaboration.', image: office },
] as const
