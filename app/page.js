import AccordionFloat from "@/components/AccodionFloat";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import InvoiceCTA from "@/components/InvoiceCTA";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./libs/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <Hero />
      <Steps />
      <InvoiceCTA />
      <Steps />
      <Features />
      <Pricing />
      <AccordionFloat />
      {/* <FAQ /> */}
    </main>
  );
}
