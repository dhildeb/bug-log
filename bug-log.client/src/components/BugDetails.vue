<template>
  <div class="row bg-secondary shadow-sm rounded p-1 mt-3">
    <div
      class="col-4"
      :style="{'color': state.bug.closed ? 'red' : 'green'}"
    >
      <i class="mdi mdi-bug red" aria-hidden="true" v-if="!state.bug.closed"></i>
      {{ state.bug.title }}
    </div>

    <div class="col-3">
      {{ state.bug.creator !== undefined ? state.bug.creator.name : state.bug.creatorId }}
    </div>
    <div class="col-3"
         :style="{'color': state.bug.closed ? 'red' : 'green'}"
    >
      {{ state.bug.closed ? 'closed' : 'open' }}
    </div>
    <div class="col-2">
    </div>
  </div>
  <div class="row shadow rounded border">
    <div class="col-8 text-center">
      <h2 class="p-3 border-bottom">
        Description
      </h2>
    </div>
    <div class="col-4 py-3 d-flex justify-content-center" v-if="state.account.id === state.bug.creator.id">
      <button class="btn btn-danger" @click="closeBug" v-if="!state.bug.closed">
        close bug
      </button>
    </div>
    <div class="col-12">
      <p>{{ state.bug.description }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Notification from '../utils/Notification'
import { bugService } from '../services/bugService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      // date: props.bug.updatedAt.split('T')
      account: computed(() => AppState.account),
      bug: computed(() => AppState.activeBug)
    })
    return {
      state,
      async closeBug() {
        try {
          if (await Notification.confirmAction('You cannot undo a close, do you wish to continue?')) {
            await bugService.closeBug(props.bug.id)
            Notification.toast('bug successfully closed', 'success')
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

</style>
