import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Services() {
  return (
    <div>
      <Navbar />

      {/* Services Content */}
      <div className="py-16 bg-pink-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-text-dark mb-4">Our Services</h1>
            <p className="text-xl text-text-grey">Comprehensive women's healthcare services</p>
          </div>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Obstetric */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-text-dark mb-6">Obstetric</h3>
              <p className="text-text-grey text-sm leading-relaxed mb-8">
                Are you pregnant or trying to get pregnant? Then you need obstetrics and gynecology care with Top OB gyn to manage your health before, during, and after your pregnancy. Arizona Women Specialists provide comprehensive obstetrics care at offices in Glendale and Phoenix, Arizona.
              </p>
              <button className="bg-white border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors">
                GET STARTED
              </button>
            </div>

            {/* Gynecology */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-text-dark mb-6">Gynecology</h3>
              <p className="text-text-grey text-sm leading-relaxed mb-8">
                Women's life stages center around their reproductive organs. Gynecology is an area of medicine that specializes in women's reproductive health. At Arizona Women Specialists (gynecologic) comprehensive gynecologic services with best gynecologist in Phoenix valley and Glendale, from well-woman exams to birth control to managing gynecological conditions like heavy periods. For patient-centered gynecology care, call the office nearest you or schedule an appointment online today with best ob gyn.
              </p>
              <Link href="/" className="bg-white border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors inline-block">
                LEARN MORE
              </Link>
            </div>

            {/* Ultrasounds */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-text-dark mb-6">Ultrasounds</h3>
              <p className="text-text-grey text-sm leading-relaxed mb-8">
                Ultrasound is a diagnostic imaging tool that uses sound waves to create images of your internal organs. At Arizona Women's Specialists in Glendale and Phoenix, Arizona, BEST OB gyn ( obstetrics and gynecology) practice has one of the most advanced ultrasound machines in assistance with gynecologist, allowing them to get clear images. Call or schedule your ultrasound appointment online today. plan.
              </p>
              <Link href="/" className="bg-white border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors inline-block">
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Birth Control */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-text-dark mb-6">Birth Control</h3>
              <p className="text-text-grey text-sm leading-relaxed mb-8">
                When feeling unsure about starting or growing your family, you may be considering your birth control options and offer many types of birth control, from the pill to tubal ligation. No matter where you are in your life, the team at Arizona Women's Specialists has a family planning option for you.
              </p>
              <Link href="/" className="bg-white border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors inline-block">
                LEARN MORE
              </Link>
            </div>

            {/* Pap Smears */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-text-dark mb-6">Pap Smears</h3>
              <p className="text-text-grey text-sm leading-relaxed mb-8">
                Not too long ago, women needed Pap smears every year to screen for cervical cancer. But with advances in medical knowledge, you no longer need an annual Pap smear with top gynecologist. However, if it's been a while since your last Pap smear or you have concerns about cervical cancer. Schedule your Pap smear by calling the office in Glendale or Phoenix, Arizona, or booking an appointment online today.
              </p>
              <Link href="/" className="bg-white border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors inline-block">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}