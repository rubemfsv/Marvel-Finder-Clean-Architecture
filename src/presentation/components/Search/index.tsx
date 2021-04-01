import React from 'react';

import Styles from './styles.scss';

const Search: React.FC = () => {
  return (
    <div className={Styles.searchContainer}>
      <label className={Styles.searchLabel}>Nome do Personagem</label>
      <input className={Styles.searchInput} />
    </div>
  );
};

export default Search;
