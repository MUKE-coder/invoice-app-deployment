"use client";
import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.title}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function AccordionFloat() {
  const faqs = [
    {
      title: "How can I make an invoice for free?",
      description:
        "Refrens invoice generator allows you to create invoices for free without taking much time. Head over to Refrens invoice generator and start creating invoices using pre-formatted invoice templates. You can add your logo, brand colors, and multiple invoice templates and use many more such features to keep your brand consistent.",
    },
    {
      title: "Which is the best free invoice generator?",
      description:
        "Refrens is the best free invoice generator as you can create invoices for clients without paying a single amount. You can freely customize your fields and columns, download the invoice as PDF or send it directly via email, or share it via WhatsApp and within one click you can create a delivery challan, payment receipt, debit note and credit note. Not only this, you can create quotations, purchase orders, proforma invoices, payment receipts, delivery challan, and expense management and can also keep the records of your inventory.",
    },
    {
      title: "Is this invoice generator really free?",
      description:
        "FREE! Refrens invoice generator is free for freelancers, agencies, small businesses, and entrepreneurs. You can generate 50 documents every year. Also, manage invoices and access free templates.",
    },
    {
      title: "Can I generate a PDF invoice using this invoice generator?",
      description:
        "Yes, it is easy to download the PDF invoice using Refrens invoice maker. , clicking on the option of Download PDF will make your invoice in PDF format. Moreover, you can also email the invoice, print the invoice, and send the invoice via WhatsApp or schedule for future dates.",
    },
  ];
  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-2xl md:text-4xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqs.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
}
