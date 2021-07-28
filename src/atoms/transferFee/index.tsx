import Arrows from "../arrows"
import styles from './styles.module.scss';

interface ITransferFeeProps {
    readonly transferFee: string;
}

const TransferFee = ({ transferFee }: ITransferFeeProps): JSX.Element => {
    return (
        <div className={styles.transferFee}>
            <span>{transferFee}</span>
            <Arrows length={transferFee.length} />
        </div>
    );
}

export default TransferFee;
