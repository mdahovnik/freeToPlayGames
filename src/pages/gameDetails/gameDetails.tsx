import {Card, Flex, Image} from "antd";
import {FC} from "react";
import {TGameDetails} from "./type.ts";

export const GameDetails: FC<TGameDetails> = ({details}) => {


  return (
    <>
      <Card cover={<img src={details.thumbnail}/>}>
        <p>{details.title}</p>
        <p>Release date: {details.release_date}</p>
        <p>Publisher: {details.publisher}</p>
        <p>Genre: {details.genre}</p>
        <p>Developer: {details.developer}</p>
        <p>{details.description}</p>
      </Card>
      <Flex gap={"small"}>
        {
          details.screenshots.map((item) => (
            <Image src={item.image}></Image>
          ))
        }
      </Flex>
    </>
  )
}