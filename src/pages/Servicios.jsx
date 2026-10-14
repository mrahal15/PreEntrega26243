

// export default Servicios;
import React from "react";
import "../pages/Servicios.css";
import { Link } from "react-router-dom";

function Servicios() {
  const servicios = [
   {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      titulo: "Venta Anticipada",
      texto: "Podes reservar productos antes de su lanzamiento.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
      titulo: "Envíos Nacionales",
      texto: "Entrega rápida y segura a todo el país.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3145/3145784.png",
      titulo: "Gift Cards",
      texto: "Podes regalar experiencias tecnológicas únicas.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1250/1250678.png",
      titulo: "Kits Personalizados",
      texto: "Armamos kits de hardware y periféricos a medida.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1077/1077976.png",
      titulo: "Asesoramiento",
      texto: "Para instituciones y compras tecnológicas al por mayor.",
    },
  ];

  return (
    <div className="serv-container">
      <h1 className="serv-title">Nuestros Servicios</h1>

      <div className="serv-grid">
        {servicios.map((s, index) => (
          <div key={index} className="serv-card">
            <img src={s.icon} alt="icono" className="serv-card-icon" />
            <h3 className="serv-card-title">{s.titulo}</h3>
            <p>{s.texto}</p>
          </div>
        ))}
      </div>

      <div className="btn-volver2-container">
        <Link to="/">
          <button className="btn-volver2">Volver al Inicio</button>
        </Link>
      </div>
    </div>
  );
}

export default Servicios;
