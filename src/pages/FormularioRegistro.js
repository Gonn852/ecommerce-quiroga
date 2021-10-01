import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../config/firebase';
import { browserHistory } from 'react-router';


class FormularioRegistro extends Component {
    constructor(props){
        super(props);
        this.state ={
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        firebase.auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then (data =>{
            console.log("data", data)
            firebase.db.collection("usuarios").add({
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                email: this.state.email,
                userId: data.user.uid
            })
            .then (data => {
                console.log("Data database",data)
                this.props.history.push("/login");
            })
            .catch (error => {
                console.log("Errro database",error)
            })


        })
        .catch (error =>{
            console.log("error",error)
        })
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        });
    }

    render(){

        return(
            <div className="container">
            <h3 className="mt-5">Formulario de Registro</h3>
            <Form onSubmit={this.handleSubmit} >
                <Form.Group controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su apellido" name="apellido" value={this.state.apellido} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el email" name="email" value={this.state.email} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese la contraseña" name="password" value={this.state.password} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="success" type="submit">
                    Registrarme
                </Button>
            </Form>
        </div>
        );

    }
}

export default FormularioRegistro;