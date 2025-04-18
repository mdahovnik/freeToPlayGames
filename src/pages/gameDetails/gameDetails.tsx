import {Button, Flex, Spin} from "antd";
import {FC, useEffect, useState} from "react";
import {getGameDetails} from "../../utils/game-api.ts";
import {Link, useParams} from "react-router-dom";
import {LeftOutlined} from "@ant-design/icons";
import {GameCard} from "../../components/card/card.tsx";
import {TGameCard} from "../catalog/type.ts";

// const headerStyle: React.CSSProperties = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   fontSize: 32,
//   paddingInline: 48,
//   lineHeight: '64px',
//   backgroundColor: '#4096ff',
// };

type TGameDetailProps = {
  children: string
}

export const GameDetails: FC<TGameDetailProps> = ({children, ...props}) => {
  const {id} = useParams();
  const [gameDetails, setGameDetails] = useState<TGameCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const abortController = new AbortController();
    const {signal} = abortController;
    const fetchCardDetails = async () => {
      try {
        setIsLoading(true);
        const gameDetails = await getGameDetails(id, signal);
        console.log('fetchGameDetails: ', gameDetails);
        setGameDetails(gameDetails);
      } catch (err) {
        console.log('fetchGameDetails =>', err)
        // setError(err)
      } finally {
        setIsLoading(false);
      }
    }

    fetchCardDetails()
      .then(() => console.log('fetchCardDetails success'));

    return () => {
      console.log('abortController.abort')
      abortController.abort()
    };
  }, [id])

  if (isLoading) {
    return <Spin size={'large'} tip='Data loading...'></Spin>
  }

  return (
    <>
      <Flex wrap style={{marginInline: '10px'}} justify={'center'}>
        <Link to={'/'}>
          <Button><LeftOutlined/></Button>
        </Link>
        <h1 {...props} style={{marginInline: '10px'}}>{children}</h1>
      </Flex>
      {gameDetails &&
          <GameCard card={gameDetails}/>
      }
    </>
  )
}