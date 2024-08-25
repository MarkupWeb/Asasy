import { useTranslations } from "next-intl";



import { Metadata } from "next";
import CategoryRender from "@/Components/UI-Render/Category/CategoryRender";
import Hero from "@/Components/Sections/Hero";

export const metadata: Metadata = {
  
  // other metadata
};

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CategoryRender />
      
    </main>
  );
}
