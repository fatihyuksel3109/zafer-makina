export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-800 border-t-transparent mb-4"></div>
        <p className="text-lg font-medium text-gray-700">Yükleniyor...</p>
      </div>
    </div>
  );
}