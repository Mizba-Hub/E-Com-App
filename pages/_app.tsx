import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "../pages/Context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      <Footer />
    </>
  );
}
