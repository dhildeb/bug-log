<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#create-bug-modal">
    Report Bug
  </button>

  <!-- Modal -->
  <div class="modal fade" id="create-bug-modal" tabindex="-1" aria-labelledby="create-bug-modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-secondary">
          <h5 class="modal-title" id="create-bug-modalLabel">
            Report Bug
          </h5>
          <button type="button" title="close" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createBug">
            <div class="form-group">
              <label class="sr-only" for="bug title"></label>
              <input v-model="state.newBug.title" type="text" placeholder="Title here..." required>
            </div>
            <div class="form-group">
              <label class="sr-only" for="bug description"></label>
              <textarea class="w-75"
                        v-model="state.newBug.description"
                        type="textArea"
                        rows="4"
                        placeholder="Description here..."
                        required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Report Bug
            </button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import $ from 'jquery'
import { bugService } from '../services/bugService'
import Notification from '../utils/Notification'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      newBug: {
        creator: AppState.account
      }
    })
    return {
      state,
      async createBug() {
        try {
          const bug = await bugService.createBug(state.newBug)
          AppState.activeBug = bug
          state.newBug.title = ''
          state.newBug.description = ''
          $('#create-bug-modal').modal('hide')
          router.push({ path: `/bug/${bug.id}` })
        } catch (error) {
          Notification.toast(error.message)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
