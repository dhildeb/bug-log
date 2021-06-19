<template>
  <div class="row bg-secondary shadow-sm rounded pt-2 mt-3">
    <div class="col-5">
      <i class="mdi mdi-bug red" aria-hidden="true" v-if="!state.bug.closed"></i>
      {{ state.bug.creator !== undefined ? state.bug.creator.name : state.bug.creatorId }}
    </div>

    <h6 class="col-4"
        :style="{'color': state.bug.closed ? 'red' : 'green'}"
    >
      {{ state.bug.closed ? 'closed' : 'open' }}
    </h6>
    <div class="col-3 options">
      <div class="dropdown click text-light"
           id="dropdownMenuButton"
           data-toggle="dropdown"
           aria-haspopup="true"
           aria-expanded="false"
           title="options"
           v-if="state.account.id === state.bug.creator.id && !state.bug.closed"
      >
        <h1>...</h1>
      </div>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button class="text-danger dropdown-item" @click="closeBug">
          close bug
        </button>
        <button class="text-warning dropdown-item" data-toggle="modal" data-target="#create-bug-modal">
          edit bug
        </button>
      </div>
    </div>
  </div>
  <div class="row shadow rounded border">
    <div class="col-12 text-center">
      <h2 class="p-3 border-bottom">
        {{ state.bug.title }}
      </h2>
    </div>
    <div class="col-12 ml-5">
      <p>{{ state.bug.description }}</p>
    </div>
  </div>
  <EditBug :bug="state.bug" />
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
.options{
  display: flex;
    justify-content: flex-end;
    margin-top: -21px;
}
</style>
