import Section from "../../components/section";
import styles from './styles.module.scss'

const Home = (): JSX.Element => {
    return (
        <div className={styles.home}>
            <Section title="Top Transfer Targets"></Section>
            <Section title="Top Rated Sources"></Section>
            <Section title="Top Rated Sources"></Section>
        </div>
    );
};

export default Home;
