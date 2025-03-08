import React, { useState, useEffect, useRef } from 'react';
import img from '../../assets/products/image.png';
import testm_1 from '../../assets/products/textm_1.jpg'
import testm_2 from '../../assets/products/testm_2.webp'
import testm_3 from '../../assets/products/testm_3.jpg'
import testm_4 from '../../assets/products/testm_4.jpg'

const Cont5 = () => {
  const clientTestimonials =[
    {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
    image: img,
    name: 'Samantha Payne',
    ac: '@SamPanye12'
  },{
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
    image: testm_1,
    name: 'Samantha Payne',
    ac: '@SamPanye12'
  },{
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
    image: testm_2,
    name: 'Samantha Payne',
    ac: '@SamPanye12'
  },{
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
    image: testm_3,
    name: 'Samantha Payne',
    ac: '@SamPanye12'
  },{
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
    image: testm_4,
    name: 'Samantha Payne',
    ac: '@SamPanye12'
  }];

  const studentTestimonials =[
   {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
      image: testm_1,
      name: 'Samantha Payne',
      ac: '@SamPanye12'
    },{
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
      image: testm_2,
      name: 'Samantha Payne',
      ac: '@SamPanye12'
    },{
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
      image: testm_3,
      name: 'Samantha Payne',
      ac: '@SamPanye12'
    },{
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
      image: testm_4,
      name: 'Samantha Payne',
      ac: '@SamPanye12'
    }, {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
      image: img,
      name: 'Samantha Payne',
      ac: '@SamPanye12'
    },
  ];

 
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
  }, [isMobile, clientCurrentIndex, studentCurrentIndex]);

  // Render a testimonial card
  const renderTestimonialCard = (data, index) => (
    <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center w-full md:w-auto lg:w-auto h-full">
      <p className="text-gray-700 text-sm mb-4">{data.text}</p>
      <div className="flex items-center mt-auto w-full">
        <img src={data.image} alt="Profile" className="w-12 h-12 rounded-full object-cover m-2" />
        <div className="text-left">
          <p className="text-sm font-semibold text-gray-800">{data.name}</p>
          <span className="text-xs text-gray-500">{data.ac}</span>
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
        Don't just take our word for it
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
    </div>
  );
};

export default Cont5;