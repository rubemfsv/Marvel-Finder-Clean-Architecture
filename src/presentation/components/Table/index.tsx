import React, { useCallback, useState } from 'react';
import { Character } from '@/domain/models';

import Styles from './styles.scss';
import HeroCard from './HeroCard';
import HeroDetailsModal from './HeroDetailsModal';

type TableProps = {
  charactersArray: Character.Model[];
};

const Table: React.FC<TableProps> = ({ charactersArray }: TableProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedHero, setSelectedHero] = useState<Character.Model>();

  const getOpenModalFunction = useCallback(
    (state: boolean, hero: Character.Model) => {
      setShow(state);
      setSelectedHero(hero);
    },
    []
  );

  const getClosedModal = useCallback((isClosed: boolean) => {
    setShow(!isClosed);
  }, []);

  return (
    <>
      <table className={Styles.tableContent}>
        <thead>
          <tr>
            <th className={Styles.characterHeader}>Personagem</th>
            <th className={Styles.itemHeader}>Séries</th>
            <th className={Styles.itemHeader}>Eventos</th>
          </tr>
        </thead>
        <tbody>
          {charactersArray.map((character: Character.Model, index: number) => (
            <HeroCard
              character={character}
              index={index}
              key={index}
              modalState={show}
              getOpenModalFunction={getOpenModalFunction}
            />
          ))}
        </tbody>
      </table>
      {show && (
        <HeroDetailsModal
          selectedHero={selectedHero}
          getClosedModal={getClosedModal}
        />
      )}
    </>
  );
};

export default Table;
