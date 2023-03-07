import React, { useRef } from "react";
import { Contacto } from "../models/contacto.class";

const NuevoContacto = ({ handlerContacto}) => {
  const nombre = useRef("");
  const apellido = useRef("");
  const email = useRef("");

  const agregarContacto = (e) => {
    e.preventDefault();
    const nuevoContacto = new Contacto(nombre.current.value, apellido.current.value, email.current.value, false);
    handlerContacto(nuevoContacto);
    console.log("agregar contacto", nuevoContacto);
    nombre.current.value = "";
    apellido.current.value = "";
    email.current.value = "";
  };

  return (
    <div>
    <form onSubmit={agregarContacto} className="contact-component">
      <h3>Nuevo Contacto: </h3>
      <label htmlFor="nombre">Nombre</label>
      <input
        ref={nombre}
        name="nombre"
        placeholder="Nombre"
        className="form-control"
      />
      <label htmlFor="apellido">Apellido</label>
      <input
        ref={apellido}
        name="apellido"
        placeholder="Apellido"
        className="form-control"
      />
      <label htmlFor="email">E-mail</label>
      <input
        ref={email}
        name="email"
        type="email"
        className="form-control"
        placeholder="Email"
      />
      <button onClick={agregarContacto} type="submit" className="btn btn-secondary">
        Guardar
      </button>
    </form>
    </div>
  );
};

export default NuevoContacto;
