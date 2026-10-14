import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CarritoCompras from "./Carrito";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";

export default function Productos() {
  const { productos, cargando, error } = useProducts();
  const { agregarAlCarrito } = useCartContext();
  const { esAdmin } = useAuthContext();
  const navigate = useNavigate();

  const manejarEliminar = (producto) => {
    navigate('/eliminar-producto', { state: { producto } });
  };

  const manejarEditar = (producto) => {
    navigate('/formulario-producto', { state: { producto } });
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <ul id="lista-productos" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            producto={producto}
            esAdmin={esAdmin}
            onEditar={() => manejarEditar(producto)}
            onEliminar={() => manejarEliminar(producto)}
            onAgregarCarrito={() => agregarAlCarrito(producto)}
          />
        ))}
      </ul>
      <CarritoCompras />
    </>
  );
}

const ProductoItem = ({ producto, esAdmin, onEditar, onEliminar, onAgregarCarrito }) => (
  <li className="card" style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', padding: '1rem', backgroundColor: '#fff' }}> 
    {/* 1. Usamos producto.imagen e hizimos match con producto.nombre */}
    <img src={producto.imagen} alt={producto.nombre} className="card-img-top" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }} />
    
    <div className="card-body" style={{ marginTop: '0.8rem' }}>
      <h5 className="card-title" style={{ fontSize: '1.1rem', margin: '0 0 0.4rem 0' }}>{producto.nombre}</h5>
      
      {/* Mostramos la categoría */}
      <p className="card-text" style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 0.4rem 0' }}>Categoría: {producto.categoria}</p> 
      
      <p className="card-text-price" style={{ color: '#b22222', fontSize: '1.1rem', margin: '0.5rem 0' }}>
        <strong>Precio: ${producto.precio.toLocaleString('es-AR')}</strong>
      </p>
      
      {/* 3. Botones Principales */}
      <div className="card-buttons-main" style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <Link to={`/productos/${producto.id}`} state={{ producto }} className="btn btn-details" style={{ flex: 1, padding: '0.5rem', textAlign: 'center', background: '#eee', textDecoration: 'none', color: '#333', borderRadius: '4px', fontSize: '0.85rem' }}>
          Ver detalles
        </Link>
        
        <button onClick={onAgregarCarrito} className="btn btn-primary-green" style={{ flex: 1, padding: '0.5rem', background: '#b22222', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
          Comprar
        </button>
      </div>

      {/* 4. BOTONES ADMIN */}
      {esAdmin && (
        <div className="btn-admin-container" style={{ marginTop: '1rem' }}>
          <hr className="admin-hr"/>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={onEditar} className="btn-editar" style={{ flex: 1, background: '#f39c12', color: '#fff', border: 'none', padding: '0.3rem', borderRadius: '4px', cursor: 'pointer' }}>
              Editar
            </button>
            <button onClick={onEliminar} className="btn-eliminar" style={{ flex: 1, background: '#e74c3c', color: '#fff', border: 'none', padding: '0.3rem', borderRadius: '4px', cursor: 'pointer' }}>
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  </li>
);