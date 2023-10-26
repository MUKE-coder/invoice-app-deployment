import db from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { invoiceData, tableData } = await request.json();
    console.log(invoiceData);
    //2) Create invoice using the invoice data
    console.log(invoiceData.userId);
    const invoice = await db.invoice.create({
      data: {
        userId: invoiceData.userId,
        companyName: invoiceData.companyName,
        invoiceAuthor: invoiceData.invoiceAuthor,
        companyAddress: invoiceData.companyAddress,
        companyCity: invoiceData.companyCity,
        companyCountry: invoiceData.companyCountry,
        clientCompany: invoiceData.clientCompany,
        clientAddress: invoiceData.clientAddress,
        clientCity: invoiceData.clientCity,
        clientCountry: invoiceData.clientCountry,
        invoiceNumber: invoiceData.invoiceNumber,
        invoiceDate: `${invoiceData.invoiceDate}T00:00:00Z`,
        invoiceDueDate: `${invoiceData.invoiceDueDate}T00:00:00Z`,
        notes: invoiceData.notes,
        terms: invoiceData.terms,
        logoUrl: invoiceData.logoUrl,
      },
    });
    //3) Create the table using the table Data
    const rowsPromise = tableData.map(async (rowData) => {
      const row = await db.row.create({
        data: {
          invoiceId: invoice.id,
          itemDescription: rowData.itemDescription,
          qty: parseInt(rowData.qty),
          unitPrice: parseFloat(rowData.unitPrice),
          tax: parseFloat(rowData.tax),
          amount: parseFloat(rowData.amount),
        },
      });
      return row;
    });
    // Use Promise.all to await all row creation promises
    const rows = await Promise.all(rowsPromise);
    console.log(invoice);
    return NextResponse.json(invoiceData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request, { searchParams }) {
  try {
    const userId = request.nextUrl.searchParams.get("userId");
    console.log(`The userId is${userId}`);
    const invoices = await db.invoice.findMany({
      include: {
        tableData: true,
      },
      where: { userId },
    });
    // console.log(invoices);
    return NextResponse.json(invoices);
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch invoices",
        error,
      },
      { status: 500 }
    );
  }
}
