<template>
  <div class="row">
    <div class="col-3">
      <img class="rounded-circle" :src="note.creatorId.picture" alt="profile">
      <span>{{ note.creator.name }}</span>
    </div>
    <div class="col-9">
      <p>
        {{ note.body }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  props: {
    note: { type: Object, required: true }
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
