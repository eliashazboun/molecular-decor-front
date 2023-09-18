import getCategories from "@/actions/get-categories";
import React from "react";

const Footer = () => {

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto pb-10 pt-2">
        
        <p className="text-center text-xs text-black">
          &copy; 2023 Molecular Decor, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
