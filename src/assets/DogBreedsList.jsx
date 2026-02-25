import { useEffect, useState } from "react";

export default function DogBreedsList({
  url = "https://api.thedogapi.com/v1/breeds",
}) {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener las razas");
        }
        return res.json();
      })
      .then((data) => {
        setBreeds(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <p>Cargando razas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Razas</h2>
      <ul>
        {breeds.map((breed) => (
          <li key={breed.id}>
            <a
              href={breed.wikipedia_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {breed.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Usage example:
// <DogBreedsList />

// or custom URL:
// <DogBreedsList url="https://api.thedogapi.com/v1/breeds" />