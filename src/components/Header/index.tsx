'use client';

import React from "react";

type HeaderProps = {
    children?: React.ReactNode
}
export default function Header({children}: HeaderProps) {
    console.log('HEADER')
     return (
     <div>
      <h1 className="text-xl font-bold text-blue-500 hover:text-blue-50 hover:bg-blue-500 transition duration-300"
      onClick={() => alert(123)}
      >{children}</h1>
  </div>
     )
}
