import {Card, Carousel, Descriptions, Image} from "antd";
import {FC} from "react";
import {TGameDetails} from "./type.ts";

export const GameDetails: FC<TGameDetails> = ({details}) => {

  return (
    <>
      <Card cover={<img alt={details.title} src={details.thumbnail}/>}>
        <Descriptions title={details.title} column={1} size={'small'}>
          <Descriptions.Item label={'Release date'}>{details.release_date}</Descriptions.Item>
          <Descriptions.Item label={'Publisher'}>{details.publisher}</Descriptions.Item>
          <Descriptions.Item label={'Genre'}>{details.genre}</Descriptions.Item>
          <Descriptions.Item label={'Developer'}>{details.developer}</Descriptions.Item>
          <Descriptions.Item label={'Description'}
                             styles={{content: {textAlign: "start"}}}>
            {details.description}
          </Descriptions.Item>
        </Descriptions>
        <Carousel arrows infinite={true}>
          {
            details.screenshots.map((item) => (
              <Image src={item.image}></Image>
            ))
          }
        </Carousel>
      </Card>
    </>
  )
}