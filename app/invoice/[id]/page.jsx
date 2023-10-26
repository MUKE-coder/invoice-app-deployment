import { getInvoiceById } from "@/app/libs/getInvoiceById";
import ActionButtons from "@/components/ActionButtons";
import FormPreview from "@/components/FormPreview";

export default async function InvoicePage({ params: { id } }) {
  const invoice = await getInvoiceById(id);
  console.log(invoice);
  return (
    <div className="my-8">
      <div className="">
        <ActionButtons invoiceId={id} />
      </div>
      <FormPreview data={invoice} />
    </div>
  );
}
