import React from "react";
import Circle from "./circle";

const Header = () => {
  return (
    <header className="w-full border-b mb-10">
      <div className="flex h-14 items-center px-4">
        <Circle />
        <div className="text-dark ml-2">Leonardo Martins</div>
      </div>
    </header>
  );
};

export default Header;
