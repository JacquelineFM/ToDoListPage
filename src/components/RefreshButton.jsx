const RefreshButton = ({ styles }) => {
  return (
    <button
      className={`"${styles} flex-shrink-0 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"`}
      onClick={() => window.location.reload()}
    >
      Refresh
    </button>
  );
};

export default RefreshButton;
