import Link from 'next/link';

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-50 via-white to-purple-50 text-gray-900 py-20 px-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-12 border border-white/50">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Refund Policy
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Applies to ankitpandey.com digital products:</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 pl-6 max-w-2xl">
              <li>Online digital marketing courses</li>
              <li>Consulting sessions & recordings</li>
              <li>Workshops and strategy templates</li>
              <li>SEO/Paid ads training materials</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">General Refund Policy</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li><strong>No refunds</strong> on digital courses once accessed (immediate delivery)</li>
              <li>7-day cooling-off period for unaccessed purchases only</li>
              <li>Consulting: Non-refundable after session starts</li>
              <li>Check product page for specific guarantee details</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Eligible for Refund (Rare Cases)</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>Technical failure prevents course access</li>
              <li>Service not delivered as promised</li>
              <li>Request within 7 days of purchase</li>
              <li>No course content accessed/downloaded</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Non-Refundable Situations</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6 bg-red-50 border border-red-200 p-6 rounded-xl">
              <li>Course accessed or downloaded</li>
              <li>Change of mind after purchase</li>
              <li>Completed 10% of course content</li>
              <li>Failed payment or late cancellation</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Refund Processing</h3>
            <ul className="list-disc space-y-2 text-gray-700 pl-6">
              <li>Approved refunds to original payment method</li>
              <li>Processing: 7-14 business days</li>
              <li>No cash refunds - payment provider dependent</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">How to Request Refund</h3>
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl space-y-4">
              <ul className="list-decimal list-inside space-y-2 text-gray-700 pl-4">
                <li>Email <a href="mailto:refund@ankitpandey.com" className="text-indigo-600 font-bold hover:text-indigo-800">refund@ankitpandey.com</a></li>
                <li>Include order ID, purchase date, reason</li>
                <li>Response within 48 hours</li>
                <li>Decision within 7 days</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Need help? Contact <a href="mailto:hello@ankitpandey.com" className="text-indigo-600 underline">hello@ankitpandey.com</a>
              </p>
            </div>
          </section>

          <section className="text-center pt-6">
            <p className="text-sm text-gray-500">
              Visit <a href="https://www.ankitpandey.com" className="text-indigo-600 underline hover:text-indigo-800 font-medium">ankitpandey.com</a> – 
              Digital Marketing Training | 50M+ Revenue Strategies
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
