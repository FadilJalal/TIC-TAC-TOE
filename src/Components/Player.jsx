import { useRef, useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const inputRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    if (isEditing) {
      setPlayerName(inputRef.current.value);
    }
    setIsEditing((prev) => !prev); // toggle edit mode
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" ref={inputRef} defaultValue={playerName} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
}
