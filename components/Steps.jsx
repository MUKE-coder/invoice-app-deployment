import { BsChevronRight } from "react-icons/bs";

export default function Steps() {
  return (
    <div className="py-8 md:py-16 px-4 md:px-16 bg-slate-50 mx-auto flex items-center justify-center">
      <div className="">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Create Your Invoice in Less than 2 Minutes
        </h2>
        <div className="flex items-start md:items-center flex-col md:flex-row gap-0 md:gap-6 ">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <p className=" border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">
              1
            </p>
            <p>Invoice Details</p>
            <BsChevronRight className="hidden md:block" size={24} />
          </div>

          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <p className=" border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">
              2
            </p>
            <p>Your Bank Details (Optional)</p>
            <BsChevronRight className="hidden md:block" size={24} />
          </div>

          <div className="flex items-center gap-3">
            <p className=" border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">
              3
            </p>
            <p>
              Select Design & Colors <br />
              (Download or Email Invoice)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
