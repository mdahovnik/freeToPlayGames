import { Pagination, PaginationProps } from "antd";
import { FC} from "react";
import {useDispatch} from "../../services/store/store.ts";
import { useSelector } from "../../services/store/store.ts";
import {
  selectCurrentPage,
  selectPageSize,
  setCurrentPage,
  setPageSize
} from "../../services/slices/paginationSlice/paginationSlice.ts";

type TPaginationComponent = {
  total: number;
};

export const PaginationComponent: FC<TPaginationComponent> = ({
  total
}) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  // useEffect(() => {
  //   onSetCardsToDisplay(itemsToDisplay);
  // }, [currentPage, total]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageSize, setPageSize] = useState(15);
  dispatch(setPageSize(20));
  const pageSize = useSelector(selectPageSize);
  // const itemsToDisplay = useSelector(slicedPage(currentPage, pageSize));

  const onPageChange: PaginationProps["onChange"] = (page) => {
    // setCurrentPage(page);
    dispatch(setCurrentPage(page))
    console.log("setCurrentPage:", page)
  };


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
