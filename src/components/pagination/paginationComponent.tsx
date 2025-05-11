import {Pagination, PaginationProps} from "antd";
import {useDispatch, useSelector} from "../../services/store/store.ts";
import {
  selectCurrentPage,
  selectPageSize,
  setCurrentPage,
} from "../../services/slices/paginationSlice/paginationSlice.ts";
import {selectGames} from "../../services/slices/gamesSlice/gamesSlice.ts";

export const PaginationComponent = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const {games} = useSelector(selectGames);
  const pageSize = useSelector(selectPageSize);

  const onPageChange: PaginationProps["onChange"] = (page) => {
    dispatch(setCurrentPage(page))
  };

  return (
    <Pagination
      current={currentPage}
      onChange={onPageChange}
      total={games.length}
      pageSize={pageSize}
      defaultPageSize={20}
      showSizeChanger={false}/>
  );
};
