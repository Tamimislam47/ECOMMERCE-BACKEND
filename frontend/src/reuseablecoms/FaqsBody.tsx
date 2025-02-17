import React, { useState } from "react";
import { listOfFaqs } from "../ObjDatas.ts";
import { MdArrowDropDown } from "react-icons/md";

type Props = {};

type FaqType = {
  question: string;
  answer: string;
};

const FaqCard: React.FC<FaqType> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev: boolean) => !prev);
  };
  return (
    <div className="flex w-full flex-col divide-y dark:divide-gray-300">
      <details className="flex w-full flex-col gap-2">
        <summary
          className="flex cursor-pointer items-center justify-between outline-none focus:underline"
          onClick={handleToggle}
        >
          {question}
          <i
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <MdArrowDropDown />
          </i>
        </summary>
        {isOpen && (
          <div className="text-[13px]">
            <p className="text-gray-500">{answer}</p>
          </div>
        )}
      </details>
    </div>
  );
};

const FaqSide = () => {
  return (
    <section className="flex-[1.5] dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto flex flex-col justify-center p-4 md:p-8">
        <p className="p-2 text-center text-sm font-medium uppercase tracking-wider">
          How it works
        </p>
        <h2 className="mb-12 text-center text-4xl font-bold leading-none sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {listOfFaqs.faqs.map((faq, index) => (
            <div key={index}>
              <h1 className="mb-2 mt-2 text-lg font-bold">{faq.category}</h1>
              <div className="flex w-full flex-col gap-2">
                {faq.questions.map((innerFaq, innerIndex) => (
                  <React.Fragment key={innerIndex}>
                    <FaqCard
                      question={innerFaq.question}
                      answer={innerFaq.answer}
                    />
                    <hr className="border-[1px] bg-black" />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FormSide = () => {
  return (
    <div className="hero top-0 z-10 flex bg-red-400 bg-transparent p-6 md:flex-1 lg:sticky lg:min-h-screen">
      <div className="card w-full shrink-0 bg-transparent shadow-2xl lg:max-w-sm">
        <form className="card-body flex flex-col gap-5">
          <div>
            <h1 className="text-lg font-bold">Ask Your Question</h1>
            <p className="text-[12px]">Ask Anything, We're Here to Help</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-[12px]">Name</span>
            </label>
            <input
              type="email"
              placeholder="Your Name*"
              className="input input-bordered bg-transparent"
              required
            />
          </div>

          <textarea
            className="textarea textarea-bordered bg-transparent"
            placeholder="Your Message"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

const FaqsBody = (props: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-between lg:w-[80%] lg:flex-row lg:items-start">
      <FaqSide />
      <FormSide />
    </div>
  );
};

export default FaqsBody;
