import Link from 'next/link'

export default function MenopauseSymptomsPost() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-primary hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8 text-center">
            <p className="text-gray-500 text-sm mb-2">March 10, 2024</p>
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Understanding Menopause Symptoms</h1>
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
              Menopause is a natural transition in a woman's life, but understanding the symptoms and available treatments can help you navigate this phase with confidence and comfort.
            </p>

            <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Common Menopause Symptoms</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Physical Symptoms</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Hot flashes and night sweats</li>
              <li>Irregular periods</li>
              <li>Vaginal dryness</li>
              <li>Sleep disturbances</li>
              <li>Weight gain</li>
              <li>Joint aches and stiffness</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Emotional Symptoms</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Mood swings</li>
              <li>Irritability</li>
              <li>Anxiety</li>
              <li>Depression</li>
              <li>Memory problems</li>
              <li>Difficulty concentrating</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Treatment Options</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Hormone Therapy</h3>
            <p className="text-gray-600 mb-4">Can effectively relieve hot flashes, night sweats, and vaginal dryness. We'll discuss benefits and risks based on your individual health profile.</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Non-Hormonal Options</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Lifestyle modifications (diet, exercise)</li>
              <li>Stress management techniques</li>
              <li>Non-hormonal medications</li>
              <li>Vaginal moisturizers and lubricants</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">When to Seek Help</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Contact us if you experience severe symptoms that interfere with your daily life, or if you have concerns about bone health, heart health, or other long-term effects of menopause.
            </p>

            <div className="bg-primary-light rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Menopause Management</h3>
              <p className="text-gray-700 mb-4">
                Our experienced team can help you create a personalized menopause management plan that fits your lifestyle and health goals.
              </p>
              <Link href="/appointment" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors inline-block">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}