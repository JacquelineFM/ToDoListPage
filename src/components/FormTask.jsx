const FormTask = () => {
  return (
    <div className="flex flex-row mb-1 sm:mb-8 justify-between w-full">
      <div className="text-start">
        <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
          <div className="relative">
            <input
              type="text"
              id="form-subscribe-Filter"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              placeholder="Description"
            />
          </div>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <button
        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
        type="submit"
      >
        Refresh
      </button>
    </div>
  );
};

export default FormTask;
