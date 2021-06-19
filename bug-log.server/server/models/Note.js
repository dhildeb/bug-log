import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const noteSchema = new Schema({
  body: { type: String, required: true },
  bug: { type: Schema.Types.ObjectId, ref: 'Bug', required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

noteSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
