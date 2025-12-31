import Link from 'next/link'

export default function BirthControlPost() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-primary hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8 text-center">
            <p className="text-gray-500 text-sm mb-2">March 20, 2024</p>
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Birth Control</h1>
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 100 100" className="text-gray-400">
                <path d="M30 20 Q50 10 70 20 Q75 30 70 40 Q50 50 30 40 Q25 30 30 20 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="45" cy="35" r="2" fill="currentColor"/>
                <path d="M35 60 Q50 70 65 60" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M40 75 Q50 80 60 75" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </header>

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

            <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Choosing the Right Method</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The best birth control method for you depends on several factors including your health history, lifestyle, and personal preferences. During your consultation, we'll discuss:
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Your medical history and current health status</li>
              <li>How often you're comfortable with maintenance</li>
              <li>Whether you want hormonal or non-hormonal options</li>
              <li>Your future pregnancy plans</li>
              <li>Any side effects you want to avoid</li>
            </ul>

            <div className="bg-primary-light rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Schedule Your Consultation</h3>
              <p className="text-gray-700 mb-4">
                Ready to discuss your birth control options? Our experienced team is here to help you find the method that's right for you.
              </p>
              <Link href="/appointment" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors inline-block">
                Book Appointment
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}