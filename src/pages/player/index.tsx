import { useParams } from "react-router-dom";


const PlayerPage = (): JSX.Element => {
    const params = useParams<{ playerId: string }>();
    console.log(params.playerId); //eslint-disable-line

    return (
        <div>Player Page</div>
    );
};

export default PlayerPage;
