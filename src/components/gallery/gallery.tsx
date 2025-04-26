import { List } from "antd";
import { FC, useState } from "react";
import { GalleryCard } from "../card/galleryTemplate/galleryCard";
import { TGame } from "../../pages/mainPage/type";
import { PaginationComponent } from "../pagination/paginationComponent";
import { useSelector } from "react-redux";
import { selectGames } from "../../services/slices/gamesSlice/gamesSlice";

export const Gallery: FC = () => {
  const [itemsToDisplay, setItemsToDisplay] = useState<TGame[]>([]);
  const { games, isLoading } = useSelector(selectGames);

  return (
    <>
      <List
        dataSource={itemsToDisplay}
        grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }}
        renderItem={(game) => (
          <List.Item>
            <GalleryCard game={game} />
          </List.Item>
        )}
      />
      <PaginationComponent
        total={games.length}
        onSetCardsToDisplay={setItemsToDisplay}
      />
    </>
  );
};
