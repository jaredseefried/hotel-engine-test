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

// Functional Component that displays a react-bootstrap modal with details from the clicked repository item. For the requirement of a second page to show data by the repo. I used a Modal instead of an actual page which is intended to stay inline with a Single page application.
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
            <p>{props.description}</p>
            <Row>
              <Col lg={2}>
                Stars:
              </Col>
              <Col lg={3}>
                Language:
              </Col>
              <Col lg={6}>
                Created:
              </Col>
            </Row>
            <Row>
              <Col lg={2}>
                <FaStar className='react-icon' />{props.stargazers_count}
              </Col>
              <Col lg={3}>
                {props.language}
              </Col>
              <Col lg={6}>
                {props.created}
              </Col>
            </Row>
            <Container className='links-container'>
              <Row>
                <FaGithub className='react-icon' />
                <p>{props.repoUrl}</p>
              </Row>
              <Row>
                <FaExternalLinkSquareAlt className='react-icon' />
                <p>{props.link}</p>
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