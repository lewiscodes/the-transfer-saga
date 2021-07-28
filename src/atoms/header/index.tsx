import logo from '../../logos/TheTransferSaga.png'
import Searchbar from '../searchbar';
import styles from './styles.module.scss';

const Header = (): JSX.Element => {
    return (
        <div className={styles.header}>
            <img src={logo} alt='The Transfer Saga logo' />
            <h1>The Transfer Saga</h1>
            <Searchbar />
        </div>
    );
}

export default Header;
