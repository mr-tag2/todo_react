import React from "react";
import { withRouter, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="m-2">
      <ul className="nav back-purple badge-secondary">
        <NavLink
          to={"/"}
          className="nav-link"
          exact
          activeClassName="badge-secondary"
        >
          Tasks
        </NavLink>
        <NavLink
          to={"/About"}
          className="nav-link"
          exact
          activeClassName="badge-secondary"
        >
          About
        </NavLink>
      </ul>
    </div>
  );
};

export default withRouter(Nav);
