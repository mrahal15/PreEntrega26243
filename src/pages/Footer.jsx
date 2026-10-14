

import React from 'react';
import fotoLuis from '../assets/Luis.jpg';
import fotoLaura from '../assets/Laura.jpg';
import fotoAlina from '../assets/Alina.jpg';

function Footer() {
  const equipo = [
    {
      nombre: 'Luis González',
      puesto: 'VENDEDOR TÉCNICO',
      descripcion: 'Te brinda asesoramiento técnico para elegir el mejor producto segun tus necesidades.',
      email: 'luisgonzalez@compumundo.com',
      avatar: fotoLuis
    },
    {
      nombre: 'Alina López',
      puesto: 'ATENCIÓN AL CLIENTE',
      descripcion: 'Te brinda atención personalizada para resolver tus dudas y necesidades.',
      email: 'alinalopez@compumundo.com',
      avatar: fotoAlina
    },
    {
      nombre: 'Laura Pérez',
      puesto: 'DEPÓSITO Y LOGÍSTICA',
      descripcion: 'Gestiona cada una de las ventas y prepara las entregas.',
      email: 'lauraperez@compumundo.com',
      avatar: fotoLaura
      
    }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#b22222',
        padding: '30px 15px 20px 15px',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Segoe UI, sans-serif',
        marginTop: 'auto'
      }}
    >
      {/* Sección del Equipo */}
      <div style={styles.teamContainer}>
        <h3 style={styles.teamTitle}>NUESTRO EQUIPO</h3>
        <div style={styles.cardsGrid}>
          {equipo.map((persona, index) => (
            <div key={index} style={styles.card}>
              <img src={persona.avatar} alt={persona.nombre} style={styles.avatar} />
              <h4 style={styles.nombre}>{persona.nombre}</h4>
              <span style={styles.puesto}>{persona.puesto}</span>
              <p style={styles.descripcion}>{persona.descripcion}</p>
              <a href={`mailto:${persona.email}`} style={styles.email}>
                {persona.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      <hr style={styles.divider} />

      {/* Información de créditos original */}
      <p style={{ margin: '5px 0', fontSize: '0.95rem' }}>
        © 2026 - Mi Aplicación React
      </p>

      <p style={{ margin: '0', fontSize: '0.85rem', opacity: 0.9 }}>
        Desarrollado por: <strong>@mrahal</strong>
      </p>
    </footer>
  );
}

const styles = {
  teamContainer: {
    maxWidth: '1000px',
    margin: '0 auto 20px auto'
  },
  teamTitle: {
    fontSize: '0.9rem',
    color: '#ffdd57',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom: '20px'
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#8b0000',
    border: '1px solid #c0392b',
    borderRadius: '8px',
    padding: '20px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ffdd57',
    marginBottom: '10px'
  },
  nombre: {
    fontSize: '1rem',
    margin: '5px 0 2px 0',
    color: '#ffffff'
  },
  puesto: {
    fontSize: '0.65rem',
    color: '#ffdd57',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginBottom: '10px'
  },
  descripcion: {
    fontSize: '0.8rem',
    color: '#f0f0f0',
    lineHeight: '1.3',
    margin: '0 0 12px 0'
  },
  email: {
    fontSize: '0.75rem',
    color: '#ffffff',
    textDecoration: 'underline',
    marginTop: 'auto'
  },
  divider: {
    border: 'none',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    margin: '20px auto',
    maxWidth: '1000px'
  }
};

export default Footer;