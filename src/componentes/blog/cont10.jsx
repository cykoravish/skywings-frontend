import mountain from '../../assets/products/image(10).png'
import tech from "../../assets/products/image(11).png";
import desktop from "../../assets/products/image(3).png";
import podcast from "../../assets/products/image(6).png";
import sigleman from "../../assets/products/image(4).png";
import concentration from "../../assets/products/image(5).png";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

// import {imgy} from "../../assets/products/image (4).png";


const Cont10=()=> {
// console.log("imgy", imgy)
    const articles = [
        {
          id: 1,
          image: mountain,
          author: "Admin",
          date: "December 05, 2016",
          jobtype: "Recruitment",
          title: "Busted No Show Reasons ",
          description:
            "I met with an accident!”, “My best friend is hospitalized”, “I am unwell”, “My grandparent expired”, “important meeting at office scheduled and I got the update last night”, either..",
          tags: ["Leadership", "Management"],
          
        },
        {
          id : 2 ,
          image: podcast,
          author: "Admin",
          date: "Frbruary 13, 2022",
          jobtype: "Interview Tips",
          title: "The One Thing Every Employer Wants to See On Your Resume",
          description:
            "It’s tough out there in the job market. And it may be getting tougher if you are following the news. You are It’s tough ..",
          tags: ["Leadership", "Management"],
          
        },
        {
          id:3 ,
          image: tech,
          author: "Admin",
          date: "31 December 2015",
          jobtype:"Company Culter ",
          title: "How to create a culture of leadership",
          description:
            "Culture is a composition of 'Intellectual Activity'. In this competitive world, a key factor behind a company's success, apart from .",
          tags: ["Product", "Research", "Frameworks"],
        },
        {
          id:4,
          image: desktop,
          author: "Admin",
          date: "December 25, 2015",
          jobtype:"Interview Tips",
          title: "Basic questions asked in any job Interview",
          description:
            "It’s a well known fact that looking at a candidate’s past behaviour is the best way to predict their future",
          tags: ["Design", "Research"],
        },
        // {
        //   image: sigleman,
        //   author: "Natali Craig",
        //   date: "14 Jan 2022",
        //   title: "How collaboration makes us better designers",
        //   description:
        //     "Collaboration can make our teams stronger, and our individual designs better.",
        //   tags: ["Design", "Research"],
        // },
        // {
        //   image: concentration,
        //   author: "Drew Cano",
        //   date: "13 Jan 2022",
        //   title: "Our top 10 Javascript frameworks to use",
        //   description:
        //     "JavaScript frameworks make development easy with extensive features and functionalities.",
        //   tags: ["Software Development", "Tools", "SaaS"],
        // },
        // {
        //   image: podcast,
        //   author: "Orlando Diggs",
        //   date: "12 Jan 2022",
        //   title: "Podcast: Creating a better CX Community",
        //   description:
        //     "Starting a community doesn’t need to be complicated, but how do you get started?",
        //   tags: ["Podcasts", "Customer Success"],
          
        // },
        // {
        //     image: sigleman,
        //     author: "Natali Craig • ",
        //     date: "14 Jan 2022",
        //     title: "How collaboration makes us better designers",
        //     description:
        //       "Collaboration can make our teams stronger, and our individual designs better.",
        //     tags: ["Design", "Research"],
        //   },
        //   {
        //     image: concentration,
        //     author: "Drew Cano ",
        //     date: "13 Jan 2022",
        //     title: "Our top 10 Javascript frameworks to use",
        //     description:
        //       "JavaScript frameworks make development easy with extensive features and functionalities.",
        //     tags: ["Software Development", "Tools","SaaS"],
        //   },
        //   {
        //     image: podcast,
        //     author: "Orlando Diggs • ",
        //     date: "12 Jan 2022",
        //     title: "Podcast: Creating a better CX Community",
        //     description:
        //       "Starting a community doesn’t need to be complicated, but how do you get started?",
        //     tags: ["Podcasts", "Customer Success"],
        //   },
      ];
  return (
    <>
    <div className='text-center  mt-10'>
        <span className='bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full'>BLOG</span>
      <h1 className='font-bold lg:text-5xl text-3xl  my-3'>Stories and interviews</h1>
      <p className='text-gray-500 mt-4 text-lg'>Subscribe to learn about new project features, the latest in technology,<br/> solutions, and update</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:mx-20 w-85 m-auto md:w-auto   ">
      
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full object-cover"
          />
          <div className="p-4 relative">   {/* relative for arrow*/ }
          <MdArrowOutward className='absolute right-3 top-5'/>
            <h3 className="text-lg font-semibold mb-2 w-80">{article.title}</h3>
            <p className="text-sm text-purple-500 mb-2">
              <span className='text-black font-semibold'>{article.jobtype} </span> 
              <span className='text-black'>| By :</span> {article.author} {""}
              <span className='text-black'>| Last Updates: </span> {article.date}
            </p>
            <p className="text-gray-500 text-sm mb-4">{article.description}</p>
            {/* <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-2xl"
                >
                  {tag}
                </span>
              ))}
              
            </div> */}
             {/* Link to the blogDetails page */}
             <Link
                to={`/article/${article.id}`}
                state={article} // Pass article data
                className="text-purple-500 font-semibold"
              >
                Read More...
              </Link>
           
          </div>
        </div>
    
  
      ))}


    </div>
    </>
    )
}
export default Cont10;