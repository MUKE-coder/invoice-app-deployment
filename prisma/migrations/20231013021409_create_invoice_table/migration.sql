-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "invoiceAuthor" TEXT NOT NULL,
    "companyAddress" TEXT NOT NULL,
    "companyCity" TEXT NOT NULL,
    "companyCountry" TEXT NOT NULL,
    "clientCompany" TEXT NOT NULL,
    "clientAddress" TEXT NOT NULL,
    "clientCity" TEXT NOT NULL,
    "clientCountry" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "invoiceDate" TIMESTAMP(3) NOT NULL,
    "invoiceDueDate" TIMESTAMP(3) NOT NULL,
    "logoUrl" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Row" (
    "id" SERIAL NOT NULL,
    "itemDescription" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "invoiceId" INTEGER NOT NULL,

    CONSTRAINT "Row_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Row" ADD CONSTRAINT "Row_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
