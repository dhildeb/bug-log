<template>
  <div class="row border my-2 shadow-sm rounded">
    <div class="col-md-3 col-10 p-4 d-flex flex-column border-bottom" v-if="note.creator">
      <img class="rounded-circle" :src="note.creator.picture" alt="profile">
      <span>{{ note.creator.name }}</span>
    </div>
    <div class="col-md-8 order-md-1 order-3 p-5">
      <p>
        "{{ note.body }}"
      </p>
    </div>
    <i title="Delete Note" class="col-1 order-md-3 click mdi mdi-trash-can align-self-center" @click="deleteNote"></i>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { noteService } from '../services/noteService'
import Notification from '../utils/Notification'
export default {
  props: {
    note: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({

    })
    return {
      state,
      async deleteNote() {
        try {
          if (await Notification.confirmAction('are you sure you want to delete this note?')) {
            const note = await noteService.deleteNote(props.note.id)
            Notification.toast(note, 'success')
          }
        } catch (error) {
          Notification.toast(error.message)
        }
      }
    }
  }
}
</script>

<style>
img{
  max-width: 50px;
}
.mdi{
  transform: scale(2);
  color: red;
}
.click{
  cursor: pointer;
}
</style>
