"use client";

import { Accordion } from "flowbite-react";

export default function AccordionFAQ() {
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
    <Accordion>
      {faqs.map((faq, i) => {
        return (
          <Accordion.Panel key={i} className="mb-6">
            <Accordion.Title>{faq.title}</Accordion.Title>
            <Accordion.Content>
              <p className="mb-6 text-gray-500 dark:text-gray-400 ">
                {faq.description}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        );
      })}
    </Accordion>
  );
}
