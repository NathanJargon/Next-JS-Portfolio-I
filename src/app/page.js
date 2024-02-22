import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative flex flex-col items-start w-full">
      <nav className="p-6 w-full flex justify-between items-center">
        <div className="flex flex-col items-center">
          <Link href="/" passHref>
            <div className="p-2 inline-flex items-center text-3xl text-white font-bold uppercase tracking-wide hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:translate-y-1">
              <img src="/assets/logo.png" alt="Logo" className="h-48 w-48" />
            </div>
          </Link>
          <div className="flex flex-col items-center mt-6">
            <Link href="/about" passHref>
              <div className="px-3 py-2 rounded text-white font-bold hover:font-extrabold hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:translate-y-1 text-2xl">
                About
              </div>
            </Link>
            <Link href="/services" passHref>
              <div className="px-3 py-2 rounded text-white font-bold hover:font-extrabold hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:translate-y-1 text-2xl">
                Services
              </div>
            </Link>
            <Link href="/contact" passHref>
              <div className="px-3 py-2 rounded text-white font-bold hover:font-extrabold hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:translate-y-1 text-2xl">
                Contact
              </div>
            </Link>
          </div>
        </div>
        <h1 className="absolute top-2 right-2 text-white text-2xl underline pb-2">Nathan Jargon</h1>
      </nav>
    </div>
  )
}