import React, { Fragment, useContext } from "react";
import MainContext from "../../Context/MainCotext";
import Todo from "./Todo";

const Todos = () => {
  const cx = useContext(MainContext);
  const { todos, deleteTask, completedTask } = cx;
  return (
    <Fragment>
      {todos.map(item => (
        <Todo
          key={item.id}
          task={item.task}
          isCom={item.isCom}
          deleteTask={() => deleteTask(item.id)}
          completedTask={() => completedTask(item.id)}
        />
      ))}
    </Fragment>
  );
};

export default Todos;
