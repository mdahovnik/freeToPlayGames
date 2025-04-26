import style from "./galleryCard.module.css";
import { FC, useState } from "react";
import { Card } from "antd";
import { TGame } from "../../../pages/galleryPage/type.ts";
import { useNavigate } from "react-router-dom";
import { DescriptionGame } from "../../descriptionGame/descriptionGame.tsx";

export const GalleryCard: FC<{ game: TGame }> = ({ game }) => {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const onClick = () => {
    navigation(`/game/${game.id}`);
  };

  return (
    <Card
      className={style.galleryCardStyle}
      onClick={onClick}
      hoverable
      cover={
        <img
          alt={game.title}
          src={game.thumbnail}
          onLoad={() => setIsLoading(false)}
        />
      }>
      <DescriptionGame game={game} />
    </Card>
  );
};

// <Descriptions column={1} title={game.title} size={"small"}>
//   <Item label={"release"}>
//     <Text ellipsis>{formatDateRU(game.release_date)}</Text>
//   </Item>
//   <Item label={"publisher"}>
//     <Text ellipsis>{game.publisher}</Text>
//   </Item>
//   <Item label={"genre"}>
//     <Text ellipsis>{game.genre}</Text>
//   </Item>
// </Descriptions>

// <Card
//   style={{ height: 360 }}
//   onClick={onClick}
//   hoverable
//   cover={<img alt={game.title} src={game.thumbnail} />}>
//   <Row justify="space-between">
//     <Col>
//       <Title level={4}>{game.title}</Title>
//     </Col>
//     <Col>
//       <Tag>{game.genre}</Tag>
//     </Col>
//   </Row>
//   <Row justify="space-between">
//     <Col>
//       <Text>Издатель: </Text>
//       <Text strong>{game.publisher}</Text>
//     </Col>
//     <Col>
//       <Text ellipsis>{game.release_date}</Text>
//     </Col>
//   </Row>
// </Card>

// {/* {card.description?.length ? ( */}
// {/* <Space> */}
// {/* <Skeleton.Node active style={{ width: 120, height: 30 }} />
//     {[...Array(4)].map(() => (
//       <Skeleton.Node active style={{ width: 220, height: 20 }} />
//     ))} */}
// {/* </Space> */}
// {/* ) : ( */}

//formatDateRU(game.release_date)
