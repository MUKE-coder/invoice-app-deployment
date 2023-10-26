import { BsCurrencyDollar, BsFillGrid1X2Fill } from "react-icons/bs";
import ThemeLink from "./ThemeLink";
export default function Features() {
  const features = [
    {
      icon: BsCurrencyDollar,
      title: "Easy Tax Invoice",
      description:
        "Create, manage, send and track tax invoices without any hassle.",
    },
    {
      icon: BsFillGrid1X2Fill,
      title: "Customization of Columns",
      description:
        "Customizable invoice format to add more relevant information and columns.",
    },
    {
      icon: BsCurrencyDollar,
      title: "Brand Your Invoice",
      description:
        "Easily add the business logo and change the color of the invoice with one click. No Watermark. No Ads",
    },
    {
      icon: BsCurrencyDollar,
      title: "Invoice Templates",
      description:
        "Beautifully designed and fully customizable invoice templates with magic color feature.",
    },
    {
      icon: BsCurrencyDollar,
      title: "Email & Track Invoices",
      description:
        "Send invoice via email and get to know when the invoice was opened.",
    },
    {
      icon: BsCurrencyDollar,
      title: "Recurring Invoices",
      description:
        "Refrens invoice generator create recurring invoices for you that take place at regular intervals.",
    },
    {
      icon: BsCurrencyDollar,
      title: "Insightful Reports",
      description:
        "Get ready-made essential reports to analyze your business and client information.",
    },
    {
      icon: BsCurrencyDollar,
      title: "Easy Access Anywhere",
      description:
        "Easy to use dashboard for mobile and desktop. Get email alerts in real-time.",
    },
  ];
  return (
    <div className="bg-slate-950 py-8 md:py-16 md:px-16 px-4 text-slate-50 flex flex-col items-center gap-8">
      <h2 className="text-center text-2xl md:text-5xl font-semibold  mb-12">
        Features of Invoice Generator
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div className="mb-3" key={i}>
              <div className="border-2 border-purple-400 rounded-lg py-4 w-14 h-14 flex items-center justify-center mb-3">
                <Icon className="text-3xl" />
              </div>
              <p className=" mb-3 text-xl">{feature.title}</p>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <ThemeLink
        className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300"
        title="Create Invoice for Free"
        href="/invoice/new"
      />
    </div>
  );
}
