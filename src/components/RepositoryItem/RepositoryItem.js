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
          <h6 className="user-name repo-info">{props.name}</h6>
        </div>
        <div className="col-4 tex">
          <p className="repo-info" id="main-description">{props.description}</p>
        </div>
        <div className="col-2 text">
          <p className="repo-info">{props.stargazers_count}</p>
        </div>
        <div className="col-2 text">
          <p className="repoUrl repo-info">{props.language}</p>
        </div>
        <div className="col-2 text">
          <p className="repoUrl repo-info">{props.owner}</p>
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
        link={props.link}
        stargazers_count={props.stargazers_count}
        language={props.language}
        created={props.created}
      />
    </>
  );
}

export default RepositoryItem;