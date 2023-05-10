import React, {useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Modal} from 'react-bootstrap';

const Add = ({addMovie}) => {
    const [show, setShow] = useState(false);
    const [newMovie,setNewMovie]=useState({
        title : '',
        posterURL : '' ,
        description:'' ,
        rating : ''
    })
    
  const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        
        <Button variant="primary" onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie title</Form.Label>
              <Form.Control
                type="text" onChange={handleChange} name="title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Poster</Form.Label>
              <Form.Control
                type="text" onChange={handleChange} name="posterURL"/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange} name="description"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="text" onChange={handleChange}  name="rating"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {addMovie(newMovie);handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
