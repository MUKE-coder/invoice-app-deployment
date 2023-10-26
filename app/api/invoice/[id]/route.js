import db from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const invoice = await prisma.invoice.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        tableData: true,
      },
    });
    console.log(invoice);
    return NextResponse.json(invoice);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch invoice",
        error,
      },
      { status: 500 }
    );
  }
}
