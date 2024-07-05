import React from 'react'
import mentors from '../assets/jsons/mentors.json'
import MentorListing from './MentorListing'

const MentorListings = () => {
    //console.log(mentors)

    const topMentors = mentors.slice(0, 3)

    return (
        <section className="bg-slate-100 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-slate-500 mb-6 text-center">
                    Browse Mentors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {topMentors.map((mentor) => (
                        <MentorListing key={mentor.id} mentor= {mentor}/>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default MentorListings