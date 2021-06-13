import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

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
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
          </Col>
          <Col lg={10}>
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