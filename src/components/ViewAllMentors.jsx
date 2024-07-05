import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllMentors = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/mentors"
          className="block bg-gray-700 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-600"
        >View All Mentors</Link>
      </section>
  )
}

export default ViewAllMentors