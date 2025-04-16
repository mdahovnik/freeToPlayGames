import {Flex, Pagination, Skeleton} from "antd";
import {TGameCard} from "./type.ts";
import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getGamesApi} from "../../utils/game-api.ts";
import {GameCard} from "../../components/card/card.tsx";


export const Catalog: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [games, setGames] = useState<TGameCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const {signal} = abortController;
    setIsLoading(true);

    const fetchGames = async () => {
      try {
        const gamesData = await getGamesApi(signal);
        setGames(gamesData)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false);
      }
    }

    console.log('try isLoading', isLoading)
    fetchGames().then(() => {
      console.log('games loaded')
    })
    return () => {
      abortController.abort();
    }
  }, [isLoading])

  const startIndex = (currentPage - 1) * pageSize;
  const paginationGames = games.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <Flex gap={'middle'} wrap justify={'center'}>
        {isLoading
          ?
          Array.from({length: pageSize}).map((_, i) =>
            <Flex key={i} gap={'middle'} justify={'center'} vertical
                  style={{width: '20em', backgroundColor: 'grey', borderRadius: '10px'}}>
              <Skeleton.Image active style={{width: '20em', height: '10em'}}/>
              <Skeleton active paragraph={{rows: 4}} style={{width: '20em'}}>
              </Skeleton>
            </Flex>)
          :
          paginationGames.map((game) => (
            <Link key={game.id}
                  to={`/game/${game.id}`}
                  style={{width: '20em'}}
                  onClick={() => {
                  }}>
              <GameCard card={game}/>
            </Link>
          ))}
      </Flex>
      <Pagination defaultCurrent={1}
                  total={games.length}
                  defaultPageSize={9}
                  pageSizeOptions={[9, 18, 36, 72]}
                  onShowSizeChange={(_, size) => setPageSize(size)}
                  onChange={(page => setCurrentPage(page))}
                  align={'center'}/>
    </>
  )
}