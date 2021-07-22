const playerSchema =  {
    title: 'Players',
    name: 'players',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Club',
            name: 'club',
            type: 'reference',
            to: [{ type: 'clubs' }]
        }
    ]
}

export default playerSchema;
