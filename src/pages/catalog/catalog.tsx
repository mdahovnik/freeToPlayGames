import {Card, Descriptions, Flex, Pagination, Spin} from "antd";
import {TCatalog} from "./type.ts";
import {FC, useState} from "react";
import {Link} from "react-router-dom";

function formatDateRU(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // месяцы от 0
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export const Catalog: FC<TCatalog> = ({games}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  const startIndex = (currentPage - 1) * pageSize;
  const paginationGames = games.slice(startIndex, startIndex + pageSize);
  return (
    <>
      {!paginationGames.length ?
        <Spin size={'large'}></Spin>
        :
        <>
          <Flex gap={'middle'} wrap justify={'center'}>
            {
              paginationGames.map((game) => (
                <Link key={game.id}
                      to={`/game/${game.id}`}
                      style={{width: '20em'}}
                      onClick={() => {
                      }}>
                  <Card cover={<img alt={game.short_description} src={game.thumbnail}></img>}
                        loading={!paginationGames.length}
                        hoverable
                        onClick={() => {
                          console.log('click')
                        }}>
                    <Descriptions title={game.title}
                                  column={1}
                                  size={'small'}>
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
          <Pagination defaultCurrent={1}
                      total={games.length}
                      defaultPageSize={9}
                      pageSizeOptions={[9, 18, 36, 72]}
                      onShowSizeChange={(_, size) => setPageSize(size)}
                      onChange={(page => setCurrentPage(page))}
                      align={'center'}/>
        </>
      }
    </>
  )
}