import "@/styles/globals.css";

import { Roboto } from "@next/font/google";

const customFont = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={customFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
