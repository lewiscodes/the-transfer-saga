import Section from "../../atoms/section";
import { ITransfer } from "../../types";
import TransferCard from "../transferCard";

interface ITopTransferTargetsProps {
    readonly transfers: ITransfer[];
}

const TopTransferTargets = (props: ITopTransferTargetsProps): JSX.Element => {
    return (
        <Section title="Top Transfer Targets">
            {props.transfers.map(transfer => <TransferCard transfer={transfer} key={transfer._id} />)}
        </Section>
    );
}


export default TopTransferTargets;