import Head from "next/head";
import {useState} from "react";

import {PlayerSelector} from "@components/PlayerSelector/PlayerSelector";
import {TableHeader} from "@components/TableHeader/TableHeader";

type Player = {
  name: string;
}

export type PlayerList = Record<number, Player>;

const YamsGridPage = () => {
  const [playerList, setPlayerList] = useState<PlayerList>({});

  return <>
    <Head><title>Grille de score YAMS</title></Head>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Grille de score YAMS</h1>
      <PlayerSelector playerList={playerList} setPlayerList={setPlayerList}/>
      <table style={{ border: '4px black solid', margin: '15px'}}>
        <TableHeader playerList={playerList} />
        <tbody style={{border: '2px black solid'}}>
        <tr><td>1 [total de 1]</td></tr>
        <tr><td>2 [total de 2]</td></tr>
        <tr><td>3 [total de 3]</td></tr>
        <tr><td>4 [total de 4]</td></tr>
        <tr><td>5 [total de 5]</td></tr>
        <tr><td>6 [total de 6]</td></tr>
        <tr><td>Bonus si {'>'} à 62 [35]</td></tr>
        <tr><td>Total supérieur</td></tr>
        <tr><td>Brelan [total]</td></tr>
        <tr><td>Carré [total]</td></tr>
        <tr><td>Full House [25]</td></tr>
        <tr><td>Petite suite [30]</td></tr>
        <tr><td>Grande suite [40]</td></tr>
        <tr><td>Yams [50]</td></tr>
        <tr><td>Chance [Total]</td></tr>
        <tr><td>Total inférieur [Total]</td></tr>
        <tr><td>Total</td></tr>
        </tbody>
      </table>
    </div>
  </>
}

export default YamsGridPage;
