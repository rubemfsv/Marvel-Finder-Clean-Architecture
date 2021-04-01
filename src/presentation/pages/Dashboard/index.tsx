import { ILoadCharacterList } from '@/domain/usecases';
import { Header } from '@/presentation/components';
import React, { useEffect } from 'react';

import Styles from './styles.scss';

type DashboardProps = {
  loadCharacterList: (hero: string) => ILoadCharacterList;
};

const Dashboard: React.FC<DashboardProps> = ({
  loadCharacterList,
}: DashboardProps) => {
  useEffect(() => {
    loadCharacterList('')
      .load()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={Styles.dashboard}>
      <Header />
    </div>
  );
};

export default Dashboard;
