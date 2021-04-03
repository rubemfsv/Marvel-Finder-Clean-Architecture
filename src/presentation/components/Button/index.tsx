import { Character } from '@/domain/models';
import React from 'react';

import Styles from './styles.scss';

type ButtonProps = {
  response: Character.UrlModel;
};

const Button: React.FC<ButtonProps> = ({ response }: ButtonProps) => {
  return (
    <a href={response.url} className={Styles.buttonContainer} target="_blank">
      {response.type}
    </a>
  );
};

export default Button;
