import { useParams, useLocation } from "react-router-dom";

const ArticleDetails = () => {
  const { id } = useParams(); // Get article ID from URL
  const location = useLocation();
  const article = location.state; // Get article data from state

  if (!article) {
    return <h2 className="text-center text-red-500">Article Not Found</h2>;
  }

  return (
    <>
    <div className="text-right">Posted by {article.author}  {article.date} </div>
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-2">
        <span className="font-semibold">{article.jobtype}</span> | By:{" "}
        {article.author} | Last Updated: {article.date}
      </p>
      <img src={article.image} alt={article.title} className="w-full mb-4" />
      <p className="text-lg text-gray-700">{article.description}</p>
    </div>
    </>
  );
};

export default ArticleDetails;
