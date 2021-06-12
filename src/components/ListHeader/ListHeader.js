import React from "react";
import '../ListHeader/ListHeader.css';

function ListHeader(props) {
  return (
    <div className="container col-12 list-header">
      <ul className="list-group list-group-header">
        <li className="list-group-header col-12">
          <div className="col-2 list-header-container">
            <button className="btn btn-dark text-center list-title" onClick={props.sortID}>
              Image
            </button>
          </div>
          <div className="col-3 list-header-container">
            <button
              className="btn btn-dark text-center list-title"
              onClick={props.sortName}
            >
              Name
            </button>
          </div>
          <div className="col-2 list-header-container">
            <button
              className="btn btn-dark text-center list-title"
              onClick={props.sortDept}
            >
              Dept
            </button>
          </div>
          <div className="col-3 list-header-container">
            <button
              className="btn btn-dark text-center list-title"
              onClick={props.sortEmail}
            >
              Email
            </button>
          </div>
          <div className="col-2 list-header-container">
            <button
              className="btn btn-dark text-center list-title"
              onClick={props.sortPhone}
            >
              Phone
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ListHeader;
