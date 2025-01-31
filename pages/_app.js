import "@/styles/globals.css";
import { Lato } from "@next/font/google";

const customFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={customFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
