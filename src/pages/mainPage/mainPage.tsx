import style from "./mainPage.module.css";
import { FC, ReactElement } from "react";
import Title from "antd/es/typography/Title";
import { useSelector } from "../../services/store/store.ts";
import { selectGames } from "../../services/slices/gamesSlice/gamesSlice.ts";
import { Filter } from "../../components/filter/filter.tsx";
import { ErrorMessage } from "../../components/error/errorMessage.tsx";
import { Layout, Space } from "antd";
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

export const MainPage: FC<{ children: ReactElement }> = ({ children }) => {
  const { error } = useSelector(selectGames);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <Layout className="layout">
      <Header className={style.headerStyle}>
        <Title className={style.catalogWrapper}>Free To Play Games</Title>
      </Header>
      <Filter></Filter>
      <Content className={"content"}>{children}</Content>
      <Footer>
        <Space>
          Ant Design ©{new Date().getFullYear()} Created by Maksim Dakhovnik
          <GithubOutlined />
        </Space>
      </Footer>
    </Layout>
  );
};
