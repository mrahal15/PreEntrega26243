
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 

// Importamos la imagen del logo
import Logo_CM from '../assets/Logo_CM.png'; 


function Navbar() {
  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const { vaciarCarrito, carrito } = useCartContext(); 
  const navigate = useNavigate();

  const manejarCerrarSesion = () => {
    navigate("/productos");
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* 1. IZQUIERDA: LOGO */}
        <Link to="/" className="navbar-logo-link">
          <img src={Logo_CM} alt="Logo CM" className="navbar-logo" />
        </Link>

        {/* 2. CENTRO: LINKS PRINCIPALES */}
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/servicios" className="nav-link">Servicios</Link></li>
          <li><Link to="/productos" className="nav-link">Productos</Link></li>
          
          {/* Link solo para Admin */}
          {usuario?.nombre === "admin" && (
            <li>
              <Link to="/formulario-producto" className="nav-link">Agregar Producto</Link>
            </li>
          )}
        </ul>

        {/* 3. DERECHA: AUTH, CARRITO Y DASHBOARD */}
    
        <div className="navbar-auth"> 
            
             <Link to="/carrito" className="nav-link nav-carrito" title="Ver Carrito">
             
                  <div className="carrito-icon-wrapper">
                    <FontAwesomeIcon icon={faShoppingCart} className="icono-carrito" />
                      
                      <span className="cart-item-count">
                        {carrito.reduce((acc, item) => acc + item.cantidad, 0)}
                     </span>

                 </div>

             </Link>
 
            {isAuthenticated ? (
                // Lógica de usuario logueado
                <div className="auth-user-info">
                    <span className="user-greeting">
                        Hola, {usuario.nombre}
                    </span>

                    {usuario.nombre === "admin" && (
                        <Link to="/dashboard" className="nav-link nav-dashboard">
                            Dashboard
                        </Link>
                    )}

                    <button
                        onClick={manejarCerrarSesion}
                        className="btn-logout"
                    >
                        Cerrar Sesión <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                </div>
            ) : (
                // Si no está autenticado
                <Link className="nav-link nav-login" to="/iniciar-sesion">Iniciar Sesión</Link>
            )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;