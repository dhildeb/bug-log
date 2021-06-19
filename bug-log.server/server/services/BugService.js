import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class BugService {
  async getAll(query = {}) {
    const bugs = await dbContext.Bug.find(query).populate('creator')
    return bugs
  }

  async getOne(bugId) {
    const bug = await dbContext.Bug.findById(bugId).populate('creator')
    return bug
  }

  async getNotes(bugId) {
    const notes = await dbContext.Note.find({ bug: bugId }).populate('creator')
    return notes
  }

  async createBug(body) {
    const newBug = await dbContext.Bug.create(body)
    return newBug
  }

  async editBug(bugId, body) {
    let bug = await dbContext.Bug.findById(bugId)
    if (bug.closed) {
      throw new BadRequest('bug is closed, cannot be editted')
    }
    delete body.closed
    bug = await dbContext.Bug.findByIdAndUpdate(bugId, body, { new: true, runValidators: true }).populate('creator')
    return bug
  }

  async closeBug(bugId, userId) {
    const bug = await dbContext.Bug.findByIdAndUpdate(bugId, { closed: true, creatorId: userId }, { new: true, runValidators: true }).populate('creator')
    return bug
  }
}

export const bugService = new BugService()
