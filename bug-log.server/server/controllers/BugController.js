import { bugService } from '../services/BugService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
export class BugController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .get('/:id/notes', this.getNotes)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBug)
      .put('/:id', this.editBug)
      .delete('/:id', this.closeBug)
  }

  async getAll(req, res, next) {
    try {
      const bugs = await bugService.getAll(req.query)
      return res.send(bugs)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const bug = await bugService.getOne(req.params.id)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getNotes(req, res, next) {
    try {
      const notes = await bugService.getNotes(req.params.id)
      return res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugService.createBug(req.body)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async editBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugService.editBug(req.params.id, req.body)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async closeBug(req, res, next) {
    try {
      const bug = await bugService.closeBug(req.params.id, req.userInfo.id)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }
}
