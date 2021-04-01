import { ILoadCharacterList } from '@/domain/usecases';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
      <div className={Styles.content}>HOME</div>
    </div>
  );
};

export default Dashboard;
