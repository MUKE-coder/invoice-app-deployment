export async function getInvoiceById(id) {
  const baseUrl =process.env.NEXT_PUBLIC_BASE_URL
  const res = await fetch(`${baseUrl}/api/invoice/${id}`, {
    cache: "no-store",
  });
  const invoice = await res.json();
  return invoice;
}
