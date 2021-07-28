import cx from 'classnames';
import { Link } from 'react-router-dom';
import { getInitialsFromName } from '../../utils';
import styles from './styles.module.scss';

interface IAvatarProps {
    readonly label: string;
    readonly url: string;
    readonly isSquare?: boolean;
    readonly primaryColor?: string;
    readonly secondaryColor?: string;
}

const Avatar = ({ label, url, isSquare, primaryColor, secondaryColor }: IAvatarProps): JSX.Element => {
    const classes = cx([
        styles.avatar,
        { [styles['avatar_square']] : isSquare}
    ]);
    const initials = getInitialsFromName(label);
    return (
        <Link
            to={url}
            className={classes}
            title={label}
            style={{ backgroundColor: primaryColor, borderColor: secondaryColor }}
        >
            <span style={{ color: secondaryColor }}>{initials}</span>
        </Link>
    );
}

export default Avatar;
