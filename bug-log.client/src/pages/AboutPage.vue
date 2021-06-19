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
      <div class="col-3 border bg-secondary shadow rounded p-1">
        <b>status</b>
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
  name: 'AboutPage',
  setup() {
    const state = reactive({
      bugs: computed(() => AppState.bugs)
    })
    return {
      state
    }
  }
}
</script>
