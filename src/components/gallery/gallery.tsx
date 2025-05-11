import {List} from "antd";
import {FC} from "react";
import {GalleryCard} from "../card/galleryTemplate/galleryCard";
import {PaginationComponent} from "../pagination/paginationComponent";
import {selectGames, selectSlicedPage} from "../../services/slices/gamesSlice/gamesSlice";
import {useSelector} from "../../services/store/store.ts";
import {selectCurrentPage, selectPageSize} from "../../services/slices/paginationSlice/paginationSlice.ts";

export const Gallery: FC = () => {
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);
  const itemsToDisplay = useSelector(selectSlicedPage(currentPage, pageSize));
  const {isLoading} = useSelector(selectGames);

  return (
    <>
      <List
        dataSource={itemsToDisplay}
        loading={isLoading}
        grid={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5}}
        renderItem={(game) => (
          <List.Item>
            <GalleryCard game={game}/>
          </List.Item>
        )}
      />
      <PaginationComponent/>
    </>
  );
};
