"use client";
import React from "react";

const CopyrightYear = () => {
  const year = new Date().getFullYear();

  return <p className="footer-copyright mb-4">Copyright &copy; {year}, CV</p>;
};

export default CopyrightYear;
