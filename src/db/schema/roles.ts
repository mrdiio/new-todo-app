import { pgTable, varchar } from 'drizzle-orm/pg-core'
import { id, timestamps } from '../helper/column.helper'

export const roles = pgTable('roles', {
  ...id,
  name: varchar('name').notNull().unique(),
  guard: varchar('guard'),
  ...timestamps,
})
