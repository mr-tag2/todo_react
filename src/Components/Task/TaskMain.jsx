import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import NewTask from './NewTask';
import Todos from './Todos';

function TaskMain() {
    return (
        <Fragment>
            <h2 className="color-with text-center back-header">Tado List</h2>
            <NewTask />
            <Todos />
            <ToastContainer />
        </Fragment>
    );
}

export default TaskMain;