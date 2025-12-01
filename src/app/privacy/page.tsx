import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 text-gray-900 py-20 px-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-12 border border-white/50">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <h1 className="p-1 text-4xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 md:mb-0">
            Privacy Policy
          </h1>
          <nav className="flex space-x-8 text-sm font-semibold text-indigo-600">
            <Link href="/privacy" className="hover:text-indigo-800 transition-all duration-200 hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:text-indigo-800 transition-all duration-200 hover:underline">Terms</Link>
            <Link href="/refund" className="hover:text-indigo-800 transition-all duration-200 hover:underline">Refund</Link>
          </nav>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">At ankitpandey.com, we protect your privacy by:</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 pl-6 max-w-2xl">
              <li>Respecting your personal information</li>
              <li>Being transparent about data collection</li>
              <li>Never selling or sharing your data with third parties</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Information We Collect</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>Personal info you provide (name, email, company, message)</li>
              <li>Automatically collected data (IP address, browser, device info)</li>
              <li>Usage data like pages visited (if analytics enabled)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">How We Use Your Data</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>Respond to your messages and inquiries</li>
              <li>Provide requested services</li>
              <li>Improve website experience</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Cookies & Tracking</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>We disclose any cookie or analytics usage</li>
              <li>Obtain consent where required by law</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Your Rights</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>Request access to your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request data deletion</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Contact Us</h3>
            <p className="text-lg">
              For privacy questions, email us at{' '}
              <a href="mailto:privacy@ankitpandey.com" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
                privacy@ankitpandey.com
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Visit <a href="https://www.ankitpandey.com" className="text-indigo-600 underline hover:text-indigo-800">ankitpandey.com</a>
            </p>
          </section>    
        </div>
      </div>
    </div>
  );
}
