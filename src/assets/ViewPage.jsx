import { useContext } from "react";
import TokenContext from "../context/tokenContext";

export default function ViewPage() {
  const { token, name, playerId, roomId } = useContext(TokenContext);

  return (
    <div>
      <h2>Datos guardados</h2>
      <p><strong>Token:</strong> {token}</p>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Player ID:</strong> {playerId}</p>
      <p><strong>Room ID:</strong> {roomId}</p>
    </div>
  );
}