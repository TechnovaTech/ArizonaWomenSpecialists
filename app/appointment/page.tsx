'use client'
import { useState } from 'react'

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('Appointment request submitted! We will contact you soon to confirm.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-poppins font-bold text-text-dark mb-4">Book Your Appointment</h1>
          <p className="text-xl text-text-grey max-w-3xl mx-auto">
            Schedule your visit with our experienced women's health specialists. We're here to provide you with compassionate, personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-dark mb-2">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="gynecology">Gynecology</option>
                    <option value="pregnancy">Pregnancy Care</option>
                    <option value="infertility">Infertility Treatment</option>
                    <option value="ultrasound">Ultrasound</option>
                    <option value="menopause">Menopause Management</option>
                    <option value="wellness">Women's Wellness</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-text-dark mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Any additional information or special requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Submit Appointment Request
              </button>
            </form>
          </div>

          <div>
            <div className="bg-primary-light rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-poppins font-bold text-text-dark mb-6">What to Expect</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary text-xl mr-3">1️⃣</span>
                  <div>
                    <h3 className="font-semibold text-text-dark">Submit Request</h3>
                    <p className="text-text-grey text-sm">Fill out the appointment form with your details</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary text-xl mr-3">2️⃣</span>
                  <div>
                    <h3 className="font-semibold text-text-dark">Confirmation Call</h3>
                    <p className="text-text-grey text-sm">We'll call within 24 hours to confirm your appointment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary text-xl mr-3">3️⃣</span>
                  <div>
                    <h3 className="font-semibold text-text-dark">Your Visit</h3>
                    <p className="text-text-grey text-sm">Arrive 15 minutes early for check-in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-poppins font-bold text-text-dark mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-3">📞</span>
                  <div>
                    <p className="font-semibold text-text-dark">Phone</p>
                    <p className="text-text-grey">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-3">✉️</span>
                  <div>
                    <p className="font-semibold text-text-dark">Email</p>
                    <p className="text-text-grey">appointments@womencarehosp.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-3">🕒</span>
                  <div>
                    <p className="font-semibold text-text-dark">Hours</p>
                    <p className="text-text-grey">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-text-grey">Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}