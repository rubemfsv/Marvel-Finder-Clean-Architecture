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
      <td className={Styles.itemColumn}>
        {character.series.items.reduce((mappedItems, item, index) => {
          if (index < 3) {
            mappedItems.push(
              <div key={index}>
                <span className={Styles.itemName}>{item.name}</span>
                <br />
              </div>
            );
          }

          return mappedItems;
        }, [])}
      </td>
      <td className={Styles.itemColumn}>
        {character.events.items.reduce((mappedItems, item, index) => {
          if (index < 3) {
            mappedItems.push(
              <div key={index}>
                <span className={Styles.itemName}>{item.name}</span>
                <br />
              </div>
            );
          }

          return mappedItems;
        }, [])}
      </td>
    </tr>
  );
};

export default HeroCard;
