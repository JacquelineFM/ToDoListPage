const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(pages + 1).keys()].slice(1);

  /**
   * If the current page is not equal to the total number of pages, then set the current page to the
   * current page plus one.
   */
  const handleNextPage = () =>
    currentPage !== pages && setCurrentPage(currentPage + 1);

  /**
   * If the current page is not equal to 1, then set the current page to the current page minus 1.
   */
  const handlePrevPage = () =>
    currentPage !== 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
      <div className="flex items-center">
        <button
          type="button"
          className={`${
            currentPage === 1
              ? "bg-gray-600 text-white"
              : "bg-indigo-600 hover:bg-indigo-700"
          } w-full p-4 border text-base rounded-l-xl text-white`}
          onClick={handlePrevPage}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {pageNumbers.map((pgNumber) => (
          <button
            key={pgNumber}
            type="button"
            className={`paginationItem ${
              currentPage === pgNumber
                ? "text-black font-bold"
                : " text-gray-600"
            } w-full px-4 py-2 border text-base bg-white hover:bg-gray-100`}
            onClick={() => setCurrentPage(pgNumber)}
          >
            {pgNumber}
          </button>
        ))}
        <button
          type="button"
          className={`${
            currentPage === pages
              ? "bg-gray-600 text-white"
              : "bg-indigo-600 hover:bg-indigo-700"
          } w-full p-4 border-t border-b border-r text-base rounded-r-xl text-white`}
          onClick={handleNextPage}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
