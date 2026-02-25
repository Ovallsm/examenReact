import React, { useRef } from "react";

// Componente que usa useRef
export default function InputFocus() {
  const inputRef = useRef(null);

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Ejemplo con useRef</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe algo..."
      />

      <button onClick={enfocarInput} style={{ marginLeft: "10px" }}>
        Enfocar input
      </button>
    </div>
  );
}

/*
====================================
CÓMO USAR ESTE COMPONENTE
====================================

1️⃣ Importalo donde lo necesites:

   import InputFocus from "./InputFocus";

2️⃣ Usalo dentro de tu JSX:

   function App() {
     return (
       <div>
         <InputFocus />
       </div>
     );
   }

====================================
¿QUÉ ESTÁ PASANDO AQUÍ?
====================================

- useRef crea una referencia que se mantiene entre renders.
- Se conecta al input usando la prop "ref".
- Cuando hacemos inputRef.current.focus(),
  accedemos directamente al DOM y enfocamos el input.

useRef se usa comúnmente para:
- Enfocar inputs
- Medir elementos
- Guardar valores sin causar re-render
*/
