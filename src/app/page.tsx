import HeroSection from '@/components/home/HeroSectio'

import SponsoredListing from '@/components/home/SponsoredListing'

function page() {
  return (
    <main className='space-y-[60px] sm:space-y-[80px] md:space-y-[100px] lg:space-y-[120px]'>
      <HeroSection />
  
      <SponsoredListing />
  


    </main>
  )
}

export default page