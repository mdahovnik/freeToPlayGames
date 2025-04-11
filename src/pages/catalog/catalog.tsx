import {Card, Flex} from "antd";
import {TCatalog} from "./type.ts";
import {FC} from "react";

export const Catalog: FC<TCatalog> = ({games}) => {
  return (
    <>{
      <Flex gap={'small'}>
        {
          games.map((game) => (
            <Card key={game.id}
                  cover={<img alt={game.short_description} src={game.thumbnail}></img>}
                  hoverable onClick={() => {
              console.log('click')
            }}>
              <p>{game.title}</p>
              <p>{game.release_date}</p>
              <p>{game.publisher}</p>
              <p>{game.genre}</p>
            </Card>
          ))}
      </Flex>
    }</>
  )
}