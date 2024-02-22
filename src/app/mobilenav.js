import Link from 'next/link'

export default function MobileNav({ className }) {
  return (
    <nav className={`p-6 flex flex-col items-center bg-white text-black ${className}`}>
      <Link href="/about" className="p-2">
        About
      </Link>
      <Link href="/services" className="p-2">
        Services
      </Link>
      <Link href="/contact" className="p-2">
        Contact
      </Link>
    </nav>
  )
}