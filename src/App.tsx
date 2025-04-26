import "./App.css";
import { MainPage } from "./pages/mainPage/mainPage.tsx";
import { DetailsPage } from "./pages/detailsPage/detailsPage.tsx";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "./services/store/store.ts";
import { getGames } from "./services/slices/gamesSlice/games-thunk.ts";
import { Gallery } from "./components/gallery/gallery.tsx";
import { DetailsCard } from "./components/card/detailsTemplate/detailsCard.tsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const promise = dispatch(getGames());

    return () => {
      promise.abort();
      console.log("getGames-abortController.abort");
      // dispatch(clearGames());
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <MainPage>
            <Gallery />
          </MainPage>
        }></Route>
      <Route
        path={"game/:id"}
        element={
          <DetailsPage>
            <DetailsCard />
          </DetailsPage>
        }></Route>
    </Routes>
  );
}

export default App;
