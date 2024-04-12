import React from "react";
import { Link } from "react-router-dom";
export const Formulario = () => {
    return (
        <form>
			<fieldset disabled>
				<legend><strong>Add a new contact</strong></legend>
				<div className="mb-3">
					<label for="disabledTextInput" className="form-label">Full name</label>
					<input type="text" id="disabledTextInput" className="form-control" placeholder="Full name"></input>
				</div>
				<div className="mb-3">
					<label for="disabledTextInput" className="form-label">Email</label>
					<input type="text" id="disabledTextInput" className="form-control" placeholder="Enter email"></input>
				</div>
				<div className="mb-3">
					<label for="disabledTextInput" className="form-label">Phone</label>
					<input type="text" id="disabledTextInput" className="form-control" placeholder="Enter phone"></input>
				</div>
				<div className="mb-3">
					<label for="disabledTextInput" className="form-label">Adress</label>
					<input type="text" id="disabledTextInput" className="form-control" placeholder="Enter adress"></input>
				</div>
				<button type="submit" className="btn btn-primary">save</button>	
			</fieldset>
			<label className="form-check-label" htmlFor="disabledFieldsetCheck">
					Get back to contacts
			</label>
		</form>
    );
};