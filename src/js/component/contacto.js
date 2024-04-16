import React from "react";
import { Link } from "react-router-dom";

export const Contacto = () => {
	return (
		<div className="container">
		<div className="row">
		  <div className="card mb-3" style={{ maxWidth: "540px" }}>
			<div className="row g-3">
			  <div className="col-md-4">
				<img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid rounded-start" alt="..." />
			  </div>
			  <div className="col-6">
				<div className="card-body">
				  <h5 className="card-title">Nombre</h5>
				  <p className="card-text"><small className="text-muted">Dirección</small></p>
				  <p className="card-text"><small className="text-muted">Teléfono</small></p>
				  <p className="card-text"><small className="text-muted">Email</small></p>
				</div>
			  </div>
			  <div className="col-2">
				<div className="card-body">
				  <p className="card-text"><i className="fa-solid fa-trash"></i></p>
				  <p className="card-text"><i className="fa-solid fa-pencil"></i></p>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
};