import "./App.css";
import { GalleryPage } from "./pages/galleryPage/galleryPage.tsx";
import { DetailsPage } from "./pages/detailsPage/detailsPage.tsx";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Layout className={"layout"}>
        {/* <Suspense> */}
        <Content className={"content"}>
          <Routes>
            <Route path={"/"} element={<GalleryPage />}></Route>
            <Route path={"game/:id"} element={<DetailsPage />}></Route>
          </Routes>
        </Content>
        {/* </Suspense> */}
        {/*<Footer></Footer>*/}
      </Layout>
    </>
  );
}

export default App;
