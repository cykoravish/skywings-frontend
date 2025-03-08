import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import groupImage from '../../assets/products/Avatar group.png';
import Cont6B from "./cont6-B";


const Cont6 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Is there a discount for annual billing?",
      answer:
        "Yes! We offer a 20% discount if you choose the annual plan instead of monthly billing.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-center mt-4 p-6 lg:mx-20">
        <h1 className="text-3xl font-medium">Frequently Asked Questions</h1>
        <p className="text-sm text-gray-600">
          Everything you need to know about the product and billing.
        </p>
  
        <div className="mt-6 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4 text-left">
              <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="font-medium text-gray-800">{faq.question}</p>
              {openIndex === index ? (
                <FaMinusCircle className="text-purple-600 text-xl transition-transform duration-300" />
              ) : (
                <FaPlusCircle className="text-gray-500 text-xl transition-transform duration-300" />
              )}
            </div>

            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
        </div>
        <div className="flex justify-center  mt-5">
           <img src={groupImage} alt="Responsive Image" class="max-w-full h-auto" />
        </div>
        <div className="text">
           <h1 className="text-2xl font-medium">Still have Question ?</h1>
           <p className="text-sm text-gray-600 mb-5">Can't find the answer you're looking for? Please chat to our friendly team.
           </p>
           <span className="w-full h-fit bg-purple-600 text-white rounded-lg  p-2 cursor-pointer ">
            Get in touch
          </span>
       </div>

       

    </div>
  ); 
};

export default Cont6;
