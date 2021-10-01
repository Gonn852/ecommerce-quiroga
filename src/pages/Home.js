import React, { Component } from "react";
import ReactDom from 'react-dom';
import Productos from '../components/Productos';
import { getProductos } from "../services/ProductoServices";
import firebase from '../config/firebase';
import Spinner from 'react-bootstrap/Spinner'


class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			error : null,
			isLoaded : false,
			datos : []
		};
	}

	async componentDidMount(){
		firebase.db.collection("productos")
		.get()
		.then(querySnapshot => {
			this.setState ({
				datos:querySnapshot.docs,
				isLoaded:true
			})
		})
		
	}

	render() {
		const {error, isLoaded, datos} = this.state;
		if (error) {
			return (
				<div>
					Error: {error.message}
				</div>
			);
		} else if (!isLoaded) {
			return (
				<div className="container text-center" style={{marginTop: 35}}>
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
        		</div>
			);
		} else {

		return(
			<div class="container">
				<h3 className="mt-5">Productos</h3>
				{this.state.datos.map(data => <Productos datos={data} detalles={false} botonDetalle={true}/>) }
			</div>	
			);
	}
  }
}

export default Home;