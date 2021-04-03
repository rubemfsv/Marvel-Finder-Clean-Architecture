import React from 'react';

import Styles from './styles.scss';

const NoContent: React.FC = () => {
  return (
    <div className={Styles.container}>
      <span className={Styles.firstMessage}>
        Ops, algo inesperado aconteceu!
      </span>
      <span className={Styles.secondMessage}>
        Talvez você tenha digitado algo incorreto ou a API se comportou
        inesperadamente. Tente novamente :)
      </span>
    </div>
  );
};

export default NoContent;
