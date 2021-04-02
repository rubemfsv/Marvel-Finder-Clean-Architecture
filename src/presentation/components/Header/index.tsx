import React from 'react';

import Styles from './styles.scss';

const Header: React.FC = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.systemTitleContainer}>
        <div>
          <span className={Styles.systemTitleBold}>BUSCA MARVEL</span>
          <span className={Styles.systemTitleRegular}>TESTE FRONT-END</span>
        </div>
        <div className={Styles.line} />
      </div>
      <span className={Styles.userNameTitle}>@RUBEMFSV</span>
    </div>
  );
};

export default Header;
