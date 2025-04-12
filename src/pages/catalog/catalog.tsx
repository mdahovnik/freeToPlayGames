import {Card, Descriptions, Flex} from "antd";
import {TCatalog} from "./type.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

export const Catalog: FC<TCatalog> = ({games}) => {
  return (
    <>
      {
        <div style={{margin: 'auto 0'}}>

          <Flex gap={'small'} wrap justify={'center'}>
            {
              games.map((game) => (
                <Link key={game.id} to={`/game/${game.id}`} style={{width: '20em'}}>
                  <Card cover={<img alt={game.short_description} src={game.thumbnail}></img>}
                        hoverable
                        onClick={() => {
                          console.log('click')
                        }}>
                    <Descriptions title={game.title} column={1} size={'small'}>
                      <Descriptions.Item label={'Release date'}>{game.release_date}</Descriptions.Item>
                      <Descriptions.Item label={'Publisher'}>{game.publisher}</Descriptions.Item>
                      <Descriptions.Item label={'Developer'}>{game.developer}</Descriptions.Item>
                      <Descriptions.Item label={'Genre'}>{game.genre}</Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Link>
              ))}
          </Flex>
        </div>
      }
    </>
  )
}