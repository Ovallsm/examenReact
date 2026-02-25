import { useLocation } from "react-router-dom";

export default function Page() {
  const location = useLocation();

  return (
    <div>
      <h2>Ruta actual</h2>
      <p>{location.pathname}</p>
    </div>
  );
}