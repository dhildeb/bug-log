import { AppState } from '../AppState'
import { api } from './AxiosService'

class NoteService {
  async createNote(body) {
    const res = await api.post('api/notes/', body)
    AppState.notes.push(res.data)
  }

  async deleteNote(noteId) {
    await api.delete('api/notes/' + noteId)
    AppState.notes = AppState.notes.filter(n => n.id !== noteId)
    return 'Note successfully deleted'
  }
}

export const noteService = new NoteService()
