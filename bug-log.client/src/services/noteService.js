import { AppState } from '../AppState'
import { api } from './AxiosService'

class NoteService {
  async createNote(body) {
    const res = await api.post(body)
    AppState.notes.push(res.data)
  }

  async deleteNote(noteId) {
    await api.delete(noteId)
    AppState.notes.filter(n => n.id !== noteId)
  }
}

export const noteService = new NoteService()
