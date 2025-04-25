import { Pagination, PaginationProps } from "antd";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { TGame } from "../../pages/galleryPage/type";
type TPaginationComponent = {
  games: TGame[];
  onSetCardsToDisplay: Dispatch<SetStateAction<TGame[]>>;
};
export const PaginationComponent: FC<TPaginationComponent> = ({
  games,
  onSetCardsToDisplay,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const onPageChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    onSetCardsToDisplay(games.slice(startIndex, endIndex));
  }, [currentPage, endIndex, games, startIndex]);

  //   useEffect(() => {
  //     setCurrentPage(1);
  //   }, [games]);

  return (
    <Pagination
      current={currentPage}
      onChange={onPageChange}
      total={games.length}
      pageSize={pageSize}
      defaultPageSize={20}
      showSizeChanger={false}></Pagination>
  );
};
