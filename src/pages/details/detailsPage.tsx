import { Spin } from "antd";
import { FC, useEffect, useState } from "react";
import { getGameDetails } from "../../utils/game-api.ts";
import { useNavigate, useParams } from "react-router-dom";
import { DetailsCard } from "../../components/card/detailsTemplate/detailsCard.tsx";
import { TGameCard } from "../gallery/type.ts";
import { PageHeader } from "@ant-design/pro-components";

// type TGameDetailProps = {
//   children: string
// }

export const DetailsPage: FC = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState<TGameCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;

    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchCardDetails = async () => {
      try {
        setIsLoading(true);
        const gameDetails = await getGameDetails(id, signal);
        setGameDetails(gameDetails);
      } catch (err) {
        // setError(err)
      } finally {
        setIsLoading(false);
      }
    };

    fetchCardDetails().then(() => console.log("fetchCardDetails success"));

    return () => {
      console.log("abortController.abort");
      abortController.abort();
    };
  }, [id]);

  if (isLoading) {
    return <Spin size={"large"} tip="Data loading..."></Spin>;
  }
  const onBack = () => navigate("/");
  return (
    <div>
      <PageHeader title={"Game Details"} onBack={onBack} />
      {gameDetails && <DetailsCard card={gameDetails} />}
    </div>
  );
};
