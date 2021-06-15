//Dependencies
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'

//CSS
import './RepositoryItem.css'

//Containers
import RepoDetail from '../../containers/RepoDetail';

// Functional Component which is to list a repository item on the main page to select from. This is loaded dynamically using the .map method on the main page.
const RepositoryItem = (props) => {

  //Set the modal state to not show by default. 
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <li className="repo-item row">
        <Col className='repo-item-col' sm={12} md={6} lg={1}>
          <img src={props.image} alt="..." className='rounded github-avatar' onClick={() => setModalShow(true)} />
        </Col>
        <Col className='repo-item-col' sm={12} md={6} lg={1}>
          <h6 className="user-name repo-info">{props.name}</h6>
        </Col>
        <Col className='repo-item-col' sm={12} md={6} lg={1}>
          <p className="repo-info" id="main-description">{props.description}</p>
        </Col>
        <Col className='repo-item-col' sm={12} md={6} lg={1}>
          <p className="repo-info">{props.stargazers_count}</p>
        </Col>
        <Col className='repo-item-col' sm={12} md={6} lg={1}>
          <p className="repoUrl repo-info">{props.language}</p>
        </Col>
        <Col className='repo-item-col' sm={12} md={6} lg={1}>
          <p className="repoUrl repo-info">{props.owner}</p>
        </Col>
      </li>
      {/* The Modal Detail Page component */}
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