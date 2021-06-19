import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugService {
  async getAll(query = '') {
    const res = await api.get('api/bugs', query)
    AppState.bugs = res.data
  }

  async getOne(bugId) {
    const res = await api.get('api/bugs/' + bugId)
    AppState.activeBug = res.data
  }

  async getNotes(bugId) {
    const res = await api.get('api/' + bugId + '/notes')
    AppState.notes = res.data
  }

  async createBug(body) {
    const res = await api.post(body)
    AppState.bugs.push(res.data)
  }

  async editBug(bugId, body) {
    const res = await api.put('api/bugs/' + bugId, body)
    const bugIndex = AppState.bugs.findIndex(bugId)
    AppState.bugs.splice(bugIndex, 1, res.data)
  }

  async closeBug(bugId) {
    const res = await api.delete(bugId)
    const bugIndex = AppState.bugs.findIndex(bugId)
    AppState.bugs.splice(bugIndex, 1, res.data)
  }
}

export const bugService = new BugService()
