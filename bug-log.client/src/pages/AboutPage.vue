<template>
  <div class="container">
    <h1>This is the about page/bug</h1>
    <div class="row">
      <Bug />
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
