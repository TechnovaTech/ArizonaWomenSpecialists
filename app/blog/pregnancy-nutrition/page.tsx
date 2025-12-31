import Link from 'next/link'

export default function PregnancyNutritionPost() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-primary hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8 text-center">
            <p className="text-gray-500 text-sm mb-2">March 15, 2024</p>
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Essential Nutrition During Pregnancy</h1>
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
              Proper nutrition during pregnancy is crucial for both your health and your baby's development. Understanding what nutrients you need and when can help ensure a healthy pregnancy journey.
            </p>

            <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Key Nutrients for Pregnancy</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Folic Acid</h3>
            <p className="text-gray-600 mb-4">Essential for preventing neural tube defects. Take 400-800 mcg daily before conception and during early pregnancy.</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Iron</h3>
            <p className="text-gray-600 mb-4">Supports increased blood volume and prevents anemia. Aim for 27mg daily through supplements and iron-rich foods.</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Calcium</h3>
            <p className="text-gray-600 mb-4">Critical for baby's bone development. You need 1,000mg daily from dairy, leafy greens, and fortified foods.</p>

            <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Foods to Include</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Leafy green vegetables (spinach, kale)</li>
              <li>Lean proteins (chicken, fish, beans)</li>
              <li>Whole grains (quinoa, brown rice)</li>
              <li>Dairy products (milk, yogurt, cheese)</li>
              <li>Fruits rich in vitamin C (oranges, berries)</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Foods to Avoid</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Raw or undercooked meats and eggs</li>
              <li>High-mercury fish (shark, swordfish)</li>
              <li>Unpasteurized dairy products</li>
              <li>Excessive caffeine (limit to 200mg daily)</li>
              <li>Alcohol</li>
            </ul>

            <div className="bg-primary-light rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Personalized Nutrition Guidance</h3>
              <p className="text-gray-700 mb-4">
                Every pregnancy is unique. Schedule a consultation to discuss your specific nutritional needs and create a personalized plan.
              </p>
              <Link href="/appointment" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors inline-block">
                Book Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}