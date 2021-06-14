import React from "react";
import '../ListHeader/ListHeader.css';

function ListHeader(props) {
  return (
    <div className="list-header col-12">
      <ul className="list-group list-group-header">
        <li className="list-group-header">
          <div className="col-1 list-header-container">
            <button
              className="btn btn-dark list-title"
            >
              Repo Info
            </button>
          </div>
          <div className="col-1 list-header-container">
            <button
              className="btn btn-dark list-title"
            >
              Repo Name
            </button>
          </div>
          <div className="col-4 list-header-container">
            <button
              className="btn btn-dark list-title"
              id='description'
            >
              Description
            </button>
          </div>
          <div className="col-2 list-header-container">
            <button
              className="btn btn-dark list-title dropdown-toggle"
              onClick={props.sortStars}
            >
              Stars
            </button>
          </div>
          <div className="col-2 list-header-container">
            <button
              className="btn btn-dark list-title dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"
            >
              Language
            </button>
          </div>
          <div className="col-2 list-header-container">
            <button
              className="btn btn-dark list-title"
            >
              Name
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ListHeader;
