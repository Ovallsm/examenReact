import React from "react";
import { useSearchParams } from "react-router-dom";

// Componente que usa useSearchParams
export default function BusquedaProductos() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Obtener parámetros actuales
  const categoria = searchParams.get("categoria") || "todas";
  const busqueda = searchParams.get("q") || "";

  // Manejar cambio de categoría
  const cambiarCategoria = (nuevaCategoria) => {
    setSearchParams({
      categoria: nuevaCategoria,
      q: busqueda,
    });
  };

  // Manejar cambio en input
  const handleChange = (e) => {
    setSearchParams({
      categoria,
      q: e.target.value,
    });
  };

  return (
    <div>
      <h2>Categoría: {categoria}</h2>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => cambiarCategoria("tecnologia")}>
          Tecnología
        </button>
        <button onClick={() => cambiarCategoria("ropa")}>
          Ropa
        </button>
        <button onClick={() => cambiarCategoria("hogar")}>
          Hogar
        </button>
      </div>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={handleChange}
      />

      <p>Texto de búsqueda: {busqueda}</p>
    </div>
  );
}

/*
====================================
CÓMO USAR ESTE COMPONENTE
====================================

1️⃣ Importalo en tu archivo donde defines las rutas (por ejemplo App.jsx):

   import { Routes, Route } from "react-router-dom";
   import BusquedaProductos from "./BusquedaProductos";

2️⃣ Declara la ruta:

   <Routes>
     <Route path="/productos" element={<BusquedaProductos />} />
   </Routes>

3️⃣ Ahora puedes navegar a una URL como:

   /productos?categoria=ropa&q=camisa

   El componente leerá automáticamente esos valores.

4️⃣ Cada vez que escribas en el input o cambies categoría,
   la URL se actualizará sin recargar la página.

        onChange={handleChange}
      />

      <p>Texto de búsqueda: {busqueda}</p>
    </div>
  );
}
  */
