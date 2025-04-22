import style from "./detailsCard.module.css";
import { FC, useState } from "react";
import { Card, Carousel, Descriptions, Image, Typography } from "antd";
import { TGameCard } from "../../../pages/gallery/type.ts";
import * as React from "react";
import { formatDateRU } from "../../../utils/hooks.ts";

type TGameCardProps = {
  card: TGameCard;
};

export const DetailsCard: FC<TGameCardProps> = React.memo(({ card }) => {
  const { Item } = Descriptions;
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {/* <Skeleton loading={loaded} active paragraph={{rows:8, width: '30%'}}> */}

      <Card className={style.detailCardStyle}>
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
        </Card.Grid>
        {/*<Divider variant={'solid'}></Divider>*/}
        <Card.Grid hoverable={false} className={style.screenShorts}>
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
      {/* </Skeleton> */}
    </>
  );
});

// style={{
//   position: 'absolute',
//   top: 0,
//   left: 0
// }}
