import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { useNavigate } from "react-router";


export const Contacto = ({id, nombre, direccion, telefono, email}) => {
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();

	const handleDelete = async () => {	
		await actions.eliminarContacto(id);
	}

	const handleEdit = async () => {
		navigate("/viewEditar")
	}

	return (
		<div className="container"
			>
			<div className="row">
				<div className="card mb-3" style={{ maxWidth: "540px" }}>
					<div className="row g-3">
						<div className="col-md-4">
							<img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid rounded-start" alt="..." />
						</div>
						<div className="col-6">
							<div className="card-body">
								<h5 className="card-title">{nombre}</h5>
								<p className="card-text"><small className="text-muted">{direccion}</small></p>
								<p className="card-text"><small className="text-muted">{telefono}</small></p>
								<p className="card-text"><small className="text-muted">{email}</small></p>
							</div>
						</div>
						<div className="col-2">
							<div className="card-body">
								<button className="card-text" onClick={() => handleDelete(id)}><i className="fa-solid fa-trash"></i></button>
								<button className="card-text" onClick={() => handleEdit()}><i className="fa-solid fa-pencil"></i></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};