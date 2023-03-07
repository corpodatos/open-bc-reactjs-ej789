import React, { useState } from "react";
import DetalleContactoComponent from "./DetalleContacto";
import { Contacto } from "../models/contacto.class";
import NuevoContacto from "./NuevoContacto";

export const ListaContactos = () => {
  const Contacto1 = new Contacto("José", "Hernández", "jose@gmail.com", false);
  const Contacto2 = new Contacto("Juan", "Lucena", "juan@gmail.com", true);
  let Contactos = [];
  Contactos.push(Contacto1);
  Contactos.push(Contacto2);

  const [nuevoContacto, setNuevoContacto] = useState(Contactos);

  const agregarContactoFn = (contacto) => {
    const tmpContacto = [...nuevoContacto];
    tmpContacto.push(contacto);
    setNuevoContacto(tmpContacto);
  };

  const cambiarEstadoFn = (contacto) => {
    const i = nuevoContacto.indexOf(contacto);
    const tmpContacto = [...nuevoContacto];
    tmpContacto[i].conectado = !tmpContacto[i].conectado;
    setNuevoContacto(tmpContacto);
  }

  const eliminarContactoFn = (contacto) => {
    const i = nuevoContacto.indexOf(contacto);
    const tmpContacto = [...nuevoContacto];
    tmpContacto.splice(i, 1);
    setNuevoContacto(tmpContacto);
  }

  return (
    <div>
      <NuevoContacto handlerContacto={agregarContactoFn}></NuevoContacto>
      <h1>Lista de Contactos</h1>
      <div className="card-container">
        {nuevoContacto.map((c, i) => {
          return (
            <DetalleContactoComponent
              key={i}
              contacto={c}
              cambiarEstado={cambiarEstadoFn}
              eliminar={eliminarContactoFn}
            ></DetalleContactoComponent>
          );
        })}
        {nuevoContacto.length === 0 && (<div>No se encontraron contactos</div>) }
      </div>
    </div>
  );
};
