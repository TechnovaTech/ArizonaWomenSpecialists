'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'translate-y-0 bg-white/95 backdrop-blur-md shadow-lg' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
  <img src="./logo.jpg" alt="Arizona Women Specialists Logo" className="h-16 object-contain" />
</div>

          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="group relative px-4 py-2 text-text-dark font-semibold transition-all duration-300">
              <span className="relative z-10">HOME</span>
              <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
            </Link>
            <Link href="/services" className="group relative px-4 py-2 text-text-dark hover:text-primary font-semibold transition-all duration-300 overflow-hidden">
              <span className="relative z-10">SERVICES</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
            <Link href="/cash-pay" className="group relative px-4 py-2 text-text-dark hover:text-primary font-semibold transition-all duration-300 overflow-hidden">
              <span className="relative z-10">CASH PAY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200/50">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link href="/" className="block px-3 py-2 text-text-dark hover:text-primary">HOME</Link>
              <Link href="/services" className="block px-3 py-2 text-text-dark hover:text-primary">SERVICES</Link>
              <Link href="/cash-pay" className="block px-3 py-2 text-text-dark hover:text-primary">CASH PAY</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}