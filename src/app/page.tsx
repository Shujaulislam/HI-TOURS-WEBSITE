'use client'


import DestinationSection from '@/components/DestinationSection'
import ExperiencesSection from '@/components/ExperiencesSection'
import FeaturesSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import TravelSection from '@/components/TravelSection'



export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DestinationSection/>
      <ExperiencesSection/>
      <TravelSection/>
    </>
  )
}
