import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap';
import './modelstyle.css';
 //import firebase from '../Firebase';
// import { Link } from 'react-router-dom';
//import firebaseServices from "../services/firebaseServices";



function Modales() {


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  //  const saveData=()=> {
  //     let data = {
  //       title: this.state.title,
  //       description: this.state.description,
  //       published: false
  //     };
  
    //   firebaseServices.create(data)
    //     .then(() => {
    //       console.log("Created new item successfully!");
    //       this.setState({
    //         submitted: true,
    //       });
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
  
    // const newData=()=> {
    //   this.setState({
    //     title: "",
    //     description: "",
    //     published: false,
  
    //     submitted: false,
    //   });
    // }
  
    return (
      <>
        <button className="btn btn-secondary" onClick={handleShow}>
          Launch static backdrop modal
        </button>
            
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Prospect Set</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form class="form">
            <input placeholder="Name Prospect Set..."></input>
            <input placeholder="Add Demograpghy"></input>
            <input placeholder="Source.."></input>
            <input placeholder="Set Type.."></input>
            <input placeholder="other details.."></input>
            <input placeholder=""></input>
            <input placeholder=""></input>
            <Modal.Footer>
            <Button variant="secondary" style={{float:"left"}}>
            Add Prospect Set
            </Button>
          </Modal.Footer>
          </form>
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
 
export default Modales;