import { text, timestamp } from 'drizzle-orm/pg-core'

export const id = {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
}

export const timestamps = {
  created_at: timestamp().defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date()),
  deleted_at: timestamp(),
}
