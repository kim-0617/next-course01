import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />

      <style>{`
        * {
          margin : 0;
          padding : 0;
        }
        a {
          text-decoration:none;
          color : #000;
        }
        li { 
          list-style : none;
        }
      `}</style>
    </Layout>
  );
}
