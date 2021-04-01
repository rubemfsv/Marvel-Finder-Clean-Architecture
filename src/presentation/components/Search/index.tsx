import React, { useEffect, useState } from 'react';

import Styles from './styles.scss';

type SearchProps = {
  getInputResult: (text: string) => void;
};

const Search: React.FC<SearchProps> = ({ getInputResult }: SearchProps) => {
  const [inputValue, setInputValue] = useState('');
  const [blurred, setBlurred] = useState(true);

  useEffect(() => {
    getInputResult(inputValue);
  }, [inputValue]);

  const handleInputChange = (
    event: React.FocusEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value);
  };

  return (
    <div className={Styles.searchContainer}>
      <label className={Styles.searchLabel}>Nome do Personagem</label>
      <input
        className={Styles.searchInput}
        onChange={handleInputChange}
        onFocus={() => setBlurred(false)}
        onBlur={() => setBlurred(true)}
      />
    </div>
  );
};

export default Search;
