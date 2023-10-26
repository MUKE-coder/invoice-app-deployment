"use client";
import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
export default function FormTable({ updateTableData }) {
  const [tableData, setTableData] = useState([
    {
      itemDescription: "",
      qty: "",
      unitPrice: "",
      tax: "",
      amount: "",
    },
  ]);
  function addRow() {
    setTableData([
      ...tableData,
      {
        itemDescription: "",
        qty: "",
        unitPrice: "",
        tax: "",
        amount: "",
      },
    ]);
  }
  function removeRow(index) {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  }
  function handleInputChange(index, e) {
    const { name, value } = e.target;
    const updatedData = [...tableData];
    updatedData[index][name] = value;
    if (name == "qty" || name == "unitPrice") {
      const qty = parseFloat(updatedData[index].qty);
      const price = parseFloat(updatedData[index].unitPrice);
      if (!isNaN(qty) && !isNaN(price)) {
        updatedData[index].amount = (qty * price).toFixed(2);
      } else {
        updatedData[index].amount = "";
      }
    }
    setTableData(updatedData);
    updateTableData(updatedData);
    // console.log(updatedData);
  }

  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg my-6">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item Description
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Price
            </th>
            <th scope="col" className="px-6 py-3">
              Tax
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <input
                    className="bg-transparent text-base border-0 p-1 mb-2 h-7 w-3/4 placeholder:text-slate-400"
                    type="text"
                    placeholder="item description"
                    name="itemDescription"
                    value={row.itemDescription}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </th>
                <td className="px-6 py-4">
                  <input
                    className="bg-transparent text-base border-0 p-1 mb-2 h-7 w-12 placeholder:text-slate-400"
                    type="number"
                    placeholder="2"
                    name="qty"
                    value={row.qty}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="bg-transparent text-base border-0 p-1 mb-2 h-7 w-24 placeholder:text-slate-400"
                    type="number"
                    placeholder="5"
                    name="unitPrice"
                    value={row.unitPrice}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="bg-transparent text-base border-0 p-1 mb-2 h-7 w-12 placeholder:text-slate-400"
                    type="number"
                    placeholder="10"
                    name="tax"
                    value={row.tax}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="bg-transparent text-base border-0 p-1 mb-2 h-7 w-24 placeholder:text-slate-400"
                    type="number"
                    placeholder="2"
                    name="amount"
                    value={row.amount}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <span onClick={() => removeRow(index)}>
                    <AiOutlineCloseCircle className="text-base text-red-600" />
                  </span>
                </td>
              </tr>
            );
          })}

          <button
            onClick={addRow}
            type="button"
            className="my-3 flex items-center space-x-2 text-purple-600 font-bold"
          >
            <AiOutlinePlus className="text-base" />
            <span>Add line item</span>
          </button>
        </tbody>
      </table>
    </div>
  );
}
