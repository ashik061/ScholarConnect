import React from 'react'
import Card from './Card'

const HomeCards = () => {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card>
                        <h2 className="text-2xl font-bold">For Mentees</h2>
                        <p className="mt-2 mb-4">
                        Browse our mentorship opportunities and start your journey towards higher education abroad.
                        </p>
                        <a
                            href="/jobs.html"
                            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                        >
                            Browse Mentors
                        </a>
                    </Card>
                    <Card bg='bg-indigo-100'>
                        <h2 className="text-2xl font-bold">For Mentors</h2>
                        <p className="mt-2 mb-4">
                        List your mentorship opportunity to help students from Bangladesh achieve their academic goals.
                        </p>
                        <a
                            href="/add-job.html"
                            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                        >
                            Add Mentorship
                        </a>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default HomeCards