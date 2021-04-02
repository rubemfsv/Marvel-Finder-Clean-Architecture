import { Character } from '@/domain/models';
import React from 'react';

import Styles from './styles.scss';

type HeroCardProps = {
  character: Character.Model;
  index: number;
};

const HeroCard: React.FC<HeroCardProps> = ({
  character,
  index,
}: HeroCardProps) => {
  console.log(character);
  return (
    <tr key={index} className={Styles.tableBodyItem}>
      <td>
        <div className={Styles.characterInfoContainer}>
          <img
            className={Styles.characterAvatar}
            src={`${character.thumbnail.path}.jpg`}
            alt={character.name}
          />
          <span className={Styles.characterName}>{character.name}</span>
        </div>
      </td>
      <td>{character.series.available}</td>
      <td>{character.events.available}</td>
    </tr>
  );
};

export default HeroCard;
