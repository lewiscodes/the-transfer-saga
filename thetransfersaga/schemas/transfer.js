const transferSchema =  {
    title: 'Transfer Rumor',
    name: 'transfer',
    type: 'document',
    fields: [
        {
            title: 'Source',
            name: 'source',
            type: 'reference',
            to: [{ type: 'sources' }]
        },
        {
            title: 'Player',
            name: 'player',
            type: 'reference',
            to: [{ type: 'players' }]
        },
        {
            title: 'To Club',
            name: 'toClub',
            type: 'reference',
            to: [{ type: 'clubs' }]
        },{
            title: 'Price',
            name: 'price',
            type: 'string',
        }
    ]
}

export default transferSchema;
