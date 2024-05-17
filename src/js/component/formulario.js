import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
  const { store, actions } = useContext(Context);
  const [contacto, setContacto] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HOLA")
    actions.crearContacto(contacto, navigate);
  };

  return (
    <div className="formulario-crearContacto">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="formulario">
              <legend>ADD A NEW CONTACT</legend>
              <div className="mb-3">
                <label htmlFor="nombreCompleto" className="form-label">
                  FULL NAME
                </label>
                <input
                  type="text"
                  id="nombreCompleto"
                  className="form-control"
                  placeholder="Full name"
                  onChange={(e) =>
                    setContacto({ ...contacto, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  EMAIL
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) =>
                    setContacto({ ...contacto, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  id="telefono"
                  className="form-control"
                  placeholder="Phone"
                  onChange={(e) =>
                    setContacto({ ...contacto, phone: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">
                  ADDRESS
                </label>
                <input
                  type="text"
                  id="direccion"
                  className="form-control"
                  placeholder="Address"
                  onChange={(e) =>
                    setContacto({ ...contacto, address: e.target.value })
                  }
                />
              </div>
              <div className="botones-abajo">
                <div className="mb-3 botones">                  
                    <button type="submit" className="CreateNewContact">
                      <span className="span-mother">
                        <span>S</span>
                        <span>a</span>
                        <span>v</span>
                        <span>e</span>
                      </span>
                      <span className="span-mother2">
                        <span>S</span>
                        <span>a</span>
                        <span>v</span>
                        <span>e</span>
                      </span>
                    </button>                  
                  <div className="form-check">
                    <Link to="/" className="btn btn-secondary me-2">
                      Got back to contacts
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};