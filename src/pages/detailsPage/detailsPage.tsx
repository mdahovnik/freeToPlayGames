import style from "./detailsPage.module.css";
import { Layout, Spin } from "antd";
import { FC, ReactElement, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageHeader } from "@ant-design/pro-components";
import { useDispatch, useSelector } from "../../services/store/store.ts";
import { selectGame } from "../../services/slices/detailsSlice/detailsSlice.ts";
import { getDetailsThunk } from "../../services/slices/detailsSlice/thunks/details-thunk.ts";

const { Content } = Layout;

export const DetailsPage: FC<{ children: ReactElement }> = ({ children }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectGame);

  const onBack = () => navigate("/");

  useEffect(() => {
    if (!id) return;

    const promise = dispatch(getDetailsThunk(id));

    return () => {
      promise.abort();
    };
  }, [id, dispatch]);

  if (isLoading) {
    return <Spin size={"large"} tip="Data loading..."></Spin>;
  }

  return (
    <>
      <PageHeader title={"Game Details"} onBack={onBack} />
      <Content className={style.contentDetails}>{children}</Content>
    </>
  );
};
