/*
  Warnings:

  - Added the required column `notes` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terms` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "terms" TEXT NOT NULL;
