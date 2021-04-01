import React from 'react';

import Styles from './styles.scss';

const Header: React.FC = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.systemTitleContainer}>
        <span className={Styles.systemTitleBorder}>BUS</span>
        <span className={Styles.systemTitleBold}>CA MARVEL</span>
        <span className={Styles.systemTitleRegular}>TESTE FRONT-END</span>
      </div>
      <span className={Styles.systemTitleRegular}>@RUBEMFSV</span>
    </div>
  );
};

export default Header;
