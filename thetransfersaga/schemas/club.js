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
        },
        {
            title: 'Primary Color',
            name: 'primaryColor',
            type: 'string'
        },
        {
            title: 'Secondary Color',
            name: 'secondaryColor',
            type: 'string'
        }
    ]
}

export default clubSchema;
