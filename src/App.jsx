import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import MentorListings from './components/MentorListings'
import ViewAllMentors from './components/ViewAllMentors'



const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <HomeCards />
      <MentorListings />
      <ViewAllMentors />
    </>
  )
}

export default App