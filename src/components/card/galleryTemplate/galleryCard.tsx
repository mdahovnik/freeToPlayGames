import style from "../galleryTemplate/galleryCard.module.css";
import { FC, useState } from "react";
import {
  Card,
  Col,
  Descriptions,
  Row,
  Skeleton,
  Space,
  Tag,
  Typography,
} from "antd";
import { TGame } from "../../../pages/galleryPage/type.ts";
import { formatDateRU } from "../../../utils/hooks.ts";
import { useNavigate } from "react-router-dom";
import React from "react";
import { DescriptionGame } from "../../descriptionGame/descriptionGame.tsx";

// const { Item } = Descriptions;
// const { Title, Text } = Typography;

export const GalleryCard: FC<{ game: TGame }> = React.memo(({ game }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();

  const onClick = (id: number) => {
    navigation(`/game/${id}`);
  };

  return (
    <Card
      className={style.galleryCardStyle}
      onClick={() => onClick(game.id)}
      hoverable
      cover={
        <>
          <Skeleton.Image active={isLoading} className={style.coverSkeleton} />
          <img
            alt={game.title}
            src={game.thumbnail}
            className={style.coverImage}
            loading={"lazy"}
            onLoad={() => setIsLoading(false)}
          />
        </>
      }>
      <DescriptionGame game={game} />
      {/* <Descriptions column={1} title={card.title} size={"small"}>
        <Item label={"release"}>
          <Text ellipsis>{formatDateRU(card.release_date)}</Text>
        </Item>
        <Item label={"publisher"}>
          <Text ellipsis>{card.publisher}</Text>
        </Item>
        <Item label={"genre"}>
          <Text ellipsis>{card.genre}</Text>
        </Item>
      </Descriptions> */}
    </Card>
  );
});

// {/* {card.description?.length ? ( */}
// {/* <Space> */}
// {/* <Skeleton.Node active style={{ width: 120, height: 30 }} />
//     {[...Array(4)].map(() => (
//       <Skeleton.Node active style={{ width: 220, height: 20 }} />
//     ))} */}
// {/* </Space> */}
// {/* ) : ( */}
