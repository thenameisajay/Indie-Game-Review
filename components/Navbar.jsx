import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <>
               <nav>
            <ul className= "flex gap-2">
              <li>
               <Link href="/"
               className="text-orange-800 hover:underline font-orbitron font-bold">
           indie Gamer
                </Link>
              </li>
              <li className="ml-auto">
              <Link href="/reviews "
               className="text-orange-800 hover:underline">
            Reviews
                </Link>
              </li>
              <li>
              <Link href="/about"
               className="text-orange-800 hover:underline">
           About
                </Link>
              </li>
            </ul>
          </nav>
        </>
    );
}