import {Card, Flex} from "antd";
import {TCatalog} from "./type.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

export const Catalog: FC<TCatalog> = ({games}) => {
  return (
    <>
      {
        <Flex gap={'small'}>
          {
            games.map((game) => (
              <Link key={game.id} to={`/game/${game.id}`}>
                <Card
                  cover={<img alt={game.short_description} src={game.thumbnail}></img>}
                  hoverable onClick={() => {
                  console.log('click')
                }}>
                  <p>{game.title}</p>
                  <p>{game.release_date}</p>
                  <p>{game.publisher}</p>
                  <p>{game.genre}</p>
                </Card>
              </Link>
            ))}
        </Flex>
      }
    </>
  )
}