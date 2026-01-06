import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function CashPay() {
  return (
    <div>
      <Navbar />

      {/* Cash Pay Content */}
      <div className="py-16 bg-pink-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl font-serif font-bold text-text-dark mb-4">Cash pay Price list</h1>
            <p className="text-text-grey mb-6">Arizona Women Specialist office offer lowest prices for CASH PAY patients.</p>
            <a href="https://patient.klara.com/#/widget/publicScheduling/scheduling/YmM1NTkzMzg4Y2U2MTg5YjMxZDcwNmMyMDllNTJmNzFmMmM3ZmMwYTQyMDFkM2FjNDFlNjQ1NzM3MGQwCjk3MmEkRnd6WU54ckh1TlZ6VW5zZjNEcU5GZz09" target="_blank" className="bg-white border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors">
              BOOK YOUR APPOINTMENT
            </a>
          </div>

          {/* Menu Header */}
          <div className="mb-8">
            <p className="text-primary text-sm font-semibold">MENU / PRICE LIST</p>
          </div>

          {/* FREE PREGNANCY TEST Section */}
          <div className="mb-12">
            <h2 className="text-xl font-serif font-bold text-text-dark mb-2">FREE PREGNANCY TEST</h2>
            <p className="text-text-grey text-sm mb-6">Walk in free pregnancy test and free first OB ultrasound</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="text-primary text-sm font-semibold">Provider visit - Established Patient</p>
                </div>
                <p className="text-text-dark font-bold text-xl">$75</p>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="text-primary text-sm font-semibold">Provider visit- New Patient</p>
                </div>
                <p className="text-text-dark font-bold text-xl">$100</p>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="text-text-dark text-sm font-semibold">Ultrasounds</p>
                  <p className="text-text-grey text-xs">OB and GYN ultrasounds</p>
                </div>
                <p className="text-text-dark font-bold text-xl">$75</p>
              </div>
            </div>
          </div>

          {/* Family Planning Services Section */}
          <div className="mb-12">
            <h2 className="text-xl font-serif font-bold text-text-dark mb-2">Family planning services</h2>
            <p className="text-text-grey text-sm mb-6">Contraceptive management</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="text-primary text-sm font-semibold">Depo shot</p>
                  <p className="text-text-grey text-xs">Injection</p>
                </div>
                <p className="text-text-dark font-bold text-xl">$50</p>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="text-text-dark text-sm font-semibold">IUD Insertion</p>
                  <p className="text-text-grey text-xs">Mirena, Paragard, Liletta, Kyla... etc</p>
                </div>
                <p className="text-text-dark font-bold text-xl">$150</p>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="text-text-dark text-sm font-semibold">IUD Removal</p>
                  <p className="text-text-grey text-xs">All IUD's, Nexplanon etc</p>
                </div>
                <p className="text-text-dark font-bold text-xl">$100</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-text-grey text-sm">Contact Office 623-846-7597</p>
          </div>
        </div>
      </div>
          <Footer />

    </div>
  )
}