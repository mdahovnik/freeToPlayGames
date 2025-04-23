import style from "../galleryTemplate/galleryCard.module.css";
import { FC, useState } from "react";
import { Card, Descriptions, Skeleton, Space, Typography } from "antd";
import * as React from "react";
import { TGameCard } from "../../../pages/gallery/type.ts";
import { formatDateRU } from "../../../utils/hooks.ts";

type TGameCardProps = {
  card: TGameCard;
};

export const GalleryCard: FC<TGameCardProps> = React.memo(({ card }) => {
  const { Item } = Descriptions;
  const { Text } = Typography;

  const [isLoading, setIsLoading] = useState(true);
  return (
    <Card
      className={style.galleryCardStyle}
      cover={
        <>
          <Skeleton.Image active={isLoading} className={style.coverSkeleton} />
          <img
            alt={card.title}
            src={card.thumbnail}
            className={style.coverImage}
            loading={"lazy"}
            onLoad={() => setIsLoading(false)}
          />
        </>
      }>
      {card.description?.length ? (
        <Space>
          <Skeleton.Node active style={{ width: 120, height: 30 }} />
          {[...Array(4)].map(() => (
            <Skeleton.Node active style={{ width: 220, height: 20 }} />
          ))}
        </Space>
      ) : (
        <Descriptions column={1} title={card.title} size={"small"}>
          <Item label={"release"}>
            <Text ellipsis>{formatDateRU(card.release_date)}</Text>
          </Item>
          <Item label={"publisher"}>
            <Text ellipsis>{card.publisher}</Text>
          </Item>
          <Item label={"genre"}>
            <Text ellipsis>{card.genre}</Text>
          </Item>
        </Descriptions>
      )}
    </Card>
  );
});
