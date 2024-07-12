import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
// import { useState, useEffect } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'


const MentorPage = () => {

    const { id } = useParams()
    const mentor = useLoaderData()

    // const [mentor, setMentor] = useState(null)
    // const [loading, setLoading] = useState(true)

    // useEffect ( ()=> {
    //     const fetchMentorData = async () => {
    //         const apiURL = `/api/mentors/${id}`
    //         try {
    //             const res = await fetch(apiURL)
    //             const data = await res.json()
    //             setMentor(data)
    //         } catch (error) {
    //             console.log('Error fetching data', error)
    //         } finally {
    //             setLoading(false)
    //         }

    //     }

    //     fetchMentorData()
    // }, [])


    return (

        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/mentors"
                        className="text-slate-500 hover:text-slate-600 flex items-center"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Mentors Listings
                    </Link>
                </div>
            </section>

            <section className="bg-slate-100">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{mentor.type}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {mentor.name}
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <FaLocationDot
                                        className="text-lg text-orange-700 mr-2 my-auto"
                                    />
                                    <p className="text-orange-700">{mentor.location}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-slate-700 text-lg font-bold mb-4">
                                    About {mentor.name}
                                </h3>

                                <p className="mb-4 text-justify">
                                    {mentor.description}
                                </p>

                                <h3 className="text-slate-700 text-lg font-bold mb-4">
                                    Expertise
                                </h3>
                                <div className="text-sm text-slate-600 mt-1 mb-6">
                                    {mentor.expertise.split(', ').map((expertise, index) => (
                                        <span key={index} className="inline-block bg-slate-200 text-slate-800 px-2 py-2 rounded-xl mr-3 mt-1">
                                            {expertise}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-slate-700 text-lg font-bold mb-4">
                                    Academic Profile
                                </h3>

                                <h2 className="text-xl mb-4">{mentor.university.name}</h2>
                                <p className="mb-4 text-justify">
                                    {mentor.university.description}
                                </p>

                                <h3 className="text-slate-700 text-lg font-bold mb-2">Consultation Fee</h3>

                                <p className="mb-4">{mentor.rate}</p>
                            </div>
                        </main>

                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Contact Info</h3>

                                <p className="my-2 text-red-400">
                                    Please respect the mentor's time and avoid unnecessary emails or calls. Contact only for relevant and important matters.
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-lg">Contact Email:</h3>

                                <p className="my-2 bg-slate-200 p-2 text-gray-600 font-semibold break-words overflow-hidden">
                                    {mentor.university.contactEmail}
                                </p>

                                <h3 className="text-lg">Contact Phone:</h3>

                                <p className="my-2 bg-slate-200 p-2 text-gray-600 font-semibold">{mentor.university.contactPhone}</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Mentorship</h3>
                                <a
                                    href="/add-job.html"
                                    className="bg-slate-500 hover:bg-slate-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Mentorship</a
                                >
                                <button
                                    className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Mentorship
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

        </>
    )
}
const mentorDataLoader = async ({ params }) => {
    try {
        const res = await fetch(`/api/mentors/${params.id}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log('Error loading data', error)
    }

}

export { MentorPage as default, mentorDataLoader }