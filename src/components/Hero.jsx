import React from 'react'

const Hero = ({ title = 'Your Journey to Higher Education Starts Here',
    subtitle = `Discover mentorship opportunities with PhD and MS students abroad, who can guide you through the journey of studying and living abroad.` }) => {
    return (
        <section className="bg-slate-700 py-20 mb-4">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div className="text-center">
                    <h1
                        className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
                    >
                        {title}
                    </h1>
                    <p className="my-4 text-xl text-white">
                        {subtitle.split('you ')[0]}you<br />
                        {subtitle.split('you ')[1]}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero