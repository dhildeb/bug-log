<template>
  <div class="col-4 border bg-light shadow rounded p-1"
       :style="{'text-decoration': bug.closed ? 'line-through' : ''}"
  >
    {{ bug.title }}
  </div>
  <div class="col-3 border bg-light shadow rounded p-1">
    {{ bug.creator.name }}
  </div>
  <div class="col-3 border bg-light shadow rounded p-1"
       :style="{'color': bug.closed ? 'red' : 'green'}"
  >
    {{ bug.closed ? 'closed' : 'open' }}
  </div>
  <div class="col-2 border bg-light shadow rounded p-1">
    {{ state.date[0].split('-') }}
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      date: props.bug.updatedAt.split('T')
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
