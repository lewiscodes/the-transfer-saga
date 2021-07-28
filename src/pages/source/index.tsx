import { useParams } from "react-router-dom";

const SourcePage = (): JSX.Element => {
    const params = useParams<{ sourceId: string }>()
    console.log(params.sourceId); //eslint-disable-line
    return (
        <div>Source Page</div>
    );
}

export default SourcePage;
