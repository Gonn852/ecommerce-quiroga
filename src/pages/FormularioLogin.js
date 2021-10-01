import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState, useEffect, useContext} from 'react';
import firebase from '../config/firebase';
import {useHistory} from 'react-router-dom';
import AplicacionContext from '../context/AplicacionContext'

function FormularioLogin () {
    const context = useContext(AplicacionContext);
    const [formulario, setFormulario] = useState({email: '', password: ''});
    const history = useHistory();
    const handleSubmit = (event) => {
        firebase.auth.signInWithEmailAndPassword(formulario.email, formulario.password)
        .then(data => {
            console.log ("data login", data);
            context.loginUsuario(data.user.email);
            history.push("/home");
        })
        .catch(error => {
            console.log("error login", error)
        })
        event.preventDefault();
    }
    
    
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setFormulario({
            ...formulario,
            [name] : value
        });
    }
    return(
        <div className="container">
            <h3 className="mt-5">Formulario de Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el email" name="email" value={formulario.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese la contraseña"  name="password" value={formulario.password} onChange={handleChange} />
                </Form.Group>
                <Button variant="success" type="submit">
                    Iniciar sesión
                </Button>
            </Form>            
        </div>
    )
}

export default FormularioLogin;