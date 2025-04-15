import './App.css'
import {Catalog} from "./pages/catalog/catalog.tsx";
import {GameDetails} from "./pages/gameDetails/gameDetails.tsx";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {getGamesApi} from "./utils/game-api.ts";
import {TGameCard} from "./pages/catalog/type.ts";

function App() {
  const [games, setGames] = useState<TGameCard[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const {signal} = abortController;

    const fetchGames = async () => {
      try {
        const gamesData = await getGamesApi(signal);
        console.log(gamesData)
        setGames(gamesData)
      } catch (err) {
        console.log(err)
      }
    }

    fetchGames().then(() => console.log('games loaded'))
    return () => {
      abortController.abort();
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path={'/'} element={games && <Catalog games={games}/>}></Route>
        <Route path='game/:id' element={<GameDetails/>}></Route>
      </Routes>
    </>
  )
}

export default App
