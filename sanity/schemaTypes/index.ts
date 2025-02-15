import { type SchemaTypeDefinition } from 'sanity'
import collections from './collections'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [collections],
}
