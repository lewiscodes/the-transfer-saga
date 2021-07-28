import Avatar from "../../atoms/avatar";
import Card from "../../atoms/card";
import Divider from '../../atoms/divider';
import TransferFee from "../../atoms/transferFee";
import { ERoutes } from "../../router";
import { ITransfer } from "../../types";

interface ITransferCardProps {
    readonly transfer: ITransfer;
}

const TransferCard = (props: ITransferCardProps): JSX.Element => {
    const { transfer } = props;
    return (
        <Card>
            <Avatar
                label={transfer.player.name}
                url={`${ERoutes.PLAYER}/${transfer.player._id}`}
                primaryColor={transfer.player.club.primaryColor}
                secondaryColor={transfer.player.club.secondaryColor}
            />
            <Divider />
            <Avatar
                isSquare
                label={transfer.player.club.name}
                url={`${ERoutes.CLUB}/${transfer.player.club._id}`}
                primaryColor={transfer.player.club.primaryColor}
                secondaryColor={transfer.player.club.secondaryColor}
            />
            <TransferFee transferFee={transfer.price} />
            <Avatar
                isSquare
                label={transfer.toClub.name}
                url={`${ERoutes.CLUB}/${transfer.toClub._id}`}
                primaryColor={transfer.toClub.primaryColor}
                secondaryColor={transfer.toClub.secondaryColor}
            />
            <Divider />
            <Avatar
                label={transfer.source.name}
                url={`${ERoutes.SOURCE}/${transfer.source._id}`}
            />
        </Card>
);
};

export default TransferCard;