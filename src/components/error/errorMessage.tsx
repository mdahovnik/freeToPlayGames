import styles from "./error.module.css";
import { Typography } from "antd";
import { FC } from "react";
import errorImage from "../../assets/errorImage.svg";

const { Text, Title } = Typography;

export const ErrorMessage: FC = () => (
  <div className={styles.errorWrapper}>
    <img
      width={150}
      height={135}
      src={errorImage}
      alt="Ошибка при получении данных"
    />
    <Title level={4}>Возникла ошибка при получении данных</Title>
    <Text>Попробуйте перезагрузить страницу</Text>
  </div>
);
