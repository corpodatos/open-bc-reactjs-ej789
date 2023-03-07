
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";

const DetalleContactoComponent = ({ contacto, cambiarEstado, eliminar }) => {
  const handlerButton = () => {
    cambiarEstado(contacto);
  };

  const estadoActual = () => {
    const estilo = contacto.conectado
      ? "badge text-bg-success"
      : "badge text-bg-danger";
    const mensaje = contacto.conectado
      ? "Contacto En Línea"
      : "Contacto No Disponible";
    return (
      <div>
        <span className={estilo}>{mensaje}</span>
      </div>
    );
  };

  const botonAccion = () => {
    const estilo = contacto.conectado
      ? "btn btn-danger"
      : "btn btn-primary";
    const mensaje = contacto.conectado
      ? "Desconectar"
      : "Conectar";
    return (
      <button onClick={handlerButton} className={estilo}>
        {mensaje}
      </button>
    );
  };

  return (
    <div className="contact-component">
      <div>Nombre: {contacto.nombre}</div>
      <div>Apellido: {contacto.apellido}</div>
      <div>Email: {contacto.email}</div>
      {estadoActual()}
      {botonAccion()}
      <button onClick={() => eliminar(contacto)} className="btn btn-warning">Eliminar</button>
    </div>
  );
};

DetalleContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
  cambiarEstado: PropTypes.func.isRequired,
  eliminar: PropTypes.func.isRequired
};

export default DetalleContactoComponent;
