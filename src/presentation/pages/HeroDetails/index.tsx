import { Character } from '@/domain/models';
import { ILoadCharacterList } from '@/domain/usecases';
import { Header, Pagination, Search } from '@/presentation/components';
import React, { useCallback, useEffect, useState } from 'react';

import Styles from './styles.scss';

type HeroDetailsProps = {
  loadCharacterList: (hero: string) => ILoadCharacterList;
};

const HeroDetails: React.FC<HeroDetailsProps> = ({
  loadCharacterList,
}: HeroDetailsProps) => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<Character.Model[]>();

  return (
    <div className={Styles.container}>
      <div className={Styles.heroDetails}>
        <Header />
      </div>
      <h1>hero</h1>
    </div>
  );
};

export default HeroDetails;
