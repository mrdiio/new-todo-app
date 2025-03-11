import { boolean, pgTable, text } from 'drizzle-orm/pg-core'
import { id, timestamps } from '../helper/column.helper'
import { todos } from './todos'
import { relations } from 'drizzle-orm'

export const users = pgTable('users', {
  ...id,
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  image: text('image'),
  active: boolean('active').notNull().default(true),
  ...timestamps,
})

export const usersRelations = relations(users, ({ many }) => ({
  todos: many(todos),
}))
