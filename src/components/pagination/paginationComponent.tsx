import { Pagination, PaginationProps } from "antd";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { TGame } from "../../pages/galleryPage/type";
import { useSelector } from "react-redux";
import { slicedPage } from "../../services/slices/gamesSlice/gamesSlice";

type TPaginationComponent = {
  total: number;
  onSetCardsToDisplay: Dispatch<SetStateAction<TGame[]>>;
};

export const PaginationComponent: FC<TPaginationComponent> = ({
  total,
  onSetCardsToDisplay,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const itemsToDisplay = useSelector(slicedPage(currentPage, pageSize));

  const onPageChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    onSetCardsToDisplay(itemsToDisplay);
  }, [currentPage, total]);

  //   useEffect(() => {
  //     setCurrentPage(1);
  //   }, [games]);

  return (
    <Pagination
      current={currentPage}
      onChange={onPageChange}
      total={total}
      pageSize={pageSize}
      defaultPageSize={20}
      showSizeChanger={false}></Pagination>
  );
};
