import { createContext } from "react";

const MainContext = createContext({
  task: "",
  todos: [],
  newTask: () => {},
  completedTask: () => {},
  deleteTask: () => {},
  taskSave: () => {},
});

export default MainContext;
