import style from "./detailsCard.module.css";
import {FC, useState} from "react";
import {Card, Carousel, Descriptions, Image, Skeleton} from "antd";
import {TGameCard} from "../../../pages/catalog/type.ts";
import * as React from "react";
import {formatDateRU} from "../../../utils/hooks.ts";

type TGameCardProps = {
  card: TGameCard;
};

export const DetailsCard: FC<TGameCardProps> = React.memo(({card}) => {
  const {Item} = Descriptions;
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {/* <Skeleton loading={loaded} active paragraph={{rows:8, width: '30%'}}> */}

      <Card className={style.detailCardStyle}>
        <Card.Grid hoverable={false}
                   style={{width: "30%", padding: ".5rem"}}>
          <img alt={card.title}
               loading={"lazy"}
               onLoad={() => setLoaded(true)}
               src={card.thumbnail}
               style={{width: "100%", borderRadius: "5px"}}
          />
          {card.minimum_system_requirements && (
            <Descriptions column={1}
                          className={style.cardDescription}
                          size={"small"}>
              {Object.entries(card.minimum_system_requirements).map(
                ([key, value]) => (
                  <Descriptions.Item label={key}
                                     styles={{content: {textAlign: "start"}}}>
                    {value}
                  </Descriptions.Item>
                )
              )}
            </Descriptions>
          )}
        </Card.Grid>
        <Card.Grid hoverable={false}
                   style={{width: "70%", padding: ".5rem"}}>
          <Descriptions column={1}
                        title={card.title}
                        className={style.cardDescription}
                        size={"small"} >
            <Item label={"Release date"}>
              {formatDateRU(card.release_date)}
            </Item>
            <Item label={"Publisher"}  contentStyle={{textOverflow: 'ellipsis', textWrap: 'nowrap'}}>{card.publisher}</Item>
            <Item label={"Genre"}>{card.genre}</Item>
            <Item label={"Developer"}>{card.developer}</Item>
            <Item label={"Status"}>{card.status}</Item>
            {card.description?.length && (
              <Item label={"Description"}
                    styles={{content: {textAlign: "start"}}}>
                {card.description}
              </Item>
            )}
          </Descriptions>
          {card.screenshots?.length && (
            <Carousel arrows infinite={true}>
              {card.screenshots.map((item) => (
                <Image src={item.image}/>
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
