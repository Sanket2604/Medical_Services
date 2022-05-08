import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import '../CSS/nav.css'
import { Link } from 'react-router-dom';
import search from '../assets/nav/search.png';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        if(this.username.value.length < 1 && this.password.value.length < 1){
            alert("Enter Username and Password")
        }
        else if(this.username.value.length < 1){
            alert("Enter Username")
        }
        else if(this.password.value.length < 1){
            alert("Enter Password")
        }
        else{
            alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked);
            this.toggleModal();
        }
        event.preventDefault();
    }

    render(){

        return(
            <div>
                <ul style={{display: "flex", justifyContent: "space-around", padding: "5px", position: "fixed", width:"100%", background: "white", zIndex: "5", backgroundColor: "#2E008B"}}>
                    <Link to="page1" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page1</li></Link>
                    <Link to="page2" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page2</li></Link>
                    <Link to="page3" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page3</li></Link>
                    <Link to="page4" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page4</li></Link>
                    <Link to="page5" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page5</li></Link>
                    <Link to="page6" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page6</li></Link>
                    <Link to="page7" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page7</li></Link>
                    <Link to="page8" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page8</li></Link>
                    <Link to="page9" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page9</li></Link>
                    <Link to="page10" style={{color: "white", listStyle: "none", textDecoration: "none"}}><li>Page10</li></Link>
                </ul>
                <div className="nav_cont" style={{marginTop: "24px"}}>
                    <nav className="navbar navbar-expand-lg">
                        <div className="brand_items">
                            <div className="logo" href=""></div>
                            <div className="brand" href="">Medical Services</div>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <span className="nav-link">Home</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Hospital</span> 
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Doctor</span> 
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Cost</span> 
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Free Consult</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Patient Stories</span>
                                </li>
                                <li className="nav-item" onClick={this.toggleModal}>
                                    <span className="nav-link">Login</span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="searchtab">
                        <div className="row1">
                            <div className="searchbar">
                                <input className="form-control input_area" type="text" placeholder="by treatment, hospital,doctors"/>
                                <div className="searchbtn circle_1" href="">
                                    <div className="circle_2"><img src={search} width="13px" alt=""/></div>
                                </div>
                            </div>
                            <div className="consult">
                                <div className="consultbtn" href="">Consult Doctor Now</div>
                            </div>
                            <div className="estimate" href="">Get Free Estimates</div>
                        </div>
                        <div className="mobile_search">
                            <input className="form-control input_area inpjs" type="text" placeholder="by treatment, hospital,doctors"/>
                            <div className="searchbtn srchjs" href=""><i className="fas fa-search"></i>
                            <img src={search} width="100%" alt=""/> Search
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>Remember Me
                                </Label>
                            </FormGroup>
                            <div className="modal_btn_group">
                                <Link to="signup"><button className="modal_btn">Signup</button></Link>
                                <button className="modal_btn" type="submit" value="submit">Login</button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;