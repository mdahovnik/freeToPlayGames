import { Descriptions, Typography } from "antd";
import { FC } from "react";
import { TGame } from "../../pages/mainPage/type";
import { formatDateRU } from "../../utils/hooks";

const { Item } = Descriptions;
const { Text } = Typography;

export const DescriptionGame: FC<{ game: TGame }> = ({ game }) => {
  return (
    <Descriptions column={1} title={game.title} size={"small"}>
      <Item label={"release"}>
        <Text strong>{formatDateRU(game.release_date)}</Text>
      </Item>
      <Item label={"publisher"}>
        <Text strong ellipsis>
          {game.publisher}
        </Text>
      </Item>
      <Item label={"genre"}>
        <Text strong>{game.genre}</Text>
      </Item>
    </Descriptions>
  );
};
