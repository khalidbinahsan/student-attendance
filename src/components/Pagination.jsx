export default function Pagination({pages, currentPage, setCurrentPage}) {
    const pageNumbers = []
    for(let i=1; i <= pages; i++) {
        pageNumbers.push(i)
    }
  return (
    <div className="flex items-center justify-center space-x-2 py-6">
      {/* Previous Button */}
      <button 
      disabled = {currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
      className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-indigo-600 disabled:opacity-50">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      {pageNumbers.map(number => (
        number === currentPage ? (
            <button 
            key={number}
            onClick={() => setCurrentPage(number)}
            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border-gray-300 bg-indigo-700 text-sm font-semibold text-white shadow-md transition-all ">
                {number}
            </button>
        ) : (
            <button 
            key={number}
            onClick={() => setCurrentPage(number)}
            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border-gray-300 bg-white text-sm font-semibold text-gray-600 shadow-md transition-all hover:bg-indigo-700 hover:text-white">
                {number}
            </button>
        )
        
      ))}
      
      {/* Next Button */}
      <button 
      disabled = {currentPage === pages}
      onClick={() => setCurrentPage(currentPage + 1)}
      className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-indigo-600">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
