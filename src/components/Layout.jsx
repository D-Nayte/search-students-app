import Head from "next/head";
import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Find a Masterschool student" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Student Search</title>
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
