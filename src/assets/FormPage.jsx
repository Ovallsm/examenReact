import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../context/tokenContext";

export default function FormPage() {
  const { setToken, setName, setPlayerId, setRoomId } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    setToken(form.token.value);
    setName(form.name.value);
    setPlayerId(form.playerId.value);
    setRoomId(form.roomId.value);

    navigate("/view");
  };

  return (
    <div>
      <h2>Introducir Datos</h2>
      <form onSubmit={handleSubmit}>
        <input name="token" placeholder="Token" defaultValue={localStorage.getItem("token") || ""} />
        <br />
        <input name="name" placeholder="Nombre" defaultValue={localStorage.getItem("name") || ""} />
        <br />
        <input name="playerId" placeholder="Player ID" defaultValue={localStorage.getItem("playerId") || ""} />
        <br />
        <input name="roomId" placeholder="Room ID" defaultValue={localStorage.getItem("roomId") || ""} />
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}