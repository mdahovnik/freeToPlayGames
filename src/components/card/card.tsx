import style from './card.module.css';
import {FC, useState} from "react";
import {Card, CardProps, Carousel, Descriptions, DescriptionsProps, Image, Skeleton} from "antd";
import {TGameCard} from "../../pages/catalog/type.ts";
import * as React from "react";

type TGameCardProps = {
  card: TGameCard;
}

function formatDateRU(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // месяцы от 0
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

// Стили для тела карточки
const cardStyles: CardProps['styles'] = {
  body: {
    padding: 10,
    background: '#3a3f44',
  },
};

const descriptionsStyles: DescriptionsProps['styles'] = {
  title: {
    color: '#e9ecef',
    textAlign: 'start',
    textTransform: 'uppercase',
  },
  content: {
    color: '#e9ecef',
  },
  label: {
    color: '#7a8288'
  }
}

export const GameCard: FC<TGameCardProps> = React.memo(({card}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Card className={style.cardGameStyle}
          styles={cardStyles}
          cover={
            <>
              {!loaded &&
                  <Skeleton.Image active style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '160px'
                  }}/>
              }
              <img alt={card.title}
                   src={card.thumbnail}
                   style={{}}
                   onLoad={() => setLoaded(true)}/>
            </>
          }
    >
      <Descriptions column={1}
                    title={card.title}
                    styles={descriptionsStyles}
                    className={style.cardDescription}
                    size={'small'}>
        <Descriptions.Item label={'Release date'}>
          {formatDateRU(card.release_date)}
        </Descriptions.Item>
        <Descriptions.Item label={'Publisher'}>
          {card.publisher}
        </Descriptions.Item>
        <Descriptions.Item label={'Genre'}>
          {card.genre}
        </Descriptions.Item>
        <Descriptions.Item label={'Developer'}>
          {card.developer}
        </Descriptions.Item>
        {card.description?.length &&
            <Descriptions.Item label={'Description'}
                               styles={{content: {textAlign: "start"}}}>
              {card.description}
            </Descriptions.Item>}
      </Descriptions>
      {
        card.screenshots?.length &&
          <Carousel arrows infinite={true}>
            {
              card.screenshots.map((item) => (
                <Image src={item.image}></Image>
              ))
            }
          </Carousel>
      }
    </Card>
  )
})