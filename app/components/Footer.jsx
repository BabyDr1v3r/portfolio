import React from "react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-5 flex justify-between items-center">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src="/logo.png" alt="logo" width={100} height={100}/>
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
