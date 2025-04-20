import style from '../galleryTemplate/galleryCard.module.css';
import {FC, useState} from "react";
import {Card, Descriptions, Skeleton, Space} from "antd";
import * as React from "react";
import {TGameCard} from "../../../pages/catalog/type.ts";
import {formatDateRU} from "../../../utils/hooks.ts";

type TGameCardProps = {
  card: TGameCard;
}

export const GalleryCard: FC<TGameCardProps> = React.memo(({card}) => {
  const {Item} = Descriptions;
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Card className={style.galleryCardStyle}
          cover={
            <>
              <Skeleton.Image active={isLoading}
                              className={style.coverSkeleton}/>
              <img alt={card.title}
                   src={card.thumbnail}
                   className={style.coverImage}
                   loading={'lazy'}
                   onLoad={() => setIsLoading(false)}/>
            </>
          }>
      {card.description?.length ?
        (
          <Space>
            <Skeleton.Node active style={{width: 120, height: 30}}/>
            {[...Array(4)].map(() => (
              <Skeleton.Node active style={{width: 220, height: 20}}/>
            ))}
          </Space>
        ) : (
          <Descriptions column={1} title={card.title}
                        className={style.cardDescription}
                        size={'small'}>
            <Item label={'Release date'}>{formatDateRU(card.release_date)}</Item>
            <Item label={'Publisher'}>{card.publisher}</Item>
            <Item label={'Genre'}>{card.genre}</Item>
            <Item label={'Developer'}>{card.developer}</Item>
          </Descriptions>
        )}
    </Card>
  )
})