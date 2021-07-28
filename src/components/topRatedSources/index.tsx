import Section from "../../atoms/section";
import { ISource } from "../../types";

interface ITopRatedSources {
    readonly sources: ISource[];
}

const TopRatedSources = (props: ITopRatedSources): JSX.Element => {
    return (
        <Section title="Top Rated Sources"></Section>
    );
}


export default TopRatedSources;