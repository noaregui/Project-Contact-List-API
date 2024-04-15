import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";


export const Contacto = ({name, email, phone, adress}) => {
    
    return (
        <>
            <button type="button" className="btn btn-success">Add new contact</button>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg" className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            <i>ICONO </i>
                            <small className="text-muted">{adress}</small>
                        </p>
                        <p className="card-text">
                            <i>ICONO </i>
                            <small className="text-muted">{phone}</small>
                        </p>
                        <p className="card-text">
                            <i>ICONO </i>
                            <small className="text-muted">{email}</small>
                        </p>

                    </div>
                    </div>
                </div>
            </div>
        </>    
    );
};