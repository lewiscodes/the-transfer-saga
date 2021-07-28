import { PropsWithChildren } from "react";
import { Card } from "@blueprintjs/core";
import styles from './styles.module.scss';

interface ISectionProps {
    readonly title: string;
}

const Section = (props: PropsWithChildren<ISectionProps>): JSX.Element => {
    return (
        <Card className={styles.card}>
            <h3 className={styles.heading}>{props.title}</h3>
            <div>
                {props.children}
            </div>
        </Card>
    );
}

export default Section;
