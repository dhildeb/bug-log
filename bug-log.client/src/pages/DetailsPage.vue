<template>
  <div class="container">
    <BugDetails :bug="state.bug" v-if="state.bug.id" />
    <div class="row border-bottom bg-secondary shadow-sm rounded justify-content-between mt-5">
      <h3 class="p-3">
        Notes
      </h3>
      <div class="p-3">
        <CreateNote />
      </div>
    </div>
    <Note v-for="note in state.notes" :key="note.id" :note="note" />
    <div class="row">
      <div class="col-10"></div>
      <div class="col-2 p-5">
        <router-link :to="{name: 'Bugs'}">
          <button class="btn btn-danger">
            Back
          </button>
        </router-link>
      </div>
    </div>
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
      if (!state.bug.id) {
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
