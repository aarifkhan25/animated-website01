"use client";
import "../globals.css";
export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>
      <body className="bg-[#0d0d0d]">
        {children}
        </body>
        </html>)}