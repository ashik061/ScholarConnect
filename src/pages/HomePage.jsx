import React from 'react'

import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import MentorListings from '../components/MentorListings'
import ViewAllMentors from '../components/ViewAllMentors'
import Footer from '../components/Footer'


const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <MentorListings />
            <ViewAllMentors />
            <Footer />
        </>

    )
}

export default HomePage