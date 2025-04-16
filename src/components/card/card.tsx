import {FC, useState} from "react";
import {Card, Carousel, Descriptions, Image, Skeleton} from "antd";
import {TGameCard} from "../../pages/catalog/type.ts";

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

export const GameCard: FC<TGameCardProps> = ({card}) => {
  const [loaded, setLoaded] = useState(true);
  return (
    <Card cover={
      <>
        {!loaded && <Skeleton.Image  active/>}
        <img alt={card.title} src={card.thumbnail} loading={'lazy'} onLoad={() => setLoaded(true)}/>
      </>
    }>
      <Descriptions title={card.title}
                    column={1}
                    size={'small'}>
        <Descriptions.Item label={'Release date'}>
          {formatDateRU(card.release_date)}
        </Descriptions.Item>
        <Descriptions.Item label={'Publisher'}>
          {card.publisher}</Descriptions.Item>
        <Descriptions.Item label={'Genre'}>
          {card.genre}</Descriptions.Item>
        <Descriptions.Item label={'Developer'}>
          {card.developer}
        </Descriptions.Item>
        {card.description?.length &&
            <Descriptions.Item label={'Description'}
                               styles={{content: {textAlign: "start"}}}>
              {card.description}
            </Descriptions.Item>}
      </Descriptions>
      {card.screenshots?.length &&
          <Carousel arrows infinite={true}>
            {
              card.screenshots.map((item) => (
                <Image src={item.image}></Image>
              ))
            }
          </Carousel>}
    </Card>
  )
}