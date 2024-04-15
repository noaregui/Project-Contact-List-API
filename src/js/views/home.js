import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Contacto } from "../component/contacto";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const contacts = store.contacts;

	useEffect(() => {
		actions.cargarContactos();
	}, [])
	if(!contacts) {
		return <div>Cargando contactos...</div>
	}

	return ( 
	<div className="text-center mt-5">
		{
			contacts.map((contact, index) => {
				<Formulario name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} key={index} />
			})
		}
	</div>
);
}
