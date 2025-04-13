import {Card, Descriptions, Flex, Pagination, Spin} from "antd";
import {TCatalog} from "./type.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

function formatDateRU(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // месяцы от 0
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export const Catalog: FC<TCatalog> = ({games}) => {
  return (
    <>
      {!games.length ?
        <Spin size={'large'}></Spin>
        :
        <>
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
                      <Descriptions.Item label={'Release date'}>
                        {formatDateRU(game.release_date)}
                      </Descriptions.Item>
                      <Descriptions.Item label={'Publisher'}>
                        {game.publisher}
                      </Descriptions.Item>
                      <Descriptions.Item label={'Developer'}>
                        {game.developer}
                      </Descriptions.Item>
                      <Descriptions.Item label={'Genre'}>
                        {game.genre}
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Link>
              ))}
          </Flex>
          <Pagination defaultCurrent={6} total={500}/>
        </>
      }
    </>
  )
}