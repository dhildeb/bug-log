<template>
  <!-- Modal -->
  <div class="modal fade" id="edit-bug-modal" tabindex="-1" aria-labelledby="edit-bug-modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-secondary">
          <h5 class="modal-title" id="edit-bug-modalLabel">
            Edit Bug
          </h5>
          <button type="button" title="close" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editBug">
            <div class="form-group">
              <label class="sr-only" for="bug title"></label>
              <input v-model="state.newBug.title" type="text" placeholder="Title here...">
            </div>
            <div class="form-group">
              <label class="sr-only" for="bug description"></label>
              <textarea class="w-75" v-model="state.newBug.description" type="text" placeholder="Description here..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit Changes
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
import $ from 'jquery'
import Notification from '../utils/Notification'
import { bugService } from '../services/bugService'
import { AppState } from '../AppState'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      newBug: {
        title: AppState.activeBug.title,
        description: AppState.activeBug.description
      }
    })
    return {
      state,
      async editBug() {
        try {
          bugService.editBug(props.bug.id, state.newBug)
          $('#edit-bug-modal').modal('hide')
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
