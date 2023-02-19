import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import logo from "../../public/medi.png";
import Hero from "@/sections/Hero";
import Features from "@/sections/features";
import Stats from "@/sections/stats";
import { Benifits } from "@/sections/benifits";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MediChain</title>
        <meta name="description" content="Safe and secure files" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <Stats />
      <Benifits />
    </>
  );
}
