'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>
      <ul className="navigation clearfix">
        {/*Keep This Empty / Menu will come through Javascript*/}
       <li className=""><Link href="/">Home</Link>
    </li>
    <li className=""><Link href="/about">About Us</Link>
    </li>
    <li className=""><Link href="/about">How we started</Link>
    </li>
    <li className=""><Link href="/services">Services</Link>
    </li>
    <li className=""><Link href="/blog">Blogs</Link>  
    </li>
      </ul>

    </>
  )
}
