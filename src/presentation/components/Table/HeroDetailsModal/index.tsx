import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Character } from '@/domain/models';

import Styles from './styles.scss';

type HeroDetailsModalProps = {
  selectedHero: Character.Model;
  getClosedModal: (isClosed: boolean) => void;
};

const HeroDetailsModal: React.FC<HeroDetailsModalProps> = ({
  selectedHero,
  getClosedModal,
}: HeroDetailsModalProps) => {
  const handleClose = () => {
    getClosedModal(true);
  };

  return (
    <div className={Styles.modal}>
      <div className={Styles.content}>
        <div className={Styles.modalHeader}>
          <button className={Styles.modalClose} onClick={handleClose}>
            <FaTimesCircle className={Styles.icon} />
          </button>
        </div>
        <div className={Styles.modalBody}>{selectedHero?.name}</div>
      </div>
    </div>
  );
};

export default HeroDetailsModal;
