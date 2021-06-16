//Dependencies
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { FaGithub, FaExternalLinkSquareAlt, FaStar } from 'react-icons/fa'

//Containers
import Container from 'react-bootstrap/Container'

// CSS
import './RepoDetail.css'

// Functional Component that displays a react-bootstrap modal with details from the clicked repository item. For the requirement of a second page to show data by the repo. I used a Modal instead of an actual page.
const RepoDetail = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.owner}

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={2}>
            <img src={props.image} alt="..." className='rounded github-avatar' />
          </Col>
          <Col lg={10}>
            <p className='text-center'>{props.description}</p>
            <Row className="info-row">
              <Col lg={2}>
                <Row>
                  <p className='text-center'>Stars:</p>
                </Row>
                <Row>
                  <FaStar className='react-icon' />{props.stargazers_count}
                </Row>
              </Col>
              <Col lg={3}>
                <Row>
                  <p className='text-center'> Language:</p>
                </Row>
                <Row>
                  <p className='text-center'>{props.language}</p>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <p className='text-center'> Created:</p>
                </Row>
                <Row>
                  <p className='text-center'>{props.created}</p>
                </Row>
              </Col>
            </Row>
            <Container className='links-container'>
              <Row>
                <FaGithub className='react-icon' />
                <a href={props.repoUrl} target='_blank' className="modal-link" rel="noreferrer" >{props.repoUrl}</a>
              </Row>
              <Row>
                <FaExternalLinkSquareAlt className='react-icon' />
                <a href={props.link} target='_blank' className="modal-link" rel="noreferrer" >{props.link}</a>
              </Row>
            </Container>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RepoDetail;