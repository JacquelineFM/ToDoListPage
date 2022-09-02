import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import FormTask from "./components/FormTask";
import ToDoList from "./components/ToDoList";
import Pagination from "./components/Pagination";

const App = () => {
  const [itemsPerPage] = useState(10);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const idxLastItem = currentPage * itemsPerPage;
  const idxFirstItem = idxLastItem - itemsPerPage;
  const pages = Math.round(tasks.length / itemsPerPage);
  const currentTasks = tasks.slice(idxFirstItem, idxLastItem);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(
        (allTasks) => {
          setIsLoaded(true);
          setTasks(allTasks);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return error ? (
    <div>Error: {error.message}</div>
  ) : !isLoaded ? (
    <Spinner />
  ) : (
    <div className="container mx-auto px-4 sm:px-8 ">
      <div className="py-8">
        <Header />
        <FormTask />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <ToDoList tasks={currentTasks} />
            <Pagination
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
