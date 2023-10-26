import * as React from "react";
import { Link } from "@react-email/link";
export function EmailTemplate({ invoiceUrl }) {
  return (
    <div>
      <h1>Here is Your Invoice!</h1>
      <Link href={invoiceUrl}>View Invoice</Link>
    </div>
  );
}
