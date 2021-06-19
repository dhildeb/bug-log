import { dbContext } from '../db/DbContext'

class NoteService {
  async createNote(body) {
    const newNote = await dbContext.Note.create(body)
    return newNote
  }

  async deleteNote(noteId, userId) {
    const note = await dbContext.Note.findByIdAndDelete({ _id: noteId, creatorId: userId })
    return note
  }
}
export const noteService = new NoteService()
