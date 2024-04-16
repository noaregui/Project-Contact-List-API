import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Contacto } from "../component/contacto";

import "../../styles/demo.css";

export const ViewContacto = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			{store.contactos.map((contacto, index) => {
                return (
                    <Contacto key={index} nombre={contacto.name} direccion={contacto.address} telefono={contacto.phone} email={contacto.email}/>
                )
            })}
		
		</div>
	);
};
