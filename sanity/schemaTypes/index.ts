import { type SchemaTypeDefinition } from 'sanity'

import banner from '../schemas/banner'
import product from './product'
import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner,product,category],
}
