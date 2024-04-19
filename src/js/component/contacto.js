import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";
import "../../styles/index.css";

export const Contacto = ({ index, nombre, direccion, telefono, email, id }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const imagenes = [
    "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4064817/pexels-photo-4064817.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5588373/pexels-photo-5588373.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5273710/pexels-photo-5273710.jpeg?auto=compress&cs=tinysrgb&w=600"
  ]
 
  const imagenRandom = imagenes[index]
  console.log(imagenRandom)

  const handleDelete = async () =>{
    await actions.eliminarContacto(id);
    actions.cargarContactos()
};

  const handleEdit = (id) => {
    const contactoSeleccionado = store.contactos.filter(
      (contacto) => contacto.id === id
    );
    console.log(contactoSeleccionado[0])
    actions.selectedId(contactoSeleccionado[0]);
    navigate(`/viewEditar/${id}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-3">
            <div className="col-md-4">
              <img
                src={imagenRandom}
                className="imagenPerfil"
                alt="..."
              />
            </div>
            <div className="col-6">
              <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">
                  <small className="text-muted">{direccion}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{telefono}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{email}</small>
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="card-body">
                <button onClick={() => handleEdit(id)} className="editBtn">
                  <svg height="1em" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                </button>
                <button onClick={() => handleDelete(id)} className="trash">
                  <svg
                    viewBox="0 0 15 17.5"
                    height="17.5"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      transform="translate(-2.5 -1.25)"
                      d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                      id="Fill"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};
// img-fluid rounded-start
// https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600
