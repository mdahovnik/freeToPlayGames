import style from "./detailsCard.module.css";
import { FC } from "react";
import { Card, Carousel, Descriptions, Image, Typography } from "antd";
import { formatDateRU } from "../../../utils/hooks.ts";
import { useSelector } from "../../../services/store/store.ts";
import { selectGame } from "../../../services/slices/detailsSlice/detailsSlice.ts";

export const DetailsCard: FC = () => {
  const { Item } = Descriptions;
  const { game } = useSelector(selectGame);

  return (
    <>
      {game && (
        <Card className={style.detailCardStyle}>
          <Card.Grid hoverable={false} className={style.poster}>
            <Typography.Title level={2} style={{ textAlign: "start" }}>
              {game.title}
            </Typography.Title>
            <img
              alt={game.title}
              loading={"lazy"}
              src={game.thumbnail}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            {game.minimum_system_requirements && (
              <Descriptions
                column={1}
                className={style.cardDescription}
                size={"small"}>
                {Object.entries(game.minimum_system_requirements).map(
                  ([key, value]) => (
                    <Item
                      label={key}
                      styles={{ content: { textAlign: "start" } }}>
                      {value}
                    </Item>
                  )
                )}
              </Descriptions>
            )}
          </Card.Grid>
          <Card.Grid hoverable={false} className={style.screenShorts}>
            <Descriptions
              column={1}
              className={style.cardDescription}
              size={"small"}>
              <Item label={"release"}>{formatDateRU(game.release_date)}</Item>
              <Item label={"publisher"}>{game.publisher}</Item>
              <Item label={"genre"}>{game.genre}</Item>
              <Item label={"developer"}>{game.developer}</Item>
              <Item label={"status"}>{game.status}</Item>
              {game.description?.length && (
                <Item
                  label={"description"}
                  styles={{ content: { textAlign: "start" } }}>
                  <Typography.Paragraph
                    ellipsis={{ rows: 3, expandable: true, symbol: "More" }}>
                    {game.description}
                  </Typography.Paragraph>
                </Item>
              )}
            </Descriptions>
            {game.screenshots && (
              <Carousel arrows infinite={true}>
                {game.screenshots.map((item) => (
                  <Image src={item.image} />
                ))}
              </Carousel>
            )}
          </Card.Grid>
        </Card>
      )}
    </>
  );
};
