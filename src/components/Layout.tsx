import Navbar from "./Navbar";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
