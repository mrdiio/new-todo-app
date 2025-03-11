import { boolean, pgTable, text, varchar } from 'drizzle-orm/pg-core'
import { id, timestamps } from '../helper/column.helper'
import { users } from './users'
import { relations } from 'drizzle-orm'

export const todos = pgTable('todos', {
  ...id,
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  title: varchar('title').notNull(),
  description: text('description'),
  completed: boolean('completed').notNull().default(false),
  ...timestamps,
})

export const todosRelations = relations(todos, ({ one }) => ({
  users: one(users, {
    fields: [todos.userId],
    references: [users.id],
  }),
}))
