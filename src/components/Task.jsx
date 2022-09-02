const Task = ({ task }) => {
  const { userId, id, title, completed } = task;

  return (
    <tr className={`${!completed ? "bg-gray-100" : "bg-white"}`}>
      <td className="px-5 py-5 border border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{id}</p>
      </td>
      <td className="px-5 py-5 border border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{userId}</p>
      </td>
      <td className="px-5 py-5 border border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{title}</p>
      </td>
      <td className="px-5 py-5 border border-gray-200 text-sm">
        {completed ? (
          <svg
            className="w-5 h-5 inline-block text-green-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-5 h-5 inline-block text-red-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </td>
    </tr>
  );
};

export default Task;
