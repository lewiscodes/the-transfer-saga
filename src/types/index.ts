export interface ITransfer {
    readonly _id: string;
    readonly _createdAt: Date;
    readonly player: IPlayer;
    readonly toClub: IClub;
    readonly price: string;
    readonly source: ISource;
}

export interface IPlayer {
    readonly _id: string;
    readonly name: string;
    readonly club: IClub;
}

export interface IClub {
    readonly _id: string;
    readonly name: string;
    readonly primaryColor: string;
    readonly secondaryColor: string;
}

export interface ISource {
    readonly _id: string;
    readonly name: string;
}