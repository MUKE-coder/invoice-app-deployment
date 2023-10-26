import React from "react";
import { IoReturnUpBack } from "react-icons/io5";

export default function PreviewTable({ tableData }) {
  console.log(tableData);
  const totalSum =
    tableData?.reduce((sum, row) => {
      const amount = parseFloat(row.amount);
      if (!isNaN(amount)) {
        return sum + amount;
      }
      return sum;
    }, 0) ?? 0;

  return (
    <div className="relative overflow-x-auto">
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
          {tableData?.map((row, i) => {
            const { itemDescription, qty, unitPrice, tax, amount } = row;
            return (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {itemDescription}
                </th>
                <td className="px-6 py-4">{qty}</td>
                <td className="px-6 py-4">${unitPrice}</td>
                <td className="px-6 py-4">{tax}</td>
                <td className="px-6 py-4 text-base font-bold">${amount}</td>
              </tr>
            );
          })}

          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            ></th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4 font-bold text-slate-800 text-base uppercase">
              Total Amount:
            </td>
            <td className="px-6 py-4 text-base uppercase font-bold text-slate-900">
              ${totalSum.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
