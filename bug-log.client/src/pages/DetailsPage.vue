<template>
  <div class="container">
    <BugDetails :bug="state.bug" v-if="state.bug" />
    <div class="row border-bottom bg-secondary shadow rounded justify-content-between my-5">
      <h3 class="p-3">
        Notes
      </h3>
      <div class="p-3">
        <CreateNote />
      </div>
    </div>
    <Note v-for="note in state.notes" :key="note.id" :note="note" />
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { bugService } from '../services/bugService'
import { useRoute } from 'vue-router'
export default {
  name: 'Details',
  setup() {
    const route = useRoute()
    const state = reactive({
      bug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.notes)
    })
    watchEffect(() => {
      bugService.getNotes(route.params.id)
      if (state.bugs === undefined) {
        bugService.getOne(route.params.id)
      }
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
