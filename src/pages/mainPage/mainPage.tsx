import style from "./mainPage.module.css";
import { FC, ReactElement } from "react";
import Title from "antd/es/typography/Title";
import { useSelector } from "../../services/store/store.ts";
import { selectGames } from "../../services/slices/gamesSlice/gamesSlice.ts";
import { Filter } from "../../components/filter/filter.tsx";
import { ErrorMessage } from "../../components/error/errorMessage.tsx";
import { Layout } from "antd";

const { Header, Content } = Layout;

export const MainPage: FC<{ children: ReactElement }> = ({ children }) => {
  const { error } = useSelector(selectGames);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <Layout className="layout">
      <Header className={style.headerStyle}>
        <Title className={style.catalogWrapper}>Free To Play Games</Title>
        <Filter></Filter>
      </Header>
      <Content className={"content"}>{children}</Content>
    </Layout>
  );
};
