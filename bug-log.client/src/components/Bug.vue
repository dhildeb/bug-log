<template>
  <div class="col-2">
    {{ bug.title }}
  </div>
  <div class="col-2">
    {{ bug.description }}
  </div>
  <div class="col-2">
    {{ bug.closed }}
  </div>
  <div class="col-2">
    {{ bug.closedDate }}
  </div>
  <div class="col-2">
    {{ bug.creatorId }}
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup() {
    const state = reactive({

    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
