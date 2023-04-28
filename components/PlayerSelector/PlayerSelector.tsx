import {Dispatch, SetStateAction, useState} from "react";
import {PlayerList} from "@pages/index";

type PlayerSelectorProps = {
  playerList: PlayerList;
  setPlayerList:  Dispatch<SetStateAction<PlayerList>>;
}

export const PlayerSelector = ({ playerList, setPlayerList }: PlayerSelectorProps) => {
  const [nbOfPlayers, setNbOfPlayers] = useState(1);
  const arrayNbPlayers = Array.from({length: nbOfPlayers}, (v, i) => i+1);

  const handlePlayerNameChange = (playerNumber: number, playerName: string) => {
    setPlayerList({
      ...playerList,
      [playerNumber]: {
        name: playerName,
      }
    });
  }

  return <div>
    <span>Nombre de joueurs: </span>
    <span>{nbOfPlayers} </span>
    <select onChange={(event) => setNbOfPlayers(Number(event.target.value))}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
    </select>
    <br/>
    {arrayNbPlayers.map((element) =>
      <div key={`playerName-${element}`}>
        <span>Joueur {element}: </span>
        <input onChange={(event) => handlePlayerNameChange(element, event.target.value)}/>
      </div>
    )}
  </div>
}
