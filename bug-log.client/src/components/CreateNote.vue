<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#create-note-modal">
    add note
  </button>

  <!-- Modal -->
  <div class="modal fade" id="create-note-modal" tabindex="-1" aria-labelledby="create-note-modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-secondary">
          <h5 class="modal-title" id="create-note-modalLabel">
            New Note
          </h5>
          <button type="button" title="close" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createNote">
            <div class="form-group">
              <label class="sr-only" for="note title"></label>
              <input v-model="state.newNote.body" type="text" placeholder="Title here..." required>
            </div>
            <button type="submit" class="btn btn-primary">
              create note
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
import { noteService } from '../services/noteService'
import Notification from '../utils/Notification'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      newNote: {
        creator: AppState.account,
        bug: route.params.id
      }
    })
    return {
      state,
      async createNote() {
        try {
          await noteService.createNote(state.newNote)
          $('#create-note-modal').modal('hide')
          state.newNote.body = ''
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
