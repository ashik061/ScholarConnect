import React from 'react'

const MentorListing = ({ mentor }) => {
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-2">
                    <div className="text-gray-600 my-2">{mentor.type}</div>
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                </div>

                <div className="text-sm text-indigo-600 mt-1 mb-4">
                    {mentor.expertise.split(', ').map((expertise, index) => (
                        <span key={index} className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-xl mr-1 mt-1">
                            {expertise}
                        </span>
                    ))}
                </div>

                <div className="mb-5">
                    {mentor.description}
                </div>

                <h3 className="text-indigo-500 mb-2">{mentor.rate}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                        {mentor.location}
                    </div>
                    <a
                        href={`/mentor/${mentor.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MentorListing