import React from "react";

// Componente Navbar súper simple (React + JavaScript puro)
export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo o nombre */}
      <h1 className="logo">MiApp</h1>

      {/* Links de navegación */}
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

/*
=============================
CÓMO USAR ESTE COMPONENTE
=============================

1️⃣ Guarda este archivo como: Navbar.jsx

2️⃣ Crea un archivo en la misma carpeta llamado: Navbar.css

   Y agrega este código CSS:

   .navbar {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 15px 30px;
     background-color: #222;
     color: white;
   }

   .logo {
     margin: 0;
   }

   .nav-links {
     list-style: none;
     display: flex;
     gap: 20px;
     margin: 0;
     padding: 0;
   }

   .nav-links a {
     text-decoration: none;
     color: white;
   }

   .nav-links a:hover {
     color: #ccc;
   }

3️⃣ Importalo en tu archivo principal (por ejemplo App.jsx):

   import Navbar from "./Navbar";

4️⃣ Usalo dentro del return de tu App:

   export default function App() {
     return (
       <div>
         <Navbar />
         <h2>Contenido de la página</h2>
       </div>
     );
   }

Y listo 🚀
Ahora tienes una navbar simple usando React con JavaScript puro y CSS tradicional.
*/