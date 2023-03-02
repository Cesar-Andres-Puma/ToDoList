import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";

import { Poppins } from "next/font/google";
import { ThemeProvider } from "styled-components";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
