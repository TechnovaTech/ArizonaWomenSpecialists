import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Birth Control",
      date: "March 20, 2024",
      excerpt: "Learn about different birth control options and find the right method for your lifestyle and health needs.",
      slug: "birth-control"
    },
    {
      id: 2,
      title: "Essential Nutrition During Pregnancy",
      date: "March 15, 2024",
      excerpt: "Discover the key nutrients your body needs during pregnancy for optimal health and baby development.",
      slug: "pregnancy-nutrition"
    },
    {
      id: 3,
      title: "Understanding Menopause Symptoms",
      date: "March 10, 2024",
      excerpt: "Navigate menopause with confidence by understanding common symptoms and available treatments.",
      slug: "menopause-symptoms"
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Health Blog</h1>
          <p className="text-xl text-gray-600">Expert advice and insights for women's health</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
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
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <span className="text-primary font-semibold text-sm hover:underline">
                    Continue Reading
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}