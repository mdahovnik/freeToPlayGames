import style from "./gallery.module.css";
import { FC, useState } from "react";
import Title from "antd/es/typography/Title";
import { Header } from "antd/es/layout/layout";
import { useSelector } from "../../services/store/store.ts";
import { selectGames } from "../../services/slices/gamesSlice/gamesSlice.ts";
import { TGame } from "./type.ts";
import { PaginationComponent } from "../../components/pagination/paginationComponent.tsx";
import { Filter } from "../../components/filter/filter.tsx";
import { ErrorMessage } from "../../components/error/errorMessage.tsx";
import { Gallery } from "../../components/gallery/gallery.tsx";

// const groupIntoRows = (data: TGameCard[], columns: number) => {
//   const rows: TGameCard[][] = [];
//   for (let i = 0; i < data.length; i += columns) {
//     rows.push(data.slice(i, i + columns));
//   }
//   return rows;
// };

// const gamesData = [
//   {
//     "id": 582,
//     "title": "Tarisland",
//     "thumbnail": "https://www.freetogame.com/g/582/thumbnail.jpg",
//     "short_description": "A cross-platform MMORPG developed by Level Infinite and Published by Tencent.",
//     "game_url": "https://www.freetogame.com/open/tarisland",
//     "genre": "MMORPG",
//     "platform": "PC (Windows)",
//     "publisher": "Tencent",
//     "developer": "Level Infinite",
//     "release_date": "2024-06-22",
//     "freetogame_profile_url": "https://www.freetogame.com/tarisland"
//   },
//   {
//     "id": 540,
//     "title": "Overwatch 2",
//     "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
//     "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
//     "game_url": "https://www.freetogame.com/open/overwatch-2",
//     "genre": "Shooter",
//     "platform": "PC (Windows)",
//     "publisher": "Activision Blizzard",
//     "developer": "Blizzard Entertainment",
//     "release_date": "2022-10-04",
//     "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
//   },
//   {
//     "id": 516,
//     "title": "PUBG: BATTLEGROUNDS",
//     "thumbnail": "https://www.freetogame.com/g/516/thumbnail.jpg",
//     "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
//     "game_url": "https://www.freetogame.com/open/pubg",
//     "genre": "Shooter",
//     "platform": "PC (Windows)",
//     "publisher": "KRAFTON, Inc.",
//     "developer": "KRAFTON, Inc.",
//     "release_date": "2022-01-12",
//     "freetogame_profile_url": "https://www.freetogame.com/pubg"
//   },
//   {
//     "id": 508,
//     "title": "Enlisted",
//     "thumbnail": "https://www.freetogame.com/g/508/thumbnail.jpg",
//     "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
//     "game_url": "https://www.freetogame.com/open/enlisted",
//     "genre": "Shooter",
//     "platform": "PC (Windows)",
//     "publisher": "Gaijin Entertainment",
//     "developer": "Darkflow Software",
//     "release_date": "2021-04-08",
//     "freetogame_profile_url": "https://www.freetogame.com/enlisted"
//   },
//   {
//     "id": 345,
//     "title": "Forge of Empires",
//     "thumbnail": "https://www.freetogame.com/g/345/thumbnail.jpg",
//     "short_description": "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
//     "game_url": "https://www.freetogame.com/open/forge-of-empires",
//     "genre": "Strategy",
//     "platform": "Web Browser",
//     "publisher": "InnoGames",
//     "developer": "InnoGames",
//     "release_date": "2012-04-17",
//     "freetogame_profile_url": "https://www.freetogame.com/forge-of-empires"
//   },
//   {
//     "id": 604,
//     "title": "FragPunk",
//     "thumbnail": "https://www.freetogame.com/g/604/thumbnail.jpg",
//     "short_description": "A free-to-play 5v5 hero shooter that uses cards to modify matches.",
//     "game_url": "https://www.freetogame.com/open/fragpunk",
//     "genre": "Shooter",
//     "platform": "PC (Windows)",
//     "publisher": "Bad Guitar Studio",
//     "developer": "Bad Guitar Studio",
//     "release_date": "2025-03-06",
//     "freetogame_profile_url": "https://www.freetogame.com/fragpunk"
//   },
//   {
//     "id": 590,
//     "title": "Throne And Liberty",
//     "thumbnail": "https://www.freetogame.com/g/590/thumbnail.jpg",
//     "short_description": "A free-to-play multi-platorm MMORPG from NCSoft and Amazon Games.",
//     "game_url": "https://www.freetogame.com/open/throne-and-liberty",
//     "genre": "MMORPG",
//     "platform": "PC (Windows)",
//     "publisher": "Amazon Games",
//     "developer": "NCSoft",
//     "release_date": "2024-10-01",
//     "freetogame_profile_url": "https://www.freetogame.com/throne-and-liberty"
//   },
//   {
//     "id": 475,
//     "title": "Genshin Impact",
//     "thumbnail": "https://www.freetogame.com/g/475/thumbnail.jpg",
//     "short_description": "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
//     "game_url": "https://www.freetogame.com/open/genshin-impact",
//     "genre": "Action RPG",
//     "platform": "PC (Windows)",
//     "publisher": "miHoYo",
//     "developer": "miHoYo",
//     "release_date": "2020-09-28",
//     "freetogame_profile_url": "https://www.freetogame.com/genshin-impact"
//   },
//   {
//     "id": 523,
//     "title": "Fall Guys",
//     "thumbnail": "https://www.freetogame.com/g/523/thumbnail.jpg",
//     "short_description": "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
//     "game_url": "https://www.freetogame.com/open/fall-guys",
//     "genre": "Battle Royale",
//     "platform": "PC (Windows)",
//     "publisher": "Mediatonic",
//     "developer": "Mediatonic",
//     "release_date": "2020-08-04",
//     "freetogame_profile_url": "https://www.freetogame.com/fall-guys"
//   },
//   {
//     "id": 340,
//     "title": "Game Of Thrones Winter Is Coming",
//     "thumbnail": "https://www.freetogame.com/g/340/thumbnail.jpg",
//     "short_description": "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
//     "game_url": "https://www.freetogame.com/open/game-of-thrones-winter-is-coming",
//     "genre": "Strategy",
//     "platform": "Web Browser",
//     "publisher": "GTArcade",
//     "developer": "YOOZOO Games ",
//     "release_date": "2019-11-14",
//     "freetogame_profile_url": "https://www.freetogame.com/game-of-thrones-winter-is-coming"
//   },
//   {
//     "id": 347,
//     "title": "Elvenar",
//     "thumbnail": "https://www.freetogame.com/g/347/thumbnail.jpg",
//     "short_description": "A browser based city-building strategy MMO set in the fantasy world of Elvenar.",
//     "game_url": "https://www.freetogame.com/open/elvenar",
//     "genre": "Strategy",
//     "platform": "Web Browser",
//     "publisher": "InnoGames",
//     "developer": "InnoGames",
//     "release_date": "2015-04-08",
//     "freetogame_profile_url": "https://www.freetogame.com/elvenar"
//   },
//   {
//     "id": 11,
//     "title": "Neverwinter",
//     "thumbnail": "https://www.freetogame.com/g/11/thumbnail.jpg",
//     "short_description": "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
//     "game_url": "https://www.freetogame.com/open/neverwinter",
//     "genre": "MMORPG",
//     "platform": "PC (Windows)",
//     "publisher": "Perfect World Entertainment",
//     "developer": "Cryptic Studios",
//     "release_date": "2013-12-06",
//     "freetogame_profile_url": "https://www.freetogame.com/neverwinter"
//   },
//   {
//     "id": 380,
//     "title": "Dark Orbit Reloaded",
//     "thumbnail": "https://www.freetogame.com/g/380/thumbnail.jpg",
//     "short_description": "A browser-based 3D space-combat MMO with a massive playerbase!",
//     "game_url": "https://www.freetogame.com/open/darkorbit",
//     "genre": "Shooter",
//     "platform": "Web Browser",
//     "publisher": "Bigpoint",
//     "developer": "Bigpoint",
//     "release_date": "2006-12-11",
//     "freetogame_profile_url": "https://www.freetogame.com/darkorbit"
//   },
//   {
//     "id": 517,
//     "title": "Lost Ark",
//     "thumbnail": "https://www.freetogame.com/g/517/thumbnail.jpg",
//     "short_description": "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
//     "game_url": "https://www.freetogame.com/open/lost-ark",
//     "genre": "ARPG",
//     "platform": "PC (Windows)",
//     "publisher": "Amazon Games",
//     "developer": "Smilegate RPG",
//     "release_date": "2022-02-11",
//     "freetogame_profile_url": "https://www.freetogame.com/lost-ark"
//   },
//   {
//     "id": 573,
//     "title": "Titan Revenge",
//     "thumbnail": "https://www.freetogame.com/g/573/thumbnail.jpg",
//     "short_description": "A 3D Norse-themed browser MMORPG developed and published by Game Hollywood Games",
//     "game_url": "https://www.freetogame.com/open/titan-revenge",
//     "genre": "MMORPG",
//     "platform": "Web Browser",
//     "publisher": "Game Hollywood Games",
//     "developer": "Game Hollywood Games",
//     "release_date": "2023-12-20",
//     "freetogame_profile_url": "https://www.freetogame.com/titan-revenge"
//   },
//   {
//     "id": 521,
//     "title": "Diablo Immortal",
//     "thumbnail": "https://www.freetogame.com/g/521/thumbnail.jpg",
//     "short_description": "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
//     "game_url": "https://www.freetogame.com/open/diablo-immortal",
//     "genre": "MMOARPG",
//     "platform": "PC (Windows)",
//     "publisher": "Blizzard Entertainment",
//     "developer": "Blizzard Entertainment",
//     "release_date": "2022-06-02",
//     "freetogame_profile_url": "https://www.freetogame.com/diablo-immortal"
//   },
//   {
//     "id": 522,
//     "title": "Flyff Universe",
//     "thumbnail": "https://www.freetogame.com/g/522/thumbnail.jpg",
//     "short_description": "Get the full Flyff experience on any platform with the free-to-play browser-based MMORPG Flyff Universe.",
//     "game_url": "https://www.freetogame.com/open/flyff-universe",
//     "genre": "MMORPG",
//     "platform": "Web Browser",
//     "publisher": "Gala Lab",
//     "developer": "Gala Lab",
//     "release_date": "2022-06-14",
//     "freetogame_profile_url": "https://www.freetogame.com/flyff-universe"
//   },
//   {
//     "id": 511,
//     "title": "Phantasy Star Online 2 New Genesis",
//     "thumbnail": "https://www.freetogame.com/g/511/thumbnail.jpg",
//     "short_description": "The legacy of Phantasy Star Online 2 continues a thousand years later!",
//     "game_url": "https://www.freetogame.com/open/pso2-new-genesis",
//     "genre": "MMORPG",
//     "platform": "PC (Windows)",
//     "publisher": "Sega",
//     "developer": "Sega",
//     "release_date": "2021-06-09",
//     "freetogame_profile_url": "https://www.freetogame.com/pso2-new-genesis"
//   },
//   {
//     "id": 455,
//     "title": "Eternal Fury",
//     "thumbnail": "https://www.freetogame.com/g/455/thumbnail.jpg",
//     "short_description": "A free-to-play ARPG from R2 Games!",
//     "game_url": "https://www.freetogame.com/open/eternal-fury",
//     "genre": "MMORPG",
//     "platform": "Web Browser",
//     "publisher": "R2 Games",
//     "developer": "R2 Games",
//     "release_date": "2019-05-21",
//     "freetogame_profile_url": "https://www.freetogame.com/eternal-fury"
//   },
//   {
//     "id": 5,
//     "title": "Crossout",
//     "thumbnail": "https://www.freetogame.com/g/5/thumbnail.jpg",
//     "short_description": "A post-apocalyptic MMO vehicle combat game! ",
//     "game_url": "https://www.freetogame.com/open/crossout",
//     "genre": "Shooter",
//     "platform": "PC (Windows)",
//     "publisher": "Targem",
//     "developer": "Gaijin",
//     "release_date": "2017-05-30",
//     "freetogame_profile_url": "https://www.freetogame.com/crossout"
//   },
//   {
//     "id": 9,
//     "title": "World of Warships",
//     "thumbnail": "https://www.freetogame.com/g/9/thumbnail.jpg",
//     "short_description": "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
//     "game_url": "https://www.freetogame.com/open/world-of-warships",
//     "genre": "Shooter",
//     "platform": "PC (Windows)",
//     "publisher": "Wargaming",
//     "developer": "Wargaming",
//     "release_date": "2015-07-02",
//     "freetogame_profile_url": "https://www.freetogame.com/world-of-warships"
//   },
//   {
//     "id": 12,
//     "title": "War Thunder",
//     "thumbnail": "https://www.freetogame.com/g/12/thumbnail.jpg",
//     "short_description": "A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.",
//     "game_url": "https://www.freetogame.com/open/war-thunder",
//     "genre": "Shooter",
//     "platform": "PC (Windows)",
//     "publisher": "Gaijin Entertainment",
//     "developer": "Gaijin Entertainment",
//     "release_date": "2013-08-15",
//     "freetogame_profile_url": "https://www.freetogame.com/war-thunder"
//   },
//   {
//     "id": 2,
//     "title": "World of Tanks",
//     "thumbnail": "https://www.freetogame.com/g/2/thumbnail.jpg",
//     "short_description": "If you like blowing up tanks, with a quick and intense game style you will love this game!",
//     "game_url": "https://www.freetogame.com/open/world-of-tanks",
//     "genre": "Shooter",
//     "platform": "PC (Windows)",
//     "publisher": "Wargaming",
//     "developer": "Wargaming",
//     "release_date": "2011-04-12",
//     "freetogame_profile_url": "https://www.freetogame.com/world-of-tanks"
//   },
//   {
//     "id": 599,
//     "title": "Marvel Rivals",
//     "thumbnail": "https://www.freetogame.com/g/599/thumbnail.jpg",
//     "short_description": "A free-to-play superhero team shooter from NetEase.",
//     "game_url": "https://www.freetogame.com/open/marvel-rivals",
//     "genre": "Shooter",
//     "platform": "PC (Windows)",
//     "publisher": "NetEase",
//     "developer": "NetEase",
//     "release_date": "2024-12-06",
//     "freetogame_profile_url": "https://www.freetogame.com/marvel-rivals"
//   },
//   {
//     "id": 560,
//     "title": "Palia",
//     "thumbnail": "https://www.freetogame.com/g/560/thumbnail.jpg",
//     "short_description": "A cozy MMO with homebuilding and some adventure.",
//     "game_url": "https://www.freetogame.com/open/palia",
//     "genre": "MMORPG",
//     "platform": "PC (Windows)",
//     "publisher": "Singularity Six",
//     "developer": "Singularity Six",
//     "release_date": "2023-08-10",
//     "freetogame_profile_url": "https://www.freetogame.com/palia"
//   }
// ]
// const genreRange = [
//   { value: "MMO", label: "MMO" },
//   { value: "MMORPG", label: "MMORPG" },
//   { value: "Shooter", label: "Shooter" },
//   { value: "Strategy", label: "Strategy" },
//   { value: "Card Games", label: "Card Games" },
//   { value: "Racing", label: "Racing" },
//   { value: "Sports", label: "Sports" },
//   { value: "Social", label: "Social" },
//   { value: "Fighting", label: "Fighting" },
// ];
// const platformsRange = [
//   {
//     value: "Windows",
//     label: (
//       <span>
//         <WindowsFilled />
//         &nbsp;Windows
//       </span>
//     ),
//   },
//   {
//     value: "Browser",
//     label: (
//       <span>
//         <LayoutFilled />
//         &nbsp;Browser
//       </span>
//     ),
//   },
//   { value: "All Platforms", label: "All Platforms" },
// ];
// const sortTypeRange = [
//   { value: "Relevance", label: "Relevance" },
//   { value: "Popularity", label: "Popularity" },
//   { value: "Release Date", label: "Release Date" },
//   { value: "Alphabetical", label: "Alphabetical" },
// ];

