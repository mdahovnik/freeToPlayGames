import { Col, Descriptions, Row, Tag, Typography } from "antd";
import { FC } from "react";
import { TGame } from "../../pages/galleryPage/type";
import { formatDateRU } from "../../utils/hooks";

const { Item } = Descriptions;
const { Title, Text } = Typography;

export const DescriptionGame: FC<{ game: TGame }> = ({ game }) => {
  return (
    <Descriptions column={1} title={game.title} size={"small"}>
      <Item>
        <Tag>{game.genre}</Tag>
      </Item>
      <Item label={"release"}>
        <Text ellipsis>{formatDateRU(game.release_date)}</Text>
      </Item>
      <Item label={"publisher"}>
        <Text ellipsis>{game.publisher}</Text>
      </Item>
    </Descriptions>

    // <>
    //   <Row justify="space-between">
    //     <Title level={2}>{game.title}</Title>
    //   </Row>
    //   <Row gutter={10}>
    //     <Col>
    //       <Text>genre:</Text>
    //     </Col>
    //     <Col>
    //       <Text strong>{game.genre}</Text>
    //     </Col>
    //   </Row>
    //   <Row gutter={10}>
    //     <Col>
    //       <Text>release:</Text>
    //     </Col>
    //     <Col>
    //       <Text strong>{formatDateRU(game.release_date)}</Text>
    //     </Col>
    //   </Row>
    //   <Row gutter={10}>
    //     <Col>
    //       <Text>publisher: </Text>
    //     </Col>
    //     <Col>
    //       <Text strong ellipsis>
    //         {game.publisher}
    //       </Text>
    //     </Col>
    //   </Row>
    // </>
  );
};
