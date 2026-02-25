import { useEffect, useState } from "react";

export default function RandomText({
  url = "https://api.quotable.io/random",
  textKey = "content",
}) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la petición");
        }
        return res.json();
      })
      .then((data) => {
        setText(data[textKey]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url, textKey]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "10px",
        maxWidth: "500px",
      }}
    >
      <p>{text}</p>
    </div>
  );
}

// Usage example:
// <RandomText />

// or custom API:
// <RandomText
//   url="https://api.quotable.io/random"
//   textKey="content"
// />

//textKey es la clave del objeto JSON que contiene el texto a mostrar. En el caso de la API de quotable, el texto está en la propiedad "content". Si usas otra API, asegúrate de ajustar textKey al nombre correcto.