'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWeightLossDropdownOpen, setIsWeightLossDropdownOpen] = useState(false)
  const [isGlpDropdownOpen, setIsGlpDropdownOpen] = useState(false)
  const [isMobileWeightLossOpen, setIsMobileWeightLossOpen] = useState(false)
  const [isMobileGlpOpen, setIsMobileGlpOpen] = useState(false)

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
            <div 
              className="relative"
              onMouseEnter={() => setIsWeightLossDropdownOpen(true)} 
              onMouseLeave={() => setIsWeightLossDropdownOpen(false)}
            >
              <button className="group relative px-4 py-2 text-text-dark hover:text-primary font-semibold transition-all duration-300 overflow-hidden flex items-center">
                <span className="relative z-10">WEIGHT LOSS</span>
                <ChevronDown className="w-4 h-4 ml-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
              <AnimatePresence>
                {isWeightLossDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    <Link href="/weight-loss" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Weight Loss Overview
                    </Link>
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsGlpDropdownOpen(true)} 
                      onMouseLeave={() => setIsGlpDropdownOpen(false)}
                    >
                      <Link href="/glp-1" className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                        <span>GLP-1</span>
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                      <AnimatePresence>
                        {isGlpDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-full top-0 ml-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          >
                            <Link href="/medical-weight-loss" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                              Medical Weight Loss Program
                            </Link>
                            <Link href="/doctor-mentored" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                              Doctor Mentored
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
              
              <div className="relative">
                <button 
                  onClick={() => setIsMobileWeightLossOpen(!isMobileWeightLossOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-text-dark hover:text-primary"
                >
                  <span>WEIGHT LOSS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileWeightLossOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileWeightLossOpen && (
                  <div className="pl-4 space-y-1">
                    <button 
                      onClick={() => setIsMobileGlpOpen(!isMobileGlpOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 text-gray-600 hover:text-primary"
                    >
                      <span>GLP-1</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileGlpOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileGlpOpen && (
                      <div className="pl-4 space-y-1">
                        <Link href="/medical-weight-loss" className="block px-3 py-2 text-gray-500 hover:text-primary">
                          Medical Weight Loss Program
                        </Link>
                        <Link href="/doctor-mentored" className="block px-3 py-2 text-gray-500 hover:text-primary">
                          Doctor Mentored
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <Link href="/cash-pay" className="block px-3 py-2 text-text-dark hover:text-primary">CASH PAY</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}