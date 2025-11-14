export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"
          aria-hidden="true"
        />
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Loading the page...
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Preparing your data
        </p>
      </div>
    </div>
  );
}
