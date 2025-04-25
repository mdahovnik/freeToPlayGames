import { List } from "antd";
import { FC, useMemo } from "react";
import { GalleryCard } from "../card/galleryTemplate/galleryCard";
import { TGame } from "../../pages/galleryPage/type";

export const Gallery: FC<{ games: TGame[] }> = ({ games }) => {
  //   const games = useSelector(selectGames);

  //   const paginationGames = useMemo(() => {
  //     return games.slice(startIndex, startIndex + pageSize);
  //   }, [games, startIndex, pageSize]);

  return (
    <List
      dataSource={games}
      // loading={isLoading}
      grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }}
      renderItem={(game) => (
        <List.Item>
          <GalleryCard game={game} key={game.id} />
        </List.Item>
      )}
    />
  );
};
