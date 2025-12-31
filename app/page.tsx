'use client'
import Link from 'next/link'
import { useState } from 'react'

type BlogPost = {
  id: number
  title: string
  date: string
  excerpt: string
  content: JSX.Element
}

export default function Home() {
  const [showAllPosts, setShowAllPosts] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "Birth Control",
      date: "March 20, 2024",
      excerpt: "Learn about different birth control options and find the right method for your lifestyle and health needs.",
      content: (
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            Choosing the right birth control method is an important decision that affects your health, lifestyle, and family planning goals. At Arizona Women Specialists, we provide comprehensive contraceptive counseling to help you make an informed choice.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Types of Birth Control</h2>
          
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Hormonal Methods</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Birth control pills (combination and progestin-only)</li>
            <li>Contraceptive patch</li>
            <li>Vaginal ring</li>
            <li>Hormonal IUD</li>
            <li>Contraceptive injection</li>
          </ul>

          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Non-Hormonal Methods</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Copper IUD</li>
            <li>Barrier methods (condoms, diaphragm)</li>
            <li>Fertility awareness methods</li>
            <li>Spermicides</li>
          </ul>

          <div className="bg-primary-light rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-primary mb-3">Schedule Your Consultation</h3>
            <p className="text-gray-700 mb-4">
              Ready to discuss your birth control options? Our experienced team is here to help you find the method that's right for you.
            </p>
            <a href="https://patient.klara.com/#/widget/publicScheduling/scheduling/YmM1NTkzMzg4Y2U2MTg5YjMxZDcwNmMyMDllNTJmNzFmMmM3ZmMwYTQyMDFkM2FjNDFlNjQ1NzM3MGQwCjk3MmEkRnd6WU54ckh1TlZ6VW5zZjNEcU5GZz09" target="_blank" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors inline-block">
              Book Appointment
            </a>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Essential Nutrition During Pregnancy",
      date: "March 15, 2024",
      excerpt: "Discover the key nutrients your body needs during pregnancy for optimal health and baby development.",
      content: (
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            Proper nutrition during pregnancy is crucial for both your health and your baby's development. Understanding what nutrients you need and when can help ensure a healthy pregnancy journey.
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Key Nutrients for Pregnancy</h2>
          <p className="text-gray-600 mb-4">Essential vitamins and minerals include folic acid, iron, calcium, and omega-3 fatty acids.</p>
        </div>
      )
    },
    {
      id: 3,
      title: "Understanding Menopause Symptoms",
      date: "March 10, 2024",
      excerpt: "Navigate menopause with confidence by understanding common symptoms and available treatments.",
      content: (
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            Menopause is a natural transition in a woman's life, but understanding the symptoms and available treatments can help you navigate this phase with confidence and comfort.
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Common Symptoms</h2>
          <p className="text-gray-600 mb-4">Hot flashes, night sweats, mood changes, and sleep disturbances are common during menopause.</p>
        </div>
      )
    }
  ]

  if (selectedBlog) {
    return (
      <div className="py-16 bg-pink-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-8">My Blog</h1>
          </div>
          
          <button 
            onClick={() => setSelectedBlog(null)}
            className="text-primary hover:underline mb-8 inline-flex items-center"
          >
            ◀ All Posts
          </button>
          
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">{selectedBlog.title}</h2>
            <p className="text-gray-500 text-sm mb-8">{selectedBlog.date}</p>
            
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed mb-6">
                  When feeling unsure about starting or growing your family, you may be considering your birth control options. At Arizona Women's Specialists in Glendale and Phoenix, Arizona, Hetal Shah, Kassandra Reil CNM and Traci Aldridge WHNP offer many types of birth control, from the pill to tubal ligation. No matter where you are in your life, the team at Arizona Women's Specialists has a family planning option for you. Schedule your birth control consultation by calling the office most convenient to you or booking an appointment <a href="https://patient.klara.com/#/widget/publicScheduling/scheduling/YmM1NTkzMzg4Y2U2MTg5YjMxZDcwNmMyMDllNTJmNzFmMmM3ZmMwYTQyMDFkM2FjNDFlNjQ1NzM3MGQwCjk3MmEkRnd6WU54ckh1TlZ6VW5zZjNEcU5GZz09" target="_blank" className="text-primary underline">online</a> today.
                </p>
                
                <div className="mt-8 pt-6 border-t">
                  <p className="text-gray-600 mb-4">Share this post:</p>
                  <div className="flex gap-4">
                    <button className="text-blue-600 hover:text-blue-800">Facebook</button>
                    <button className="text-gray-600 hover:text-gray-800">Twitter</button>
                  </div>
                </div>
              </div>
              
              <div className="w-48 flex-shrink-0">
                <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 100 100" className="text-gray-400">
                    <path d="M30 20 Q50 10 70 20 Q75 30 70 40 Q50 50 30 40 Q25 30 30 20 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="45" cy="35" r="2" fill="currentColor"/>
                    <path d="M35 60 Q50 70 65 60" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M40 75 Q50 80 60 75" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      {/* Top Banner - Always Visible */}
      <div className="bg-primary text-white py-3 relative z-40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-lg">
            * * Walk in FREE PREGNANCY TEST * *
          </p>
        </div>
      </div>

      {/* Static Navbar - Always Visible */}
      <nav className="bg-white relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
  <img src="/logo.jpg" alt="Arizona Women Specialists Logo" className="h-16 object-contain" />
</div>

            </div>
            
            <div className="flex items-center space-x-8">
              <Link href="/" className="group relative px-4 py-2 text-text-dark font-semibold transition-all duration-300">
                HOME
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="/hero.jpg" 
                alt="Pregnancy Care at Arizona Women Specialists" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                ENRICH YOUR PREGNANCY CARE AT
                <span className="block text-gray-800 mt-2">ARIZONA WOMEN SPECIALISTS</span>
              </h1>
              
              <p className="text-lg font-light text-gray-600 mb-4 leading-relaxed">
                Achieve optimal care with personalized attention
              </p>
              
              <p className="text-base font-medium text-gray-800 mb-8">
                Walk in SAME DAY APPOINTMENTS
              </p>
              
              <div className="flex gap-3 justify-center lg:justify-start">
                <a href="https://patient.klara.com/#/widget/publicScheduling/scheduling/YmM1NTkzMzg4Y2U2MTg5YjMxZDcwNmMyMDllNTJmNzFmMmM3ZmMwYTQyMDFkM2FjNDFlNjQ1NzM3MGQwCjk3MmEkRnd6WU54ckh1TlZ6VW5zZjNEcU5GZz09" target="_blank" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg">
                  BOOK YOUR APPOINTMENT
                </a>
                
                <Link href="/cash-pay" className="bg-white border-2 border-primary text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
                  CASH PAY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg font-sans text-gray-600">Comprehensive women's healthcare services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* FREE Pregnancy Test */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group">
              <img src="/s1.jpg" alt="FREE Pregnancy Test" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary text-center mb-4">FREE Pregnancy Test</h3>
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500">
                  <p className="text-text-dark mb-4 text-sm font-sans leading-relaxed">
                    Arizona Women Specialists offers FREE Pregnancy test with no appointment needed. We provide quick, confidential, and accurate results in a comfortable environment.
                  </p>
                  <p className="text-lg font-bold text-primary text-center font-sans">
                    JUST WALK IN! 😊
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group">
              <img src="/s2.jpg" alt="Our Mission" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary text-center mb-4">Our Mission</h3>
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500">
                  <p className="text-text-dark text-sm font-sans leading-relaxed">
                    Arizona Women's Specialists has been proudly serving the Phoenix Valley area for over two decades at offices in Glendale and Phoenix. We offer quality Gynecology and Maternity care to ensure every patient receives the ABCs:
                  </p>
                  <p className="text-center mt-3">
                    <em className="text-primary font-bold text-lg">"Absolute Best Care"</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group">
              <img src="/s3.jpg" alt="Our Team" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary text-center mb-4">Our Team</h3>
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500">
                  <p className="text-text-dark text-sm font-sans leading-relaxed">
                    Our Arizona Women's Specialists team includes amazing ultrasound technicians with a combined experience of more than 40 years. We offer advanced ultrasound services with the ability to send pictures directly to your phone via text messaging.
                  </p>
                  <p className="text-primary font-semibold text-center mt-3">
                    Experience You Can Trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Latest Health Insights</h2>
            <p className="text-lg font-sans text-gray-600">Stay informed with expert advice and health tips</p>
          </div>
          
          {!showAllPosts ? (
            <div className="flex justify-center">
              <div onClick={() => setSelectedBlog(blogPosts[0])} className="cursor-pointer">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm">
                  <div className="p-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 100 100" className="text-gray-400">
                        <path d="M30 20 Q50 10 70 20 Q75 30 70 40 Q50 50 30 40 Q25 30 30 20 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="45" cy="35" r="2" fill="currentColor"/>
                        <path d="M35 60 Q50 70 65 60" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <path d="M40 75 Q50 80 60 75" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm mb-2">March 20, 2024</p>
                    <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">Birth Control</h3>
                    <span className="text-primary font-semibold text-sm hover:underline">
                      Continue Reading
                    </span>
                  </div>
                </article>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} onClick={() => setSelectedBlog(post)} className="cursor-pointer">
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="p-8 text-center">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg width="48" height="48" viewBox="0 0 100 100" className="text-gray-400">
                          <path d="M30 20 Q50 10 70 20 Q75 30 70 40 Q50 50 30 40 Q25 30 30 20 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="45" cy="35" r="2" fill="currentColor"/>
                          <path d="M35 60 Q50 70 65 60" fill="none" stroke="currentColor" strokeWidth="2"/>
                          <path d="M40 75 Q50 80 60 75" fill="none" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                      <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">{post.title}</h3>
                      <span className="text-primary font-semibold text-sm hover:underline">
                        Continue Reading
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllPosts(!showAllPosts)}
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors inline-block shadow-lg"
            >
              {showAllPosts ? 'Show Less' : 'View All Articles'}
            </button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Our Locations</h2>
            <p className="text-lg font-sans text-gray-600">Visit us at our convenient locations</p>
          </div>
          
          {/* Maryvale Office */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Maryvale office</h3>
                <p className="text-gray-600 mb-4 italic">Better yet, see us in person!</p>
                <p className="text-sm text-blue-600 mb-6">We love our patients, so feel free to visit our office.</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">ARIZONA WOMENS SPECIALISTS</h4>
                  <p className="text-gray-600 mb-2">4700 North 51st Avenue, Phoenix, Arizona 85031</p>
                  <p className="text-primary font-semibold mb-4">623-846-7597</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Hours Monday - Friday</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Open today</span>
                    <span className="text-primary font-semibold">08:00 am - 05:00 pm</span>
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <button className="bg-white border-2 border-primary text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  GET DIRECTIONS
                </button>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-80 bg-gray-200 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8!2d-112.1707!3d33.5206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0f0f0f0f0f0f%3A0x0!2s4700%20N%2051st%20Ave%2C%20Phoenix%2C%20AZ%2085031!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white rounded p-1 shadow">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="bg-white rounded p-1 shadow hover:bg-gray-50">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="bg-white rounded p-1 shadow hover:bg-gray-50">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white border-2 border-primary text-primary px-3 py-1 rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      GET DIRECTIONS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrowhead Office */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Arrowhead office</h3>
                <p className="text-gray-600 mb-4 italic">Better yet, see us in person!</p>
                <p className="text-sm text-blue-600 mb-6">We love our patients, so feel free to visit our office.</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">ARIZONA WOMENS SPECIALISTS</h4>
                  <p className="text-gray-600 mb-2">18699 North 67th Avenue suite 320, Glendale, AZ, USA</p>
                  <p className="text-primary font-semibold mb-4">623-846-7597</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Hours Monday - Friday</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Open today</span>
                    <span className="text-primary font-semibold">08:00 am - 05:00 pm</span>
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <button className="bg-white border-2 border-primary text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  GET DIRECTIONS
                </button>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-80 bg-gray-200 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8!2d-112.2707!3d33.6206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0f0f0f0f0f0f%3A0x0!2s18699%20N%2067th%20Ave%20suite%20320%2C%20Glendale%2C%20AZ!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white rounded p-1 shadow">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="bg-white rounded p-1 shadow hover:bg-gray-50">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="bg-white rounded p-1 shadow hover:bg-gray-50">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white border-2 border-primary text-primary px-3 py-1 rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      GET DIRECTIONS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}