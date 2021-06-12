import React from 'react';
import './RepositoryItem.css'

const RepositoryItem = (props) => {
  return (

    <li className="repo-item row">
      <div className="col-1">
        <img src={props.image} alt="..." className='rounded github-avatar' />
      </div>
      <div className="col-1">
        <h6 className="user-name">{props.name}</h6>
      </div>
      <div className="col-4 text desc-container">
        <p className="">{props.description}</p>
      </div>
      <div className="col-2 text">
        <p className="">{props.stargazers_count}</p>
      </div>
      <div className="col-2 text">
        <p className="repoUrl">{props.language}</p>
      </div>
      <div className="col-2 text">
        <p className="repoUrl">{props.owner}</p>
      </div>

    </li>

  );
}

export default RepositoryItem;