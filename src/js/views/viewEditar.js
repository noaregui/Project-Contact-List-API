import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const ViewEditar = () => {
	const {store, actions} = useContext(Context);
	const [ contacto, setContacto] = useState({
		name: "",
		email: "",
		phone: "",
		address: ""
	});
	const navigate = useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault();
		actions.crearContacto(contacto, navigate)
	}

    return (
        <form onSubmit={handleSubmit}>
			<fieldset>
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
				>save</button>	
			</fieldset>
			<label className="form-check-label" htmlFor="disabledFieldsetCheck">
					Get back to contacts
			</label>
		</form>
    );
};