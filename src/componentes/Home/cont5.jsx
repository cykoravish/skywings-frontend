/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import img from '../../assets/products/image.png';
import testm_1 from '../../assets/products/textm_1.jpg'
import testm_2 from '../../assets/products/testm_2.webp'
import testm_3 from '../../assets/products/testm_3.jpg'
import testm_4 from '../../assets/products/testm_4.jpg'
   
const Cont5 = () => {
  const clientTestimonials =[
    {
    text: '“Skywings Advisors has completely transformed our recruitment process. Their RPO solutions helped us reduce hiring time by 40% and ensured a continuous flow of top-tier candidates. We couldn’t have asked for a better recruitment partner.”',
    image: img,
    name: 'Talent Acquisition Head, Global Insurance Broking',
    ac: '@SamPanye12'
  },{
    text: '“With Skywings managing our RPO needs, our HR team can now focus on strategic goals rather than operational hiring tasks. Their team is efficient, responsive, and deeply understands our industry.”',
    image: testm_1,
    name: ' Director - Human Resources, Leading BFSI Company',
    ac: '@SamPanye12'
  },{
    text: '“We needed skilled professionals on short notice, and Skywings Advisors delivered. Their contract staffing solutions helped us scale quickly without any administrative hassles.”',
    image: testm_2,
    name: 'HR Manager, IT Consulting Firm',
    ac: '@SamPanye12'
  },{
    text: '“Skywings Advisors has been instrumental in providing contract-based workforce solutions for our projects. Their candidate quality and compliance handling are outstanding.”',
    image: testm_3,
    name: 'Operations Head, Leading BPO',
    ac: '@SamPanye12'
  },{
    text: '“Their flexible staffing solutions have allowed us to manage seasonal workloads efficiently. The Skywings team understands our needs and provides quick turnarounds.”',
    image: testm_4,
    name: 'HR Lead, Retail Company',
    ac: '@SamPanye12'
  }];

  const studentTestimonials =[
  //  {
  //     text: ' "AssuredJob.com made my dream of working at HDFC Bank come true! Their recruiter guided me through the process, making it smooth and efficient."',
  //     image: testm_1,
  //     name: 'Amit Sharma, Placed at HDFC Bank (Delhi)',
  //     ac: '@SamPanye12'
  //   },{
  //     text: 'Thanks to their expert recruiters, I landed a high-paying job in life insurance at HDFC Life Insurance in just two weeks!',
  //     image: testm_2,
  //     name: 'Neha Patel, Placed at HDFC Life Insurance (Mumbai)',
  //     ac: '@SamPanye12'
  //   },{
  //     text: '"A seamless banking job placement experience—AssuredJob.com got me hired at HDFC Sales quickly!"',
  //     image: testm_3,
  //     name: 'Rahul Verma, Placed at HDFC Sales (Bangalore)',
  //     ac: '@SamPanye12'
  //   },{
  //     text: 'I switched from a sales role to financial services, thanks to AssuredJob.com and my placement at HDB Financial Services!',
  //     image: testm_4,
  //     name: 'Priya Iyer, Placed at HDB Financial Services (Chennai)',
  //     ac: '@SamPanye12'
  //   }, {
  //     text: 'AssuredJob.com provided career guidance, and now I work at HDFC Bank in a managerial role!',
  //     image: img,
  //     name: 'Vikram Singh, Placed at HDFC Bank (Pune)',
  //     ac: '@SamPanye12'
  //   },
  //   {
  //     text: 'Their banking sector recruitment experts helped me secure my job at HDFC Bank faster than I expected!',
  //     image: img,
  //     name: 'Nilesh Rao, Placed at HDFC Bank (Hyderabad)',
  //     ac: '@SamPanye12'
  //   },
//     {
//       text: "I was struggling to break into the insurance sector, but AssuredJob.com placed me in HDFC Life Insurance effortlessly!",
//       image: img,
//       name: 'Sonal Mehta, Placed at HDFC Life Insurance (Jaipur)',
//       ac: '@SamPanye12'
//     },
//     {
//       text: "Best private banking recruitment agency! I got placed at Kotak Mahindra Bank hassle-free!",
//       image: img,
//       name: 'Anjali Gupta, Placed at Kotak Mahindra Bank (Noida)',
//       ac: '@SamPanye12'
//     },
//     {
//       text: "AssuredJob.com helped me secure a role in life insurance sales at Kotak Mahindra Life Insurance!",
//       image: img,
//       name: 'Rajesh Nair, Placed at Kotak Mahindra Life Insurance (Kochi)',
//       ac: '@SamPanye12'
//     }, {
//       text: "I was looking for a customer service job in banking, and AssuredJob.com made it possible with Kotak Mahindra Bank!",
//       image: img,
//       name: 'Sneha Joshi, Placed at Kotak Mahindra Bank (Hyderabad)',
//       ac: '@SamPanye12'
//     }, {
//       text: "A smooth recruitment process—I got placed at Kotak Mahindra Life Insurance with the best salary in my field!",
//       image: img,
//       name: 'Manish Bhatia, Placed at Kotak Mahindra Life Insurance (Chandigarh)',
//       ac: '@SamPanye12'
//     }, {
//       text:"Their banking sector job listings are excellent! I found my perfect role at Kotak Mahindra Bank!",
//       image: img,
//       name: 'Pooja Mehta, Placed at Kotak Mahindra Bank (Indore)',
//       ac: '@SamPanye12'
//     }, {
//       text:"Looking for an insurance sales career? AssuredJob.com got me placed at Kotak Life Insurance in 10 days!",
//       image: img,
//       name: 'Rahul Taneja, Placed at Kotak Mahindra Life Insurance (Patna)',
//       ac: '@SamPanye12'
//     }, {
//       text:"I was unsure about my career path, but AssuredJob.com placed me at Kotak Mahindra Bank, and I couldn’t be happier!"
// ,
//       image: img,
//       name: 'Varsha Kapoor, Placed at Kotak Mahindra Bank (Ahmedabad)',
//       ac: '@SamPanye12'
//     }, 
// {
//       text:"I wanted a career in wealth management, and AssuredJob.com got me hired at Nuvama Wealth Management!",
//       image: img,
//       name: 'Arjun Reddy, Placed at Nuvama Wealth Management (Visakhapatnam)',
//       ac: '@SamPanye12'
//     }, 
{
      text:"Best job consultancy for finance professionals—I joined Nuvama Wealth Management in no time!",
      image: img,
      name: 'Swati Choudhary, Placed at Nuvama Wealth Management (Noida)',
      ac: '@SamPanye12'
    }, {
      text:"AssuredJob.com helped me switch from banking to investment advisory at Motilal Oswal!",
      image: img,
      name: 'Rohit Malhotra, Placed at Motilal Oswal Financial Services (Lucknow)',
      ac: '@SamPanye12'
    }, {
      text:"I got my first finance job at Nuvama, and their recruitment process was smooth and transparent!",
      image: img,
      name: 'Kavita Pillai, Placed at Nuvama Wealth Management (Thiruvananthapuram)',
      ac: '@SamPanye12'
    }, {
      text:"Highly recommend AssuredJob.com for anyone looking for wealth management careers!",
      image: img,
      name: 'Sandeep Yadav, Placed at Motilal Oswal Financial Services (Bhopal)',
      ac: '@SamPanye12'
    }, {
      text:"I was looking for a portfolio management role, and AssuredJob.com helped me get placed at Nuvama!",
      image: img,
      name: 'Ankur Mathur, Placed at Nuvama Wealth Management (Nagpur)',
      ac: '@SamPanye12'
    }, 
  ];

  const freelancer =[
    {
      text:'FreelanceRecruiter.in provides access to a premium candidate database and job portals, making hiring effortless!',
      name:'Amit Sharma, Delhi'
    },{
      text:"Unlike other platforms, they provide a ready-made recruiter database, saving me hours of sourcing candidates.",
      name:'Neha Patel, Mumbai'
    },{
      text:"With their internal talent database and CRM, I focus on recruiting rather than manual sourcing!",
      name:'Rahul Verma, Bangalore'
    },{
      text:"The AI-powered database helps me match candidates faster. The best freelance recruiting platform!",
      name:'Priya Iyer, Chennai'
    },
    // {
    //   text:"AssuredJob.com offers job portal access and verified leads, making hiring faster and stress-free!",
    //   name:'Vikram Singh, Pune'
    // },
    // {
    //   text:"Their recruitment training program helped me refine my sourcing skills and close better deals!",
    //   name:'Anjali Gupta, Jaipur'
    // },{
    //   text:"I started with zero experience, but their one-on-one recruiter training made me confident in hiring.",
    //   name:'Rajesh Nair, Kochi'
    // },{
    //   text:"FreelanceRecruiter.in provides live training sessions that helped me master industry trends and negotiations.",
    //   name:'Sneha Joshi, Hyderabad'
    // },{
    //   text:"The continuous learning support helped me boost my placements and increase my earnings.",
    //   name:'Manish Bhatia, Chandigarh'
    // },{
    //   text:"Their freelancer recruiter training helped me get better conversion rates and handle clients like a pro!",
    //   name:'Pooja Mehta, Indore'
    // },{
    //   text:"I shifted from other freelancing platforms to AssuredJob.com because of their higher recruiter payouts!",
    //   name:'Arjun Reddy, Visakhapatnam'
    // },
   
    {
      text:"Unlike other freelance platforms, they offer exclusive recruiter access to top companies!",
      name:'Harish Kumar, Nashik'
    },
  ]

 
  const [isMobile, setIsMobile] = useState(false);
  const [clientCurrentIndex, setClientCurrentIndex] = useState(0);
  const [studentCurrentIndex, setStudentCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Carousel functions for client testimonials
  const nextClientSlide = () => {
    setClientCurrentIndex(prevIndex => 
      prevIndex === clientTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevClientSlide = () => {
    setClientCurrentIndex(prevIndex => 
      prevIndex === 0 ? clientTestimonials.length - 1 : prevIndex - 1
    );
  };

  // Carousel functions for student testimonials
  const nextStudentSlide = () => {
    setStudentCurrentIndex(prevIndex => 
      prevIndex === studentTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevStudentSlide = () => {
    setStudentCurrentIndex(prevIndex => 
      prevIndex === 0 ? studentTestimonials.length - 1 : prevIndex - 1
    );
  };

  // Handle touch events for client testimonials
  const handleClientTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleClientTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleClientTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextClientSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      prevClientSlide();
    }
  };

  // Handle touch events for student testimonials
  const handleStudentTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleStudentTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleStudentTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextStudentSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      prevStudentSlide();
    }
  };

 
  const getVisibleCount = () => {
    const width = window.innerWidth;
    if (width < 640) return 1; 
    if (width < 768) return 2; 
    if (width < 1024) return 3; 
    return 5; 
  };

  const visibleCount = isMobile ? getVisibleCount() : 5;

  // Get visible testimonials
  const getVisibleTestimonials = (testimonials, currentIndex) => {
    const visibleItems = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleItems.push({...testimonials[index], index});
    }
    return visibleItems;
  };

  const visibleClientTestimonials = isMobile 
    ? getVisibleTestimonials(clientTestimonials, clientCurrentIndex)
    : clientTestimonials;

  const visibleStudentTestimonials = isMobile
    ? getVisibleTestimonials(studentTestimonials, studentCurrentIndex)
    : studentTestimonials;

  // Auto-advance carousel
  useEffect(() => {
    if (isMobile) {
      const clientInterval = setInterval(nextClientSlide, 5000);
      const studentInterval = setInterval(nextStudentSlide, 5000);
      
      return () => {
        clearInterval(clientInterval);
        clearInterval(studentInterval);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, clientCurrentIndex, studentCurrentIndex]);

  // Render a testimonial card
  const renderTestimonialCard = (data, index) => (
    <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center w-full md:w-auto lg:w-auto h-full">
      <p className="text-gray-700 text-sm mb-4">{data.text}</p>
      <div className="flex items-center mt-auto w-full">
        {/* <img src={data.image} alt="Profile" className="w-12 h-12 rounded-full object-cover m-2" /> */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-800">{data.name}</p>
          {/* <span className="text-xs text-gray-500">{data.ac}</span> */}
        </div>
      </div>
    </div>
  );

  // Render carousel controls
  const renderCarouselControls = (currentIndex, totalItems, prevFunction, nextFunction) => (
    <div className="flex justify-center items-center mt-4 mb-6">
      <button 
        onClick={prevFunction} 
        className="bg-purple-500 text-white rounded-full p-2 mx-2 shadow hover:bg-purple-600 transition"
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      
      <div className="flex space-x-1">
        {Array.from({ length: totalItems }).map((_, idx) => (
          <span 
            key={idx} 
            className={`h-2 w-2 rounded-full ${
              idx === currentIndex % totalItems ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      <button 
        onClick={nextFunction} 
        className="bg-purple-500 text-white rounded-full p-2 mx-2 shadow hover:bg-purple-600 transition"
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>
  );

  return (
    <div className="bg-purple-50 py-12 text-center px-4">
      <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
        TESTIMONIALS
      </span>
      <h1 className="text-4xl text-[#42307D] font-bold my-3">
        Don&apos;t just take our word for it
      </h1>
      <p className="text-purple-600 mt-4 text-lg">
        Read what our clients have to say
      </p>
      
      {/* Client Testimonials */}
      <div className="mt-6 relative">
        {isMobile && renderCarouselControls(clientCurrentIndex, clientTestimonials.length, prevClientSlide, nextClientSlide)}
        
        <div 
          className={`
            ${isMobile 
              ? 'flex overflow-hidden mx-auto px-4' 
              : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center mx-4 lg:mx-20'
            }
          `}
          onTouchStart={handleClientTouchStart}
          onTouchMove={handleClientTouchMove}
          onTouchEnd={handleClientTouchEnd}
        >
          {isMobile ? (
            <div className={`flex transition-transform duration-300 ease-in-out w-full gap-4`} 
                 style={{ width: `${100 * visibleClientTestimonials.length}%` }}>
              {visibleClientTestimonials.map((data, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: `${100 / visibleCount}%` }}>
                  {renderTestimonialCard(data, index)}
                </div>
              ))}
            </div>
          ) : (
            clientTestimonials.map((data, index) => renderTestimonialCard(data, index))
          )}
        </div>
      </div>
      
      <p className="text-purple-600 mt-8 text-lg">
        Read what our Students have to say
      </p>
      
      {/* Student Testimonials */}
      <div className="mt-6 relative">
        {isMobile && renderCarouselControls(studentCurrentIndex, studentTestimonials.length, prevStudentSlide, nextStudentSlide)}
        
        <div 
          className={`
            ${isMobile 
              ? 'flex overflow-hidden mx-auto px-4' 
              : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center mx-4 lg:mx-20'
            }
          `}
          onTouchStart={handleStudentTouchStart}
          onTouchMove={handleStudentTouchMove}
          onTouchEnd={handleStudentTouchEnd}
        >
          {isMobile ? (
            <div className={`flex transition-transform duration-300 ease-in-out w-full gap-4`}
                 style={{ width: `${100 * visibleStudentTestimonials.length}%` }}>
              {visibleStudentTestimonials.map((data, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: `${100 / visibleCount}%` }}>
                  {renderTestimonialCard(data, index)}
                </div>
              ))}
            </div>
          ) : (
            studentTestimonials.map((data, index) => renderTestimonialCard(data, index))
          )}
        </div>
      </div>

      <p className="text-purple-600 mt-8 text-lg">
        Read what our FreeLance Recruiters have to say
      </p>
      
      {/* free lancer Testimonials */}
      <div className="mt-6 relative">
        {isMobile && renderCarouselControls(studentCurrentIndex, studentTestimonials.length, prevStudentSlide, nextStudentSlide)}
        
        <div 
          className={`
            ${isMobile 
              ? 'flex overflow-hidden mx-auto px-4' 
              : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center mx-4 lg:mx-20'
            }
          `}
          onTouchStart={handleStudentTouchStart}
          onTouchMove={handleStudentTouchMove}
          onTouchEnd={handleStudentTouchEnd}
        >
          {isMobile ? (
            <div className={`flex transition-transform duration-300 ease-in-out w-full gap-4`}
                 style={{ width: `${100 * visibleStudentTestimonials.length}%` }}>
              {visibleStudentTestimonials.map((data, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: `${100 / visibleCount}%` }}>
                  {renderTestimonialCard(data, index)}
                </div>
              ))}
            </div>
          ) : (
            freelancer.map((data, index) => renderTestimonialCard(data, index))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cont5;