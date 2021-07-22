const clubSchema =  {
    title: 'Clubs',
    name: 'clubs',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'League',
            name: 'league',
            type: 'reference',
            to: [{ type: 'leagues' }]
        }
    ]
}

export default clubSchema;
