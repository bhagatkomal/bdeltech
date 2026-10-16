import { Route, Routes } from 'react-router'
import SiteLayout from '../components/layout/SiteLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import SolutionsPage from '../pages/SolutionsPage'
import IndustriesPage from '../pages/IndustriesPage'
import WorkPage from '../pages/WorkPage'
import InsightsPage from '../pages/InsightsPage'
import ContactPage from '../pages/ContactPage'
import CareersPage from '../pages/CareersPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
