import "./App.css";
import { GalleryPage } from "./pages/gallery/galleryPage.tsx";
import { DetailsPage } from "./pages/details/detailsPage.tsx";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

function App() {
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
