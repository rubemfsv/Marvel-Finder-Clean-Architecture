import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Character } from '@/domain/models';

import Styles from './styles.scss';
import Button from '../../Button';

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
        <div className={Styles.modalBody}>
          <div className={Styles.characterInfoContainer}>
            <img
              className={Styles.characterAvatar}
              src={`${selectedHero.thumbnail.path}.jpg`}
              alt={selectedHero.name}
            />
            <span className={Styles.characterName}>{selectedHero.name}</span>
          </div>
          <div className={Styles.descriptionContainer}>
            {selectedHero.description}
          </div>
          <hr className={Styles.division} />
          <div className={Styles.dataContainer}>
            <table className={Styles.tableContent}>
              <thead>
                <tr>
                  <th className={Styles.itemHeader}>Séries</th>
                  <th className={Styles.itemHeader}>Eventos</th>
                  <th className={Styles.itemHeader}>Histórias</th>
                  <th className={Styles.itemHeader}>Quadrinhos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedHero.series.available}</td>
                  <td>{selectedHero.events.available}</td>
                  <td>{selectedHero.stories.available}</td>
                  <td>{selectedHero.comics.available}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={Styles.buttonContainer}>
            <div className={Styles.infoTitleContainer}>
              <span className={Styles.infoPlus}>+</span>
              <span className={Styles.infoText}>Infos</span>
            </div>
            <div className={Styles.buttonsContainer}>
              {selectedHero.urls.map(
                (response: Character.UrlModel, index: number) => (
                  <Button key={index} response={response} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetailsModal;
