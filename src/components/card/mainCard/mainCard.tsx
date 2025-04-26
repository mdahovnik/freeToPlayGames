import style from "../detailsTemplate/detailsCard.module.css";
import { Card, Carousel, Descriptions, Typography, Image } from "antd";
import { FC, useState } from "react";
import { formatDateRU } from "../../../utils/hooks.ts";
import { TGame } from "../../../pages/mainPage/type.ts";

type TGameCardProps = {
  card: TGame;
};

export const MainCard: FC<TGameCardProps> = ({ card }) => {
  const { Item } = Descriptions;
  const [loaded, setLoaded] = useState(false);
  return (
    <Card>
      <Card.Grid hoverable={false} className={style.poster}>
        <Typography.Title level={2} style={{ textAlign: "start" }}>
          {card.title}
        </Typography.Title>
        <img
          alt={card.title}
          loading={"lazy"}
          onLoad={() => setLoaded(true)}
          src={card.thumbnail}
          style={{ width: "100%", borderRadius: "5px" }}
        />
        {card.minimum_system_requirements && (
          <Descriptions
            column={1}
            className={style.cardDescription}
            size={"small"}>
            {Object.entries(card.minimum_system_requirements).map(
              ([key, value]) => (
                <Descriptions.Item
                  label={key}
                  styles={{ content: { textAlign: "start" } }}>
                  {value}
                </Descriptions.Item>
              )
            )}
          </Descriptions>
        )}
        <Descriptions
          column={1}
          className={style.cardDescription}
          size={"small"}>
          <Item label={"release"}>{formatDateRU(card.release_date)}</Item>
          <Item label={"publisher"}>{card.publisher}</Item>
          <Item label={"genre"}>{card.genre}</Item>
          <Item label={"developer"}>{card.developer}</Item>
          <Item label={"status"}>{card.status}</Item>
          {card.description?.length && (
            <Item
              label={"description"}
              styles={{ content: { textAlign: "start" } }}>
              {card.description}
            </Item>
          )}
        </Descriptions>
        {card.screenshots?.length && (
          <Carousel arrows infinite={true}>
            {card.screenshots.map((item) => (
              <Image src={item.image} />
            ))}
          </Carousel>
        )}
      </Card.Grid>
    </Card>
  );
};
