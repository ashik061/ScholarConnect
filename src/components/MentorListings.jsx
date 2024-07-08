import React from 'react'
import MentorListing from './MentorListing'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'

const MentorListings = ({ isHome = false }) => {

    const [mentors, setMentors] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchMentorsData = async () => {
            const apiURL = isHome ? '/api?_limit=3' : '/api'
            try {
                const res = await fetch(apiURL)
                const data = await res.json()
                setMentors(data)
            } catch (error) {
                console.log('Error fetching data', error)
            } finally {
                setLoading(false)
            }

        }

        fetchMentorsData()
    }, [])

    return (
        <section className="bg-slate-100 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-slate-500 mb-6 text-center">
                    {isHome ? "Top Mentors" : "Browse Mentors"}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />

                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {mentors.map((mentor) => (
                            <MentorListing key={mentor.id} mentor={mentor} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    )
}

export default MentorListings