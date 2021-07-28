import { useParams } from "react-router-dom";

const ClubPage = (): JSX.Element => {
    const params = useParams<{ clubId: string }>();
    console.log(params.clubId); //eslint-disable-line
    return (
        <div>Club Page</div>
    );
}

export default ClubPage;