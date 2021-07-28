import { PropsWithChildren } from "react";
import { Card } from "@blueprintjs/core";
import styles from './styles.module.scss';

const CardComponent = (props: PropsWithChildren<{}>): JSX.Element => {
    return (
        <Card className={styles.card}>
            {props.children}
        </Card>
    );
}

export default CardComponent;
