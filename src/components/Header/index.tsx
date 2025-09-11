'use client';

import React from "react";

type HeaderProps = {
    children?: React.ReactNode,
    className?: string
}
export default function Header({children, className}: HeaderProps) {
    console.log('HEADER')
     return (
     <div>
      <h1 className={`text-xl font-bold text-blue-500 hover:text-blue-50 hover:bg-blue-500 transition duration-300 ${className}`}
      onClick={() => alert(123)}
      >{children}</h1>
  </div>
     )
}
