import Link from "next/link"

export default function Menu() {

  return (
  <>
  <ul className="navigation">
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
