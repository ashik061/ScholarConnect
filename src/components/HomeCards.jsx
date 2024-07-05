import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

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
                        <Link
                            to="/mentors"
                            className="inline-block bg-slate-600 text-white rounded-lg px-4 py-2 hover:bg-slate-700"
                        >
                            Browse Mentors
                        </Link>
                    </Card>
                    <Card bg='bg-gray-100'>
                        <h2 className="text-2xl font-bold">For Mentors</h2>
                        <p className="mt-2 mb-4">
                        List your mentorship opportunity to help students from Bangladesh achieve their academic goals.
                        </p>
                        <Link
                            to="/add-mentorship"
                            className="inline-block bg-gray-500 text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                        >
                            Add Mentorship
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default HomeCards