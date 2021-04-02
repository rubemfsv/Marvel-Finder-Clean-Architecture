import React from 'react';
import { Character } from '@/domain/models';

import Styles from './styles.scss';
import HeroCard from './HeroCard';

type TableProps = {
  charactersArray: Character.Model[];
};

const Table: React.FC<TableProps> = ({ charactersArray }: TableProps) => {
  return (
    <table className={Styles.tableContent}>
      <thead>
        <tr>
          <th className={Styles.columnHeader}>Personagem</th>
          <th className={Styles.columnHeader}>Séries</th>
          <th>Eventos</th>
        </tr>
      </thead>
      <tbody>
        {charactersArray.map((character: Character.Model, index: number) => {
          return <HeroCard character={character} index={index} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
