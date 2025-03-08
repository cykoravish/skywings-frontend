import React from 'react'
import img from '../../assets/carrier/herosectionimg.png'
const CareerHeroSection = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between mx-auto p-6 bg-[#F5F5F5] rounded-lg ">

                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#000000]">
                        Careers at AssuredJob.com
                    </h2>
                    <h2 className='text-2xl font-bold text-[#000000] mt-4'>Join a Team That’s Changing the Future of Recruitment</h2>
                    <p className="text-[#2B2B2B] mt-2 leading-6">
                        At <span className="font-semibold text-[#000000]">AssuredJob.com</span>,
                        we are on a mission to revolutionize staffing and recruitment by
                        connecting top talent with leading employers across industries.Whether you're an  executive, job-seeker, or industry professional , we offer exciting career opportunities that empower you to grow and
                        make a difference.
                    </p>

                    <div className="mt-4 flex flex-col md:flex-row gap-3">
                        <button className="px-4 py-2 cursor-pointer text-[#000000] rounded-md border border-[#000000]  hover:bg-gray-200">
                            Join as a Full-Time Employee
                        </button>
                        <button className="px-4 py-2 cursor-pointer border border-[#000000] text-[#000000] rounded-md hover:bg-gray-200">
                            Join as a Freelance Recruiter
                        </button>
                    </div>

                    <p className="mt-4 text-sm text-[#000000]">
                        Send your resume:{" "}
                        <a href="mailto:careers@assuredjob.com" className="font-semibold text-[#2B2B2B]">
                            careers@assuredjob.com
                        </a>
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={img}
                        alt="Career Illustration"
                        className="w-full max-w-sm"
                    />
                </div>
            </section>
        </>
    )
}

export default CareerHeroSection