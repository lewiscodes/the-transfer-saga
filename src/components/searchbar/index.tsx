import { ChangeEvent, useState } from "react";
import cx from 'classnames';
import styles from './styles.module.scss';

interface ISearchbarProps {
    readonly classes?: string
}

const Searchbar = ({ classes }: ISearchbarProps): JSX.Element => {
    const [text, setText] = useState<string>();
    const searchbarContainerClasses =cx([classes, 'bp3-input-group bp3-large bp3-round', styles.searchBar])

    return (
        <div className={searchbarContainerClasses}>
            <span className="bp3-icon bp3-icon-search"></span>
            <input
                type="text"
                className="bp3-input"
                placeholder="Search"
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            />
        </div>
    );
}

export default Searchbar;
