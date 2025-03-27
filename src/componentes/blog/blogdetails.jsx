import { useParams, useLocation } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

const ArticleDetails = () => {
  const { id } = useParams(); // Get article ID from URL
  const location = useLocation();
  const article = location.state; // Get article data from state
  if (!article) {
    return <h2 className="text-center text-red-500 ">Article Not Found</h2>;
  }

  return (
    <>
      <div className="text-2xl mt-5 ml-5 sm:ml-10 md:ml-20 font-semibold">
        {article.title}
      </div>

      {/* <div className="flex flex-wrap items-center space-x-2 text-gray-600 text-lg ml-5 sm:ml-10 md:ml-20 mt-5 bg-gray-200 w-fit px-3 py-1 rounded-lg">
        <span className="hover:text-blue-500 cursor-pointer">Home</span>
        <FaGreaterThan className="text-xs" />
        <span className="hover:text-blue-500 cursor-pointer">Blog</span>
        <FaGreaterThan className="text-xs" />
        <span className="text-purple-500 font-medium">{article.jobtype}</span>
        <FaGreaterThan className="text-xs" />
        <span className="text-gray-900 font-medium">{article.title}</span>
      </div> */}

      <div className="text-right font-semibold mr-5 ">
        Posted by{" "}
        <span className="text-purple-500 underline ">{article.author}</span> on{" "}
        {article.date}{" "}
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <img src={article.image} alt={article.title} className="w-full mb-4" />
        <p className="text-lg text-gray-700">{article.descriptionA}</p>
        <p className="text-lg text-gray-700 mt-4">{article.description3}</p>
        <p className="text-lg text-gray-700 mt-4">{article.txt1}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt2}
        </p>
        <p className="text-lg text-gray-700 mt-4">{article.li1}</p>
        <p className="text-lg text-gray-700 mt-4">{article.li2}</p>
        <p className="text-lg text-gray-700 mt-4">{article.li3}</p>
        <p className="text-lg text-gray-700 mt-4">{article.li4}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt3}
        </p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt4}
        </p>
        <p className="text-lg text-gray-700 mt-4">{article.txt5}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt6}
        </p>
        <p className="text-lg text-gray-700 mt-4">{article.txt7}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt8}
        </p>
        <p className="text-lg text-gray-700 mt-4">{article.txt9}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt10}
        </p>
        <p className="text-lg text-gray-700 mt-4">{article.txt11}</p>
        <p className="text-lg text-gray-700 mt-4 ">{article.txt12}</p>
        <p className="text-lg text-gray-700 mt-4">{article.txt13}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt14}
        </p>
        <p className="text-lg text-gray-700 mt-4 ">{article.txt15}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold ">
          {article.txt16}
        </p>
        <p className="text-lg text-gray-700 mt-4 ">{article.txt17}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold ">
          {article.txt18}
        </p>
        <p className="text-lg text-gray-700 mt-4 ">{article.txt19}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt20}
        </p>
        <p className="text-lg text-gray-700 mt-4 ">{article.txt21}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold ">
          {article.txt22}
        </p>
        <p className="text-lg text-gray-700 mt-4  ">{article.txt23}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt24}
        </p>
        <p className="text-lg text-gray-700 mt-4 ">{article.txt25}</p>
        <p className="text-lg text-gray-700 mt-4 ">{article.txt26}</p>
        <p className="text-lg text-gray-700 mt-4 ">{article.txt27}</p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          {article.txt28}
        </p>
        <p className="text-lg text-gray-700 mt-4  ">{article.txt29}</p>

        
        {article.id === 4 && (
  <>
    <h2 className="text-lg font-semibold mt-5">{article.category}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>
  
    <h2 className="text-lg font-semibold mt-5">{article.category1}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions1?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>
  
    <h2 className="text-lg font-semibold mt-5">{article.category2}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions2?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>
  
    <h2 className="text-lg font-semibold mt-5">{article.category3}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions3?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>
  
    <h2 className="text-lg font-semibold mt-5">{article.category4}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions4?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>

    <h2 className="text-lg font-semibold mt-5">{article.category5}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions5?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>

    <h2 className="text-lg font-semibold mt-5">{article.category6}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions6?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>

    <h2 className="text-lg font-semibold mt-5">{article.category7}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions7?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>

    <h2 className="text-lg font-semibold mt-5">{article.category8}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions8?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>

    <h2 className="text-lg font-semibold mt-5">{article.category9}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions9?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>

    <h2 className="text-lg font-semibold mt-5">{article.category10}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions10?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>

    <h2 className="text-lg font-semibold mt-5">{article.category11}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions11?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>

    <h2 className="text-lg font-semibold mt-5">{article.category12}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions12?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>

    <h2 className="text-lg font-semibold mt-5">{article.category13}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions13?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mt-5">{article.category14}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions14?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mt-5">{article.category15}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions15?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mt-5">{article.category16}</h2>
    <ul className="list-decimal ml-6 text-gray-700">
      {article.questions16?.map((question, qIndex) => (
        <li key={qIndex} className="mb-2">{question}</li>
      ))}
    </ul>
  </>
)}


        {/* <h2 className="text-lg font-semibold mt-5 ">{article.category1}</h2>
        <ul className="list-decimal ml-6 text-gray-700">
          {article.questions1.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-5 ">{article.category2}</h2>
        <ul className="list-decimal ml-6 text-gray-700">
          {article.questions2.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-5">{article.category3}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions3.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-5  ">{article.category4}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions4.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-5 ">{article.category5}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions5.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-5 ">{article.category6}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions6.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-5 ">{article.category7}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions7.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-5 ">{article.category8}</h2>
        <ul className="list-decimal ml-6 mt-2 text-gray-700">
          {article.questions8.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-5 ">{article.category9}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions9.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-5 ">{article.category10}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions10.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-5 ">{article.category11}</h2>
        <ul className="list-decimal ml-6 mt-2 text-gray-700">
          {article.questions11.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-5 ">{article.category12}</h2>
        <ul className="list-decimal ml-6 mt-2 text-gray-700">
          {article.questions12.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-5 ">{article.category13}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions13.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-5 ">{article.category14}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions14.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-5 ">{article.category15}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions14.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-5">{article.category16}</h2>
        <ul className="list-decimal ml-6  text-gray-700">
          {article.questions16.map((question, qIndex) => (
            <li key={qIndex} className="mb-2">
              {question}
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default ArticleDetails;