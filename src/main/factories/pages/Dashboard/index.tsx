import React, { useCallback } from 'react';
import { Dashboard } from '@/presentation/pages';
import { makeLoadCharacterList } from '@/main/factories/usecases';

const makeDashboard: React.FC = () => {
  const loadCharacterList = useCallback((hero: string) => {
    return makeLoadCharacterList(hero);
  }, []);
  return <Dashboard loadCharacterList={loadCharacterList} />;
};

export default makeDashboard;
