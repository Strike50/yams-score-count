import Head from "next/head";
import {useState} from "react";

const YamsGridPage = () => {
  const [nbOfPlayer, setNumberOfPlayer] = useState(1);
  const [players, setPlayers] = useState({});
  const arrayNbPlayers = Array.from({length: nbOfPlayer}, (v, i) => i+1);

  const handlePlayerNameChange = (playerNumber: number, playerName: string) => {
    setPlayers({
      ...players,
      [playerNumber]: {
        name: playerName,
      }
    });
  }

  return <>
    <Head><title>Grille de score YAMS</title></Head>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Grille de score YAMS</h1>
      <div>
        <span>Nombre de joueurs: </span>
        <span>{nbOfPlayer} </span>
        <select onChange={(event) => setNumberOfPlayer(Number(event.target.value))}>
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
        {console.log(players)}
      </div>
    <table style={{ border: '4px black solid', margin: '15px'}}>
      <thead>
      <tr>
        <td></td>
        {arrayNbPlayers.map((element, i) =>
          <td key={`player-${element}`}>{players[element]?.name}</td>)}
      </tr>
      </thead>
    <tbody style={{border: '2px black solid'}}>
    <tr><td>1 [total de 1]</td></tr>
    <tr><td>2 [total de 2]</td></tr>
    <tr><td>3 [total de 3]</td></tr>
    <tr><td>4 [total de 4]</td></tr>
    <tr><td>5 [total de 5]</td></tr>
    <tr><td>6 [total de 6]</td></tr>
    <tr><td>Bonus si {'>'} à 62 [35]</td></tr>
    <tr><td>Total supérieur</td></tr>
    <tr><br/></tr>
    <tr><td>Brelan [total]</td></tr>
    <tr><td>Carré [total]</td></tr>
    <tr><td>Full House [25]</td></tr>
    <tr><td>Petite suite [30]</td></tr>
    <tr><td>Grande suite [40]</td></tr>
    <tr><td>Yams [50]</td></tr>
    <tr><td>Chance [Total]</td></tr>
    <tr><td>Total inférieur [Total]</td></tr>
    <tr><br/></tr>
    <tr><td>Total</td></tr>
    </tbody>
    </table>
    </div>
  </>
}

export default YamsGridPage;
