"use client";
import FormPreview from "@/components/FormPreview";
import FormTable from "@/components/FormTable";
import { useReactToPrint } from "react-to-print";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useEffect, useRef, useState } from "react";
import {
  AiOutlineCloudDownload,
  AiOutlinePrinter,
  AiOutlineFileText,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";
import ThemeLink from "@/components/ThemeLink";
import Link from "next/link";
export default function CreateInvoice() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const invoiceRef = useRef();
  const [logoUrl, setLogoUrl] = useState("");
  const [preview, setPreview] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    invoiceAuthor: "",
    companyAddress: "",
    companyCity: "",
    companyCountry: "",
    clientCompany: "",
    clientAddress: "",
    clientCity: "",
    clientCountry: "",
    invoiceNumber: "",
    invoiceDate: "",
    invoiceDueDate: "",
    terms: "",
    notes: "",
  });
  const [tableData, setTableData] = useState([]);
  const [userId, setUserId] = useState();
  const [combinedData, setCombinedData] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const userId = await session?.user?.email;
    console.log(formData);
    const allFormData = {
      ...formData,
      logoUrl,
      userId,
      tableData,
    };
    setCombinedData(allFormData);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/invoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          invoiceData: { ...formData, logoUrl, userId },
          tableData,
        }),
      });
      const createdInvoice = await response.json();
      console.log(createdInvoice);
      setLoading(false);
      toast.success("Invoice Created");
      // router.push("/invoice");
      setPreview(!preview);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  console.log(combinedData);

  function updateTableData(newTableData) {
    setTableData(newTableData);
  }

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "unauthenticated") {
    return (
      <div className="gap-8 flex items-center h-screen justify-center flex-col">
        <h2 className="md:text-4xl text-2xl">
          Please Login to be able to create your first Invoice
        </h2>
        <ThemeLink
          className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
          title="Click here to Login to your Account"
          href="/login"
        />
      </div>
    );
  }
  return (
    <div className="bg-slate-50 py-8 md:py-8 px-4 md:px-16">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 ">
        {/* HEADER */}
        <div className="flex gap-4">
          <button
            onClick={() => setPreview(!preview)}
            className=" px-3 py-2  rounded-sm  border border-slate-600 "
          >
            {preview ? (
              <div className="flex items-center space-x-2">
                <BsLayoutTextWindowReverse />
                <span>Edit Form</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <BsLayoutTextWindowReverse />
                <span>Preview</span>
              </div>
            )}
          </button>
        </div>
        <div className="flex gap-4">
          <a
            href="/invoice"
            className="flex items-center space-x-2 px-3 py-2  rounded-sm  border border-slate-600 "
          >
            <AiOutlineFileText />
            <span>View Invoices</span>
          </a>
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-3 py-2  rounded-sm  border border-slate-600 "
          >
            <AiOutlinePrinter />
            <span>Print/Download</span>
          </button>
        </div>
      </div>
      {/* INVOICE FORM */}

      {preview ? (
        <div ref={invoiceRef}>
          <FormPreview data={combinedData} />
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto"
        >
          {/* Image & Invoice Label */}
          <div className="flex justify-between items-center">
            {/* Image */}

            <div className="flex items-center justify-center ">
              {logoUrl ? (
                <CldImage
                  width="240"
                  height="240"
                  src={logoUrl}
                  alt="Invoice Logo"
                />
              ) : (
                <div>
                  <CldUploadButton
                    className="flex flex-col items-center justify-center w-48 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 text-sm text-gray-500 dark:text-gray-400"
                    onUpload={(data) => {
                      console.log(data.info.secure_url);
                      setLogoUrl(data.info.secure_url);
                    }}
                    uploadPreset="InvoicePreset"
                  />
                </div>
              )}
            </div>

            <h2 className="text-4xl uppercase font-semibold">Invoice</h2>
          </div>
          {/* Company Details */}
          <div className="flex flex-col w-1/2 mt-6">
            <input
              className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400 "
              type="text"
              placeholder="Your Company"
              name="companyName"
              onChange={handleInputChange}
              value={formData.companyName}
            />
            <input
              className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
              type="text"
              placeholder="Your Name"
              name="invoiceAuthor"
              onChange={handleInputChange}
              value={formData.invoiceAuthor}
            />
            <input
              className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
              type="text"
              placeholder="Company Address"
              name="companyAddress"
              onChange={handleInputChange}
              value={formData.companyAddress}
            />
            <input
              className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="City,State zip"
              name="companyCity"
              onChange={handleInputChange}
              value={formData.companyCity}
            />
            <input
              className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Country eg USA"
              name="companyCountry"
              onChange={handleInputChange}
              value={formData.companyCountry}
            />
          </div>
          {/* CLIENT dETAILS */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-1/2 mt-6">
              <h2 className="mb-2 font-semibold">Bill To</h2>
              <input
                className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                type="text"
                placeholder="Your Client's Company"
                name="clientCompany"
                onChange={handleInputChange}
                value={formData.clientCompany}
              />
              <input
                className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                type="text"
                placeholder="Client's Address"
                name="clientAddress"
                onChange={handleInputChange}
                value={formData.clientAddress}
              />
              <input
                className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="City,State zip"
                name="clientCity"
                onChange={handleInputChange}
                value={formData.clientCity}
              />
              <input
                className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="Country eg USA"
                name="clientCountry"
                onChange={handleInputChange}
                value={formData.clientCountry}
              />
            </div>
            <div className="flex flex-col w-1/2 mt-6">
              <div className="flex gap-2">
                <label
                  className="text-slate-500 font-bold"
                  htmlFor="invoiceNumber"
                >
                  Invoice #
                </label>
                <input
                  className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                  type="text"
                  placeholder="INV-202"
                  name="invoiceNumber"
                  onChange={handleInputChange}
                  value={formData.invoiceNumber}
                />
              </div>
              <div className="flex gap-2">
                <label
                  className="text-slate-500 font-bold"
                  htmlFor="invoiceDate"
                >
                  Invoice Date #
                </label>
                <input
                  className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                  type="date"
                  name="invoiceDate"
                  onChange={handleInputChange}
                  value={formData.invoiceDate}
                />
              </div>
              <div className="flex gap-2">
                <label className="text-slate-500 font-bold" htmlFor="dueDate">
                  Due Date #
                </label>
                <input
                  className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                  type="date"
                  name="invoiceDueDate"
                  onChange={handleInputChange}
                  value={formData.invoiceDueDate}
                />
              </div>
            </div>
          </div>
          {/* TABLE */}
          <FormTable updateTableData={updateTableData} />
          <div className="flex flex-col w-full my-6">
            <label
              htmlFor="notes"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Notes
            </label>
            <textarea
              id="notes"
              rows="2"
              name="notes"
              onChange={handleInputChange}
              value={formData.notes}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-transparent rounded-lg 
              border-0 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Write your notes here..."
            ></textarea>
          </div>
          <div className="flex flex-col w-full my-6">
            <label
              htmlFor="terms"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Terms and Conditions
            </label>
            <textarea
              id="terms"
              rows="2"
              name="terms"
              onChange={handleInputChange}
              value={formData.terms}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-transparent rounded-lg 
              border-0 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Write your terms and conditions here..."
            ></textarea>
          </div>

          {loading ? (
            <button
              disabled
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Creating Invoice...
            </button>
          ) : (
            <button
              className="bg-purple-600 py-2.5 px-6 text-white rounded"
              type="submit"
            >
              Create Invoice
            </button>
          )}
        </form>
      )}

      {/* INVOICE PREVIEW */}
    </div>
  );
}
