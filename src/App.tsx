import './App.css'
import {Catalog} from "./pages/catalog/catalog.tsx";
import {GameDetails} from "./pages/gameDetails/gameDetails.tsx";
import {Route, Routes} from "react-router-dom";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";


function App() {

  return (
    <>
      <Layout>
        <Content className={'content'}>
          <Routes>
            <Route path={'/'} element={<Catalog/>}></Route>
            <Route path='game/:id' element={<GameDetails>Game Details</GameDetails>}></Route>
          </Routes>
        </Content>
        {/*<Footer></Footer>*/}
      </Layout>
    </>
  )
}

export default App
