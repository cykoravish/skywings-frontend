/* eslint-disable no-unused-vars */


import React, { useState } from "react";
import CareerHeroSection from '../componentes/Carrier/CareerHeroSection'
import Card from "../componentes/Carrier/Card";
import JobCard from "../componentes/Carrier/JobCard";
import SearchBar from "../componentes/Carrier/SearchBar";
import StatCard from "../componentes/Carrier/StatCard";
import FAQAccordion from "../componentes/Carrier/FAQAccordion";
import SupportSection from "../componentes/Carrier/SupportSection";
import Arrows from "../componentes/Carrier/Arrows";

const cards = [
    { title: "Dynamic Work Culture", description: "We foster innovation, collaboration, and growth." },
    { title: "Unlimited Earning Potential", description: "Competitive salaries, incentives, and commissions." },
    { title: "Career Advancement", description: "Learning & development programs to help you upskill." },
    { title: "Flexible Work Options", description: "Remote, hybrid, and in-office roles available." },
    { title: "Industry-Leading Expertise", description: "Work with recruitment experts and top clients." },
];

const jobCards = [
    { title: "Senior Manager", location: "Bangalore", experience: "5 Years of experience" },
    { title: "Senior Manager", location: "Bangalore", experience: "5 Years of experience" },
    { title: "Senior Manager", location: "Bangalore", experience: "5 Years of experience" },
    { title: "Senior Manager", location: "Bangalore", experience: "5 Years of experience" },
    { title: "Senior Manager", location: "Bangalore", experience: "5 Years of experience" },
];

const platFormCard = [
    { count: "70", platform: "Instagram" },
    { count: "565", platform: "Facebook" },
    { count: "10K", platform: "Linkedin" },
    { count: "600", platform: "YouTube" },
]

const Career = () => {

    const [cardIndex, setCardIndex] = useState(0);
    const [jobIndex, setJobIndex] = useState(0);
    const [statIndex, setStatIndex] = useState(0);


    const nextCardSlide = () => setCardIndex((prev) => (prev + 1) % cards.length);
    const prevCardSlide = () => setCardIndex((prev) => (prev - 1 + cards.length) % cards.length);

    const nextJobSlide = () => setJobIndex((prev) => (prev + 1) % jobCards.length);
    const prevJobSlide = () => setJobIndex((prev) => (prev - 1 + jobCards.length) % jobCards.length);

    const nextStatSlide = () => setStatIndex((prev) => (prev + 1) % platFormCard.length);
    const prevStatSlide = () => setStatIndex((prev) => (prev - 1 + platFormCard.length) % platFormCard.length);

    return (
        <>
            <CareerHeroSection />


            <div className="flex flex-col items-center gap-5 py-15 bg-[#F5F5F5]">
                <h2 className="text-[#000000] text-2xl font-[500]">Why Work with Us?</h2>

                <div className="hidden md:flex justify-between gap-4 px-7 py-2">
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} />
                    ))}
                </div>

                <div className="md:hidden w-full flex flex-col items-center relative overflow-hidden my-3">
                    <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${cardIndex * 100}%)`, width: "100%" }}>
                        {cards.map((card, index) => (
                            <div key={index} className="w-full flex-shrink-0 flex justify-center">
                                <Card title={card.title} description={card.description} />
                            </div>
                        ))}
                    </div>
                    <Arrows nextSlide={nextCardSlide} prevSlide={prevCardSlide} />
                </div>
            </div>

{/* 
            <div className="bg-[#F5F5F5] py-2 px-5">
                <h3 className="text-[#42307D] text-2xl px-3">Open Positions</h3>
                <SearchBar />

                <div className="hidden md:flex gap-5 py-5 px-2">
                    {jobCards.map((job, index) => (
                        <JobCard key={index} title={job.title} location={job.location} experience={job.experience} />
                    ))}
                </div>

                <div className="hidden md:flex gap-5 py-5 px-2">
                    {jobCards.map((job, index) => (
                        <JobCard key={index} title={job.title} location={job.location} experience={job.experience} />
                    ))}
                </div>

                <div className="md:hidden w-full flex flex-col items-center relative overflow-hidden my-3">
                    <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${jobIndex * 100}%)`, width: "100%" }}>
                        {jobCards.map((job, index) => (
                            <div key={index} className="w-full flex-shrink-0 flex justify-center">
                                <JobCard title={job.title} location={job.location} experience={job.experience} />
                            </div>
                        ))}
                    </div>
                    <Arrows nextSlide={nextJobSlide} prevSlide={prevJobSlide} />
                </div>
            </div> */}


            <h3 className="text-center text-2xl text-[#667085] mt-11">“Join 100K+ professionals who trust AssuredJob for career growth.”</h3>

            <div className="hidden md:flex items-center justify-center gap-4 p-4">
                {platFormCard.map((info, index) => (
                    <StatCard key={index} count={info.count} platform={info.platform} />
                ))}
            </div>

            <div className="md:hidden w-full flex flex-col items-center relative overflow-hidden my-3">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${statIndex * 100}%)`, width: "100%" }}>
                    {platFormCard.map((data, index) => (
                        <div key={index} className="w-full flex-shrink-0 flex justify-center">
                            <StatCard count={data.count} platform={data.platform} />
                        </div>
                    ))}
                </div>
                <Arrows nextSlide={nextStatSlide} prevSlide={prevStatSlide} />
            </div>

            <FAQAccordion />
            <SupportSection />
        </>
    );
};

export default Career;
