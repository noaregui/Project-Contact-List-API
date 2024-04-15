import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
// import injectContext from "../store/appContext";
import { Context } from "../store/appContext";


export const Formulario = () => {
	const {store, actions} = useContext(Context);
	const [ contacto, setContacto] = useState({
		name: "",
		email: "",
		phone: "",
		address: ""
	});

    return (
        <form>
			<fieldset disabled>
				<legend><strong>Add a new contact</strong></legend>
				<div className="mb-3">
					<label htmlFor="disabledTextInput" className="form-label">Full name</label>
					<input 
						type="text" id="disabledTextInput" className="form-control" placeholder="Full name"
						onChange={(e) => setContacto({...contacto, name: e.target.value})}
					></input>
				</div>
				<div className="mb-3">
					<label htmlFor="disabledTextInput" className="form-label">Email</label>
					<input 
					type="text" id="disabledTextInput" className="form-control" placeholder="Enter email"
					onChange={(e) => setContacto({...contacto, email: e.target.value})}					
					></input>
				</div>
				<div className="mb-3">
					<label htmlFor="disabledTextInput" className="form-label">Phone</label>
					<input type="text" id="disabledTextInput" className="form-control" placeholder="Enter phone"
					onChange={(e) => setContacto({...contacto, phone: e.target.value})}	
					></input>
				</div>
				<div className="mb-3">
					<label htmlFor="disabledTextInput" className="form-label">Adress</label>
					<input type="text" id="disabledTextInput" className="form-control" placeholder="Enter adress"
					onChange={(e) => setContacto({...contacto, address: e.target.value})}	
					></input>
				</div>
				<button type="submit" className="btn btn-primary"
				onClick={() => actions.crearContacto(contacto)}
				>save</button>	
			</fieldset>
			<label className="form-check-label" htmlFor="disabledFieldsetCheck">
					Get back to contacts
			</label>
		</form>
    );
};