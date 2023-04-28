import {PlayerList} from "@pages/index";

type TableHeaderProps = {
  playerList: PlayerList;
}

export const TableHeader = ({ playerList }: TableHeaderProps) => {
  return <thead>
  <tr>
    <td></td>
    {Object.entries(playerList).map(([position, {name}]) => <td key={`player-${position}`}>
        {name}
      </td>
    )}
  </tr>
  </thead>
}
