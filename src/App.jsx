import { } from 'react'
import { Box, Divider } from '@mui/material'
import './styles/App.css'
import TutorialSection from './components/tutorial/tutorialSection'
import CoreFeaturesSection from './components/coreFeature/coreFeature'
import PricingPolicy from './components/pricingPolicy/pricingPolicy'
import FreeTutorialSection from './components/freeTutorial/freeTutorial'
import PopularDesigningCourses from './components/popularProducts/popularProducts'
import HowItWorks from './components/howItWorks/howItWorks'
import ResponsiveNavbar from './components/navbar/navbar'
import Hero from './components/banner/hero'
import FAQ from './components/faq/faq'
import Footer from './components/footer/footer'

function App() {

  return (
    <>

      <Box sx={{ background: "linear-gradient(90deg, rgba(224,245,250,1) 50%, rgba(255,253,230,1) 65%,rgba(255,255,255) 50%);", }}>
        <ResponsiveNavbar />
        <Hero />
      </Box>
      <TutorialSection />
      <CoreFeaturesSection />
      <PopularDesigningCourses />
      <HowItWorks />
      <PricingPolicy />
      <FreeTutorialSection />
      <FAQ />
      <Divider />
      <Footer />

    </>
  )
}

export default App
