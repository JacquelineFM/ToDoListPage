import { useState } from "react";
import Error from "./Error";
import Task from "./Task";
import Pagination from "./Pagination";

const ToDoList = ({ tasks }) => {
  const [itemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const idxLastTask = currentPage * itemsPerPage;
  const idxFirstTask = idxLastTask - itemsPerPage;
  const pages = Math.ceil(tasks.length / itemsPerPage);
  const currentTasks = tasks.slice(idxFirstTask, idxLastTask);

  return Object.keys(tasks).length === 0 ? (
    <Error />
  ) : (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
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
            {currentTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </tbody>
        </table>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ToDoList;
