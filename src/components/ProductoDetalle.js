import React, {useState, useEffect} from 'react';
import Productos from './Productos'
import Spinner from 'react-bootstrap/Spinner'
import firebase from '../config/firebase';

function ProductoDetalle(props){
const [producto,setProducto] = useState({});
const [loading,setLoading] = useState(true);

useEffect( () => {
    firebase.db.doc("productos/" + props.match.params.id)
    .get()
    .then(doc => {
        setProducto(doc);
        setLoading(false);
    })
}, [props.match.params.id]);


if (loading) {
    return (
        <div className="container text-center" style={{marginTop: 35}}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>        
    )
} else {
    return (
        <div class="container">
            <h3 className="mt-5">Detalle del producto</h3>  
            <Productos datos={producto} detalles={true} botonDetalle={false}/>        
        </div>
    )
    }
}

export default ProductoDetalle;