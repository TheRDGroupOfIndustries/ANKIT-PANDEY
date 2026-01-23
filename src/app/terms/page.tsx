import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-50 via-white to-purple-50 text-gray-900 py-20 px-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-12 border border-white/50">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Terms of Service
            </h1>
          </div>
          <nav className="flex space-x-8 text-sm font-semibold text-indigo-600">
            <Link href="/privacy" className="hover:text-indigo-800 transition-all duration-200 hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:text-indigo-800 transition-all duration-200 hover:underline">Terms</Link>
            <Link href="/refund" className="hover:text-indigo-800 transition-all duration-200 hover:underline">Refund</Link>
          </nav>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">By using ankitpandey .com, you agree to:</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 pl-6 max-w-2xl">
              <li>These Terms of Service</li>
              <li>Our Privacy Policy</li>
              <li>Digital marketing training and consulting services</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Our Services Include</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>Digital marketing consulting & strategy</li>
              <li>SEO, social media, and paid advertising training</li>
              <li>Online courses and workshops</li>
              <li>Personalized coaching sessions</li>
              <li>Business growth strategies (proven $50M+ revenue results)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Your Responsibilities</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>Provide accurate information during registration/contact</li>
              <li>Do not attempt unauthorized access to our systems</li>
              <li>Respect our intellectual property (course materials, strategies)</li>
              <li>Use services only for legitimate business purposes</li>
              <li>Honor payment obligations for paid courses/services</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Payments & Cancellations</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>All payments are final for digital courses (no refunds)</li>
              <li>Consulting bookings require upfront payment</li>
              <li>We may cancel services for policy violations</li>
              <li>Free consultations available (30 minutes)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Limitation of Liability</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>Results not guaranteed (marketing depends on execution)</li>
              <li>No liability for indirect/consequential damages</li>
              <li>Services provided "as-is" to maximum extent permitted by law</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Governing Law</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>Governed by laws of India</li>
              <li>Disputes resolved in Varanasi courts</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="text-lg">
                Email: <a href="mailto:hello@ankitpandey .com" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors">hello@ankitpandey .com</a>
              </p>
              <p className="text-lg">
                Phone: <a href="tel:+15551234567" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors">+1 (555) 123-4567</a>
              </p>
              <p className="text-sm text-gray-500">
                Visit <a href="https://www.ankitpandey .com" className="text-indigo-600 underline hover:text-indigo-800">ankitpandey .com</a> – 
                Digital Marketing Training | SEO | Paid Ads | Business Growth
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
