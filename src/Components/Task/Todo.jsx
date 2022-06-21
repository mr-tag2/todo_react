import React, { Fragment } from "react";

const Todo = ({ task, isCom, deleteTask, completedTask }) => {
  const styleLable = isCom
      ? "bg-dark form-control border-0"
      : "back-purple form-control border-0",
    styleBtn = isCom
      ? "btn btn-info fa fa-info icon-fixed-width"
      : "btn btn-success fa fa-check icon-fixed-width";

  return (
    <Fragment>
      <div className="card card-box w-100 border-0">
        <div className="card-body border-0">
          <div className="input-group">
            <label type="text" className={styleLable}>
              {isCom ? <del>{task}</del> : task}
            </label>
            <div className="input-group-append">
              <button className={styleBtn} onClick={completedTask}></button>
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-danger fa fa-trash-o"
                onClick={deleteTask}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
