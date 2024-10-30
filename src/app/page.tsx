'use client'


import DestinationSection from '@/components/DestinationSection'
import ExperiencesSection from '@/components/ExperiencesSection'
import FeaturesSection from '@/components/FeatureSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Map from '@/components/Map'
import Testimonials from '@/components/Testimonials'
import TravelSection from '@/components/TravelSection'



export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DestinationSection/>
      <ExperiencesSection/>
      <TravelSection/>
      <Map/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
