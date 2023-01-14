import React from "react";
import Head from "next/head";

interface SEO {
  title: string;
}

function Seo({ title }: SEO) {
  return (
    <div>
      <Head>
        <title>{title} | Next Movies</title>
      </Head>
    </div>
  );
}

export default Seo;
