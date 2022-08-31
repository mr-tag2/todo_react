import React, { useContext, useEffect, useRef } from "react";
import MainContext from "../../Context/MainContext";

const NewTask = () => {
  const cx = useContext(MainContext);

  const keyDownOfNewTask = (ev) => {
    if (ev.keyCode === 13) cx.newTask();
  };

  const taskRef = useRef(null);
  useEffect(() => {
    taskRef.current.focus();
  });

  return (
    <div className="input-group box-input p-5">
      <input
        ref={taskRef}
        type="text"
        placeholder="New Task"
        className="form-control border-0"
        onChange={cx.taskSave}
        onKeyDown={(event) => keyDownOfNewTask(event)}
        value={cx.task}
      />
      <div className="input-group-append">
        <button
          className="btn btn-dark fa fa-plus"
          onClick={cx.newTask}
        ></button>
      </div>
    </div>
  );
};

export default NewTask;
