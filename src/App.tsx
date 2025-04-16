import './App.css'
import {Catalog} from "./pages/catalog/catalog.tsx";
import {GameDetails} from "./pages/gameDetails/gameDetails.tsx";
import {Route, Routes} from "react-router-dom";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";


const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#4096ff',
};

function App() {

  return (
    <>
      <Layout>
        <Content style={contentStyle}>
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
