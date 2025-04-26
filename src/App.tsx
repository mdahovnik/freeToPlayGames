import "./App.css";
import { GalleryPage } from "./pages/galleryPage/galleryPage.tsx";
import { DetailsPage } from "./pages/detailsPage/detailsPage.tsx";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect } from "react";
import { useDispatch } from "./services/store/store.ts";
import { getGames } from "./services/slices/gamesSlice/games-thunk.ts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const abortController = new AbortController();
    // const { signal } = abortController;
    dispatch(getGames());
    return () => {
      // abortController.abort();
      // dispatch(clearGames());
    };
  }, [dispatch]);

  return (
    <>
      <Layout className={"layout"}>
        <Content className={"content"}>
          <Routes>
            <Route path={"/"} element={<GalleryPage />}></Route>
            <Route path={"game/:id"} element={<DetailsPage />}></Route>
          </Routes>
        </Content>
        {/*<Footer></Footer>*/}
      </Layout>
    </>
  );
}

export default App;
