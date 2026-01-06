'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { CheckCircle, Star, Users, Phone, Calendar, Award, Target, Heart, Zap } from 'lucide-react'

export default function GLP1Page() {
  const treatments = [
    {
      name: "Medical Weight Loss Program",
      description: "Physician-supervised weight loss programs designed for safe, effective, and lasting results",
      benefits: ["Medical Supervision", "Personalized Plans", "Health Monitoring"],
      link: "/medical-weight-loss"
    },
    {
      name: "Doctor Mentored",
      description: "Get personalized guidance from experienced physicians who specialize in weight management",
      benefits: ["Expert Medical Guidance", "Personal Mentorship", "Regular Check-ins"],
      link: "/doctor-mentored"
    }
  ]

  const testimonials = [
    { name: "Chuck", weight: "66 lbs", quote: "The best thing I did was call the Arizona Women Specialists. I have a lot more energy, I'm not hungry, and it feels great." },
    { name: "Emily", weight: "61 lbs", quote: "Here I am at the lowest I have been since high school weighing in at 155lbs. I have lost 61.5lbs." },
    { name: "Gina", weight: "44.5 lbs", quote: "They truly helped me change my life forever." },
    { name: "Lauren", weight: "60 lbs", quote: "I am down 60 lbs., which is the average amount a 9-year-old weighs, it is crazy to think I lost a whole person!" }
  ]

  return (
    <>
      
      
      <Navbar />
      
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[50vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-r from-primary/15 via-primary/8 to-primary/20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-7xl lg:text-8xl font-light mb-8 tracking-wider text-gray-800"
                style={{ fontFamily: 'serif' }}
              >
                GLP-1
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-700 mb-8 max-w-md mx-auto"
              >
                Conveniently Located To Serve Phoenix, Glendale, and Arizona
              </motion.p>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/60 via-primary/40 to-primary/70"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/25 to-transparent"></div>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                GLP-1 Treatment at Arizona Women Specialists
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p className="mb-6">
                  Welcome to Arizona Women Specialists, where we are committed to helping you achieve your weight loss goals through cutting-edge treatments. We are proud to offer exceptional weight loss solutions, including our GLP-1 Weight Loss Treatment.
                </p>
                <p className="mb-6">
                  GLP-1 is a potent GLP-1 receptor agonist that has garnered significant attention for its efficacy in helping individuals shed excess pounds and improve their overall health.
                </p>
                <p className="mb-8">
                  GLP-1 is just one option available to our patients. We have also successfully treated countless patients with Mounjaro, Ozempic, and Wegovy.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Programs Section */}
        <section className="py-12 relative overflow-hidden bg-gray-50">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-800 mb-12 text-center"
            >
              Our Programs
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group"
                >
                  <div className="h-full shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white rounded-lg border-0">
                    <div className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-primary/8 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                          {index === 0 ? (
                            <Heart className="w-8 h-8 text-primary" />
                          ) : (
                            <Users className="w-8 h-8 text-primary" />
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-3">{treatment.name}</h3>
                      </div>
                      
                      <p className="text-gray-700 mb-8 text-center leading-relaxed">{treatment.description}</p>
                      
                      <div className="flex justify-center">
                        <Link href={treatment.link} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src="/hero.jpg" 
                    alt="Weight loss success" 
                    className="w-full h-auto rounded-lg shadow-lg" 
                  />
                </motion.div>
                
                {/* Right side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Lose the weight. Get healthy. Feel better in your own body.
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    {[
                      { icon: Heart, text: "If you're ready to lose weight (and do it for good this time), we're the experts you can trust." },
                      { icon: Users, text: "We've worked with hundreds of patients over decades of practice with our doctors, helping people just like you." },
                      { icon: Target, text: "We'll guide you through the fastest & easiest way to lose the weight AND keep it off." }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <item.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href="https://patient.klara.com/#/widget/publicScheduling/scheduling/YmM1NTkzMzg4Y2U2MTg5YjMxZDcwNmMyMDllNTJmNzFmMmM3ZmMwYTQyMDFkM2FjNDFlNjQ1NzM3MGQwCjk3MmEkRnd6WU54ckh1TlZ6VW5zZjNEcU5GZz09" target="_blank" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg rounded-full font-semibold transition-colors">
                      Call Now
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-800 mb-12 text-center"
            >
              Success Stories
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg"
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary mb-2">-{testimonial.weight}</div>
                    <div className="text-lg font-semibold text-gray-800">{testimonial.name}</div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}