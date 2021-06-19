import { dbContext } from '../db/DbContext'

class NoteService {
  async createNote(body) {
    const note = await dbContext.Note.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return note
  }

  async deleteNote(noteId, userId) {
    const note = await dbContext.Note.findByIdAndDelete({ _id: noteId, creatorId: userId })
    return note
  }
}
export const noteService = new NoteService()
