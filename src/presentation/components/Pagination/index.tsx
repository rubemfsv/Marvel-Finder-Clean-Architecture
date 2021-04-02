import React, { useEffect, useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { Character } from '@/domain/models';
import { Table } from '@/presentation/components';
import Styles from './styles.scss';

type PaginationProps = {
  content: Character.Model[];
  itemPerPage: number;
};

const renderData = (data) => {
  return <Table charactersArray={data} />;
};

const Pagination: React.FC<PaginationProps> = ({
  content,
  itemPerPage,
}: PaginationProps) => {
  const [data, setData] = useState<Character.Model[]>([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(itemPerPage);

  const [pageNumberLimit, setpageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  useEffect(() => {
    try {
      if (content) {
        setData(content);
      }
    } catch (error) {
      console.log('try catch pagination load error', error);
    }
  }, [content]);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage == number
              ? Styles.pageNumbersActive
              : Styles.pageNumbersInactive
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbutton = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementButton = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementButton = <li onClick={handleNextbutton}> &hellip; </li>;
  }

  const handleBackbutton = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageDecrementButton = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementButton = <li onClick={handleBackbutton}> &hellip; </li>;
  }

  return (
    <div className={Styles.pageContent}>
      <div className={Styles.container}>
        {renderData(currentItems)}
        <ul
          className={pages.length <= 1 ? Styles.singlePage : Styles.pageNumbers}
        >
          <li>
            <button
              onClick={handleBackbutton}
              disabled={currentPage == pages[0] ? true : false}
            >
              <FaCaretLeft className={Styles.icon} />
            </button>
          </li>
          {pageDecrementButton}
          {renderPageNumbers}
          {pageIncrementButton}

          <li>
            <button
              onClick={handleNextbutton}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >
              <FaCaretRight className={Styles.icon} />
            </button>
          </li>
        </ul>
      </div>
      <div className={Styles.footer} />
    </div>
  );
};

export default Pagination;
