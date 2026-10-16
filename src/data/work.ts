import team from '../assets/home-team.jpg'
import office from '../assets/about-original-0.jpg'
import meeting from '../assets/work-meeting.jpg'
import workspace from '../assets/about-original-2.jpg'
import desk from '../assets/solutions-original-0.jpg'

export const workProjects = [
  { category: 'Retail', title: 'E-commerce Platform', description: 'A scalable commerce platform with integrated fulfilment and customer experiences.', image: team },
  { category: 'Modernisation', title: 'Enterprise Application', description: 'Reimagined legacy systems with a cloud-native architecture.', image: office },
  { category: 'Automation', title: 'AI-Powered Assistant', description: 'An intelligent tool that improves support and team productivity.', image: meeting },
  { category: 'Strategy', title: 'Digital Transformation', description: 'Connected systems and automation to improve operational efficiency.', image: meeting },
  { category: 'Product', title: 'Product Platform', description: 'A scalable platform built for a rapidly growing business.', image: workspace },
  { category: 'Cloud', title: 'Cloud Migration', description: 'A resilient cloud foundation with improved performance and control.', image: desk },
] as const
