import React, { useCallback, useEffect, useState } from 'react';
import { Character } from '@/domain/models';

import Styles from './styles.scss';
import HeroCard from './HeroCard';
import HeroDetailsModal from './HeroDetailsModal';

type TableProps = {
  charactersArray: Character.Model[];
};

const Table: React.FC<TableProps> = ({ charactersArray }: TableProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [arrayPosition, setArrayPosition] = useState<number>();
  const hero: Character.Model = charactersArray[arrayPosition];

  const getOpenModalFunction = useCallback((state: boolean, index: number) => {
    setShow(state);
    setArrayPosition(index);
  }, []);

  const getClosedModal = useCallback((isClosed: boolean) => {
    setShow(!isClosed);
  }, []);

  return (
    <>
      <table className={Styles.tableContent}>
        <thead>
          <tr>
            <th>Personagem</th>
            <th className={Styles.itemHeader}>Séries</th>
            <th className={Styles.itemHeader}>Eventos</th>
          </tr>
        </thead>
        <tbody>
          {charactersArray.map((character: Character.Model, index: number) => (
            <HeroCard
              character={character}
              key={index}
              index={index}
              modalState={show}
              getOpenModalFunction={getOpenModalFunction}
            />
          ))}
        </tbody>
      </table>
      {show && (
        <HeroDetailsModal selectedHero={hero} getClosedModal={getClosedModal} />
      )}
    </>
  );
};

export default Table;
