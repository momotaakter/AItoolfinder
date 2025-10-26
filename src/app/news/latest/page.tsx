export default function LatestNewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">📰 Latest News</h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with the latest AI industry news and developments
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Latest AI News Coming Soon
            </h2>
            <p className="text-gray-600">
              We're gathering the most recent AI industry news and updates. Check back soon for the latest developments!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}