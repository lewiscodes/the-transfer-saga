import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import leagueSchema from './league';
import clubSchema from './club';
import playerSchema from './player';
import sourceSchema from './source';
import transferSchema from './transfer';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    leagueSchema,
    clubSchema,
    playerSchema,
    sourceSchema,
    transferSchema
  ]),
})
