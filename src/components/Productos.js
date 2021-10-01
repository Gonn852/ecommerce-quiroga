import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Productos extends Component {
    constructor(props){
        super(props);
    }

    render(){

        return(
               
                <Card>
                <Card.Body>
                    <Card.Title>{this.props.datos.data().name}</Card.Title>
                    <Card.Text>
                        <strong>Precio:  </strong>$ {this.props.datos.data().price} <br /> 
                    </Card.Text>  
                    {this.props.botonDetalle &&
                        <Button variant="success" style={{ textColor: 'red' }}><Link to={'/detalle/' + this.props.datos.id}>Ver detalle</Link></Button>
                    }
                    {this.props.detalles &&
                    <Card.Text>
                        <strong>Descripción:  </strong>{this.props.datos.data().description} <br />   
                        <br />
                        <Button variant="success">Comprar</Button>
                    </Card.Text>   
                    }
                </Card.Body>
                </Card>  
                              
        );

    }
}

export default Productos;