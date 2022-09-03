import { useState, useEffect } from "react";
import Error from "./components/Error";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import FormTask from "./components/FormTask";
import RefreshButton from "./components/RefreshButton";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(
        (allTasks) => {
          setTimeout(() => {
            setIsLoaded(true);
          }, 1000);
          setTasks(allTasks);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  /**
   * It takes a userId and a title as arguments, creates a new task object, and adds it to the
   * beginning of the tasks array
   */
  const addNewTask = (userId, title) => {
    const newTask = {
      id: tasks.length + 1,
      userId,
      title,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
  };

  return error ? (
    <Error />
  ) : !isLoaded ? (
    <Spinner />
  ) : (
    <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
      <div className="py-8">
        <Header />
        <div className="flex flex-col md:flex-row mb-8 md:mb-1 sm:mb-8 justify-between w-full space-y-3">
          <FormTask addNewTask={addNewTask} setError={setError} />
          <RefreshButton styles="py-2 px-4 text-base" />
        </div>
        <ToDoList tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
