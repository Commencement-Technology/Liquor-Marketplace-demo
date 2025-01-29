export default function UnprotectedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100 shadow-lg rounded-lg">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-bold text-gray-900">Public Page</h1>
            <p className="mt-4 text-gray-700">
              This is a public page that anyone can access without authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
