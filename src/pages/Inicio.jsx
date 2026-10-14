/* import React from 'react'

function Inicio() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>| CompuMundo |</h1>
        <hr />
        <main>
          <p>
            <strong>CompuMundo</strong>, Tienda online de productos tecnologicos.
          </p>
          <p>
            <strong>CompuMundo</strong> es una tienda online que ofrece una amplia 
            variedad de productos tecnológicos, desde computadoras y accesorios 
            hasta dispositivos electrónicos de última generación.
             Nuestro objetivo es brindar a nuestros clientes la mejor experiencia 
             de compra, ofreciendo productos de alta calidad a precios competitivos.
          </p>
          </main>
      </div>
    </>
  )
}*/

import React from 'react';
function Inicio() {
  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>| CompuMundo |</h1>
        <hr />
        
        {/* Tarjeta Hero / Banner principal  */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          background: 'linear-gradient(to right, #1e293b, #0f172a)', 
          border: '1px solid #334155', 
          borderRadius: '16px', 
          padding: '32px', 
          margin: '32px auto', 
          maxWidth: '1200px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
          textAlign: 'left',
          gap: '32px'
        }}>
          {/* Contenedor de textos */}
          <div style={{ maxWidth: '600px' }}>
            <span style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Tecnología de Vanguardia
            </span>
            <h2 style={{ color: '#ffffff', fontSize: '32px', fontFamily: 'serif', fontWeight: 'bold', marginTop: '8px', marginBottom: '16px' }}>
              Listo para llevar tu experiencia al siguiente nivel
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5', marginBottom: '12px' }}>
              <strong>CompuMundo</strong>, Tienda online de productos tecnológicos.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6' }}>
              <strong>CompuMundo</strong> es una tienda online que ofrece una amplia 
              variedad de productos tecnológicos, desde computadoras y accesorios 
              hasta dispositivos electrónicos de última generación. 
              Nuestro objetivo es brindar a nuestros clientes la mejor experiencia 
              de compra, ofreciendo productos de alta calidad a precios competitivos.
            </p>
          </div>

          {/* Tarjeta de imagen lateral con el mismo tamaño y estilo anterior */}
          <div style={{ 
            width: '320px', 
            height: '192px', 
            backgroundColor: '#334155', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)', 
            border: '1px solid #475569',
            flexShrink: 0
          }}>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" 
              alt="Workspace setup" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default Inicio;


