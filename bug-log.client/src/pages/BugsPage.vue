<template>
  <div class="container">
    <div class="row">
      <CreateBug />
    </div>
    <h1>Current Bugs</h1>
    <div class="row">
      <div class="col-4 border bg-secondary shadow rounded p-1">
        <b>bug title</b>
      </div>
      <div class="col-3 border bg-secondary shadow rounded p-1">
        <b>reported by</b>
      </div>
      <div class="col-3 click border bg-secondary shadow rounded p-1"
           @click="filterStatus"
      >
        <b>status <i class="mdi mdi-filter-variant" aria-hidden="true"></i></b>
      </div>
      <div class="col-2 border bg-secondary shadow rounded p-1">
        <b>last modified</b>
      </div>
      <Bug v-for="bug in state.bugs" :key="bug.id" :bug="bug" />
    </div>
  </div>
</template>

<script>
import { computed, reactive, watchEffect } from '@vue/runtime-core'
import { bugService } from '../services/bugService'
import { AppState } from '../AppState'
watchEffect(() => {
  bugService.getAll()
})
export default {
  name: 'BugsPage',
  setup() {
    const state = reactive({
      bugs: computed(() => AppState.bugs),
      filterStatus: 0
    })
    return {
      state,
      async filterStatus() {
        if (state.filterStatus === 2) {
          await bugService.getAll('')
          state.filterStatus = 0
          return
        }
        if (state.filterStatus === 0) {
          await bugService.getAll('?closed=true')
          state.filterStatus = 1
          return
        }
        if (state.filterStatus === 1) {
          await bugService.getAll('?closed=false')
          state.filterStatus = 2
        }
      }
    }
  }
}
</script>
