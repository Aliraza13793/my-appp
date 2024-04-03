import React from "react";
import Link from "next/link";
export default function Header(){
    return(
       <div className="flex bg-gray-300 p-4 gap-6">
         <Link href="/" className="text-orange-300">Home</Link>
        <Link href="about" className="text-green-300">About</Link>
        <Link href="contact" className="text-yellow-300">Contact</Link>
        <Link href="Dashboard" className="text-red-800">Dashboard</Link>
        <Link href="Dashboard/setting"className="text-pink-500 ">Settings</Link>
        </div>
    )
}