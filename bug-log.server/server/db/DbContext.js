import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { bugSchema } from '../models/Bug'
import { noteSchema } from '../models/Note'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)
  Account = mongoose.model('Account', AccountSchema)
  Bug = mongoose.model('Bug', bugSchema)
  Note = mongoose.model('Note', noteSchema)
}

export const dbContext = new DbContext()
