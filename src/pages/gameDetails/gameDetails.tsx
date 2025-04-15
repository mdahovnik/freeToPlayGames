import {Card, Carousel, Descriptions, Image} from "antd";
import {FC, useEffect, useState} from "react";
import {TGameDetails} from "./type.ts";
import {getGameDetails} from "../../utils/game-api.ts";
import {useParams} from "react-router-dom";

export const GameDetails: FC = () => {
  const {id} = useParams();
  const [gameDetails, setGameDetails] = useState<TGameDetails | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const {signal} = abortController;
    const fetchCardDetails = async () => {
      try {
        const gameDetails = await getGameDetails(id, signal);
        console.log('fetchGameDetails: ', gameDetails);
        setGameDetails(gameDetails);
      } catch (err) {
        console.log(err)
      }
    }

    fetchCardDetails()
      .then(() => console.log('fetchCardDetails success'));

    return () => {
      console.log('abortController.abort')
      abortController.abort()
    };
  }, [id])

  return (
    <>{
      gameDetails &&
        <Card cover={<img alt={gameDetails.title} src={gameDetails.thumbnail}/>}>
            <Descriptions title={gameDetails.title} column={1} size={'small'}>
                <Descriptions.Item label={'Release date'}>{gameDetails.release_date}</Descriptions.Item>
                <Descriptions.Item label={'Publisher'}>{gameDetails.publisher}</Descriptions.Item>
                <Descriptions.Item label={'Genre'}>{gameDetails.genre}</Descriptions.Item>
                <Descriptions.Item label={'Developer'}>{gameDetails.developer}</Descriptions.Item>
                <Descriptions.Item label={'Description'}
                                   styles={{content: {textAlign: "start"}}}>
                  {gameDetails.description}
                </Descriptions.Item>
            </Descriptions>
            <Carousel arrows infinite={true}>
              {
                gameDetails.screenshots.map((item) => (
                  <Image src={item.image}></Image>
                ))
              }
            </Carousel>
        </Card>
    }
    </>
  )
}