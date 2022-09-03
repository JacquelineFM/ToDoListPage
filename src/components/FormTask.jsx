import { useState, useRef } from "react";

const FormTask = ({ addNewTask, setError }) => {
  const inputFocus = useRef(null);
  const [title, setTitle] = useState("");

  /**
   * It generates a random string of characters and numbers.
   * @returns A string of random characters and the current date in base 36.
   */
  const getUserId = () => {
    const random = Math.random().toString(36).substr(10);
    const date = Date.now().toString(36);

    return random + date;
  };

  /**
   * When the form is submitted, prevent the default action, check if the title is empty, if it is, set
   * the error state to true, if it isn't, set the error state to false, add the new task, and reset
   * the form.
   * @returns the value of the variable title.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (title === "") {
      setError(true);
      return;
    }
    setError(false);

    // Add task
    addNewTask(getUserId(), title);

    // Restart the form and focus the input
    setTitle("");
    inputFocus.current.focus();
  };

  return (
    <div className="text-start">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row w-4/4 md:w-full md:max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
      >
        <div className="relative">
          <input
            id="tile"
            type="text"
            value={title}
            ref={inputFocus}
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full md:w-80 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Description"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button
          className="flex-shrink-0 py-2 px-4 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default FormTask;
