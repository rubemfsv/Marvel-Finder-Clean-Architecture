import { ILoadCharacterList } from '@/domain/usecases';
import { Header, Search } from '@/presentation/components';
import React, { useCallback, useEffect, useState } from 'react';

import Styles from './styles.scss';

type DashboardProps = {
  loadCharacterList: (hero: string) => ILoadCharacterList;
};

const Dashboard: React.FC<DashboardProps> = ({
  loadCharacterList,
}: DashboardProps) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    loadCharacterList(search)
      .load()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, [search]);

  const getSearchResult = useCallback((inputValue: string) => {
    setSearch(inputValue);
  }, []);

  return (
    <div className={Styles.dashboard}>
      <Header />
      <Search getInputResult={getSearchResult} />
    </div>
  );
};

export default Dashboard;
