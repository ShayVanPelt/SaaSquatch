import Image from "next/image";
import Head from "next/head";
import { Header } from "@/sections/Header";
import { Welcome } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { Why } from "@/sections/Why";
import { Me } from "@/sections/Me";
import { ThankYou } from "@/sections/ThankYou";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Welcome></Welcome>
      <Why></Why>
      <Me></Me>
      <ThankYou></ThankYou>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}
