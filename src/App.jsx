import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import MentorListings from './components/MentorListings'
import ViewAllMentors from './components/ViewAllMentors'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <HomeCards />
      <MentorListings />
      <ViewAllMentors />
      <Footer />
    </>
  )
}

export default App