export const GalleryPage: FC = () => {
  const { games, error, isLoading } = useSelector(selectGames);
  const [itemsToDisplay, setItemsToDisplay] = useState<TGame[]>([]);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Header className={style.headerStyle}>
        <Title className={style.catalogWrapper}>Free To Play Games</Title>
      </Header>
      <Filter></Filter>
      <Gallery games={itemsToDisplay} />
      <PaginationComponent
        total={games.length}
        onSetCardsToDisplay={setItemsToDisplay}
      />
    </>
  );
};

// {/*{isLoading ?*/}
// {/*  (*/}
// {/*    <Flex wrap gap={16}>*/}
// {/*      {[...Array(20)].map(() => (*/}
// {/*        <Space style={{width: 235, height: 310, background: '#3a3f44', borderRadius: 10}} wrap>*/}
// {/*          <Skeleton.Image active={true} style={{width: 240, height: 135}}/>*/}
// {/*          <Skeleton.Node active={isLoading} style={{width: 120, height: 30}}/>*/}
// {/*          {[...Array(4)].map(() => (*/}
// {/*            <Skeleton.Node active={isLoading} style={{width: 220, height: 20}}/>*/}
// {/*          ))}*/}
// {/*        </Space>))}*/}
// {/*    </Flex>*/}
// {/*  ) : (*/}
