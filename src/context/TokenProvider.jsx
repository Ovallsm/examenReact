import { useState } from "react";
import TokenContext from "./tokenContext";

function TokenProvider({ children }) {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
  const [playerId, setPlayerId] = useState(null);
  const [roomId, setRoomId] = useState(null);
  return (
    <TokenContext.Provider value={{ token, setToken, name, setName, playerId, setPlayerId, roomId, setRoomId  }}> 
      {children}
    </TokenContext.Provider>
  );
}

export default TokenProvider;
