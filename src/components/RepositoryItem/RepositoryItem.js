import React, { useState } from 'react';
import './RepositoryItem.css'
import RepoDetail from '../../containers/RepoDetail/RepoDetail';

const RepositoryItem = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <li className="repo-item row">
        <div className="col-1">
          <img src={props.image} alt="..." className='rounded github-avatar' onClick={() => setModalShow(true)} />
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
      <RepoDetail
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={props.owner}
        description={props.description}
        repoUrl={props.repoUrl}
        owner={props.owner}
        image={props.image}
      />
    </>
  );
}

export default RepositoryItem;