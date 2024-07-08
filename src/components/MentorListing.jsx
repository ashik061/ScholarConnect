import React from 'react'
import { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const MentorListing = ({ mentor }) => {
    const [showFullDescription, setShowFullDescription] = useState(false)

    let description = mentor.description

    if(!showFullDescription){
        description = description.substring(0,85) + '...'
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-2">
                    <div className="text-gray-600 my-2">{mentor.type}</div>
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                </div>

                <div className="text-sm text-slate-600 mt-1 mb-4">
                    {mentor.expertise.split(', ').map((expertise, index) => (
                        <span key={index} className="inline-block bg-slate-200 text-slate-800 px-2 py-1 rounded-xl mr-1 mt-1">
                            {expertise}
                        </span>
                    ))}
                </div>

                <div className="mb-2">
                    {description}
                </div>

                <button onClick={() => setShowFullDescription((prevState) => !prevState)}
                 className="text-teal-600 mb-3 hover:text-teal-500">
                    {showFullDescription ? 'Less' : 'More'}
                </button>

                <h3 className="text-slate-700 font-semibold mb-4">{mentor.rate}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaLocationDot className="inline text-lg mx-1 mb-1"/>
                        {mentor.location}
                    </div>
                    <Link
                        to={`/mentor/${mentor.id}`}
                        className="h-[36px] bg-slate-500 hover:bg-slate-600 text-white px-5 py-2 rounded-lg text-center text-sm mr-5"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MentorListing