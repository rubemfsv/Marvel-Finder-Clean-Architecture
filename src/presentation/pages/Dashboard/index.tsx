import React, { useCallback, useEffect, useState } from 'react';
import { Character } from '@/domain/models';
import { ILoadCharacterList } from '@/domain/usecases';
import { Header, Pagination, Search } from '@/presentation/components';

import Styles from './styles.scss';

type DashboardProps = {
  loadCharacterList: (hero: string) => ILoadCharacterList;
};

const Dashboard: React.FC<DashboardProps> = ({
  loadCharacterList,
}: DashboardProps) => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<Character.Model[]>();

  useEffect(() => {
    loadCharacterList(search)
      .load()
      .then((response) => setSearchResult(response.data.results))
      .catch((error) => console.log(error));
  }, [search]);

  const getSearchResult = useCallback((inputValue: string) => {
    setSearch(inputValue);
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.dashboard}>
        <Header />
        <Search getInputResult={getSearchResult} />
      </div>
      <div className={Styles.paginationContainer}>
        <Pagination content={searchResult} itemPerPage={10} />
      </div>
    </div>
  );
};

export default Dashboard;
