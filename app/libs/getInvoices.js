export async function getInvoices(userId) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/invoice?userId=${userId}`, {
    cache: "no-store",
  });
  const invoices = await res.json();
  return invoices;
}
