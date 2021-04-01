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
      <td>{character.name}</td>
      <td>{character.series.available}</td>
      <td>{character.events.available}</td>
    </tr>
  );
};

export default HeroCard;
