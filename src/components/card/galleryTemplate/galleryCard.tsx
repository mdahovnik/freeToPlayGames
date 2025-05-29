import style from "./galleryCard.module.css";
import {FC, memo} from "react";
import {Card} from "antd";
import {TGame} from "../../../pages/mainPage/type.ts";
import {useNavigate} from "react-router-dom";
import {DescriptionGame} from "../../descriptionGame/descriptionGame.tsx";

export const GalleryCard: FC<{ game: TGame }> = memo(({game}) => {
  const navigation = useNavigate();

  const onCardClick = () => {
    navigation(`/game/${game.id}`);
  };

  return (
    <Card
      className={style.galleryCardStyle}
      onClick={onCardClick}
      hoverable
      cover={
        <img
          alt={game.title}
          src={game.thumbnail}
          loading={"lazy"}
        />
      }>
      <DescriptionGame game={game}/>
    </Card>
  );
});

