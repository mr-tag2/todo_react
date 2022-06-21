import React, { useState } from "react";
import { v4 as unicId } from "uuid";
import { toast } from "react-toastify";
import MainContext from "../Context/MainCotext";

const GlobalState = (props) => {
  const [todos, setTodos] = useState([]),
    [task, setTask] = useState("");

  const newTask = () => {
    const newArr = [...todos];
    const newTask = {
      id: unicId(),
      task: task,
      isCom: false,
    };
    if (newTask.task.trim() !== "") {
      newArr.push(newTask);
      setTodos(newArr);
      setTask("");
      toast.success("Task Added", {
        theme: "dark",
        position: "bottom-center",
      });
    }
  };

  const completedTask = (id) => {
    const arr = [...todos];
    const index = arr.findIndex((x) => x.id === id);
    arr[index].isCom = !arr[index].isCom;
    setTodos(arr);
    toast.info(`Task ${!arr[index].isCom ? "UnC" : "C"}ompleted`, {
      theme: "dark",
      position: "bottom-center",
    });
  };

  const deleteTask = (id) => {
    const arr = [...todos];
    const newArr = arr.filter((x) => x.id !== id);
    setTodos(newArr);
    toast.error("Task deleted", {
      theme: "dark",
      position: "bottom-center",
    });
  };

  const taskSave = (ev) => {
    setTask(ev.target.value);
  };

  return (
    <MainContext.Provider
      value={{
        task: task,
        todos: todos,
        newTask: newTask,
        deleteTask: deleteTask,
        taskSave: taskSave,
        completedTask: completedTask,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default GlobalState;
