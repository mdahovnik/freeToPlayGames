import './App.css'
import {Catalog} from "./pages/catalog/catalog.tsx";
import {GameDetails} from "./pages/gameDetails/gameDetails.tsx";
import {Route, Routes} from "react-router-dom";

function App() {
  const games = [
    {
      "id": 582,
      "title": "Tarisland",
      "thumbnail": "https://www.freetogame.com/g/582/thumbnail.jpg",
      "short_description": "A cross-platform MMORPG developed by Level Infinite and Published by Tencent.",
      "game_url": "https://www.freetogame.com/open/tarisland",
      "genre": "MMORPG",
      "platform": "PC (Windows)",
      "publisher": "Tencent",
      "developer": "Level Infinite",
      "release_date": "2024-06-22",
      "freetogame_profile_url": "https://www.freetogame.com/tarisland"
    },
    {
      "id": 540,
      "title": "Overwatch 2",
      "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
      "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
      "game_url": "https://www.freetogame.com/open/overwatch-2",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Activision Blizzard",
      "developer": "Blizzard Entertainment",
      "release_date": "2022-10-04",
      "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
    },
    {
      "id": 516,
      "title": "PUBG: BATTLEGROUNDS",
      "thumbnail": "https://www.freetogame.com/g/516/thumbnail.jpg",
      "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
      "game_url": "https://www.freetogame.com/open/pubg",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "KRAFTON, Inc.",
      "developer": "KRAFTON, Inc.",
      "release_date": "2022-01-12",
      "freetogame_profile_url": "https://www.freetogame.com/pubg"
    },
    {
      "id": 508,
      "title": "Enlisted",
      "thumbnail": "https://www.freetogame.com/g/508/thumbnail.jpg",
      "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
      "game_url": "https://www.freetogame.com/open/enlisted",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Gaijin Entertainment",
      "developer": "Darkflow Software",
      "release_date": "2021-04-08",
      "freetogame_profile_url": "https://www.freetogame.com/enlisted"
    },
    {
      "id": 345,
      "title": "Forge of Empires",
      "thumbnail": "https://www.freetogame.com/g/345/thumbnail.jpg",
      "short_description": "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
      "game_url": "https://www.freetogame.com/open/forge-of-empires",
      "genre": "Strategy",
      "platform": "Web Browser",
      "publisher": "InnoGames",
      "developer": "InnoGames",
      "release_date": "2012-04-17",
      "freetogame_profile_url": "https://www.freetogame.com/forge-of-empires"
    },
    {
      "id": 604,
      "title": "FragPunk",
      "thumbnail": "https://www.freetogame.com/g/604/thumbnail.jpg",
      "short_description": "A free-to-play 5v5 hero shooter that uses cards to modify matches.",
      "game_url": "https://www.freetogame.com/open/fragpunk",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Bad Guitar Studio",
      "developer": "Bad Guitar Studio",
      "release_date": "2025-03-06",
      "freetogame_profile_url": "https://www.freetogame.com/fragpunk"
    }
  ]
  const gameDetails = {
    "id": 582,
    "title": "Tarisland",
    "thumbnail": "https://www.freetogame.com/g/582/thumbnail.jpg",
    "status": "Live",
    "short_description": "A cross-platform MMORPG developed by Level Infinite and Published by Tencent.",
    "description": "Tarisland is a free-to-play cross-platform MMORPG developed by Level Infinite and Published by Tencent. \r\n\r\nAvailable on PC and mobile devices, the game allows players to easily move between both, taking the game with them when they can’t be at their desk. The game is designed to appeal to players of MMOs like World of Warcraft, offering players nine playable classes and 18 specializations.\r\n\r\nEach class features an extensive talent tree system and can be customized. Players of existing MMOs will be familiar with the standard tank, DPS, and healer lineup, necessary for the game’s classic raid and dungeon system. Explore a vast game world and solve mysteries. Pick up various trades such as gathering, mining, and crafting, and sell your items on the auction house.",
    "game_url": "https://www.freetogame.com/open/tarisland",
    "genre": "MMORPG",
    "platform": "Windows",
    "publisher": "Tencent",
    "developer": "Level Infinite",
    "release_date": "2024-06-22",
    "freetogame_profile_url": "https://www.freetogame.com/tarisland",
    "minimum_system_requirements": {
      "os": "Windows 10 64-bit",
      "processor": "Intel Core i5-4590 or AMD FX-8350",
      "memory": "8 GB",
      "graphics": "Nvidia GeForce GTX 960 or AMD Radeon R9 280",
      "storage": "20 GB"
    },
    "screenshots": [
      {
        "id": 1448,
        "image": "https://www.freetogame.com/g/582/tarisland-1.jpg"
      },
      {
        "id": 1449,
        "image": "https://www.freetogame.com/g/582/tarisland-2.jpg"
      },
      {
        "id": 1450,
        "image": "https://www.freetogame.com/g/582/tarisland-3.jpg"
      }
    ]
  }
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Catalog games={games}/>}></Route>
        <Route path='game/:id' element={<GameDetails details={gameDetails}/>}></Route>
      </Routes>
    </>
  )
}

export default App
