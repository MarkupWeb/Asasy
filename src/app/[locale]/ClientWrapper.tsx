"use client";
import "../../styles/index.css";


import LocaleSwitcher from "@/Components/LocalSwitcher/local-switcher";
// import Footer from "@/components/Common/Footer";
// import ScrollToTop from "@/components/Common/ScrollToTop";

import { Providers } from "./providers";
import StoreProvider from "./storeProvider";
import Header from "@/Components/Common/Header";
import { ProvidersTheme } from "./ThemeProvider";
import AddFirst from "@/Components/Common/Header/AddFirst";

interface ClientWrapperProps {
  children: React.ReactNode;
  locale: string;
  dir?: string;
}



export default function ClientWrapper({ children, locale, dir }: ClientWrapperProps) {
  return (
    <ProvidersTheme>
    <StoreProvider>
      <Providers locale={locale}>
      <AddFirst />
        <Header />
        <div className="" dir={dir}>

        {children}
        </div>
        {/* <Footer />
        <ScrollToTop /> */}
      </Providers>
    </StoreProvider>
    </ProvidersTheme>
  );
}