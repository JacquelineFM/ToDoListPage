import Task from "./Task";

const ToDoList = ({ tasks }) => {
  return (
    <table className="min-w-full leading-normal text-center">
      <thead className="bg-indigo-600 text-white">
        <tr>
          <th
            scope="col"
            className="px-5 py-3 border-b border-gray-200 text-sm uppercase font-bold"
          >
            #
          </th>
          <th
            scope="col"
            className="px-5 py-3 border-b border-gray-200 text-sm uppercase font-bold"
          >
            User
          </th>
          <th
            scope="col"
            className="px-5 py-3 border-b border-gray-200 text-sm uppercase font-bold"
          >
            Description
          </th>
          <th
            scope="col"
            className="px-5 py-3 border-b border-gray-200 text-sm uppercase font-bold"
          >
            Completed
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
};

export default ToDoList;
