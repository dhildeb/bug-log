<template>
  <div class="row bg-secondary shadow rounded p-1 mt-3">
    <div
      class="col-4"
      :style="{'color': bug.closed ? 'red' : 'green'}"
    >
      <i class="mdi mdi-bug red" aria-hidden="true" v-if="!bug.closed"></i>
      {{ bug.title }}
    </div>

    <div class="col-3">
      {{ bug.creator !== undefined ? bug.creator.name : bug.creatorId }}
    </div>
    <div class="col-3"
         :style="{'color': bug.closed ? 'red' : 'green'}"
    >
      {{ bug.closed ? 'closed' : 'open' }}
    </div>
    <div class="col-2">
      <!-- {{ state.date[0].split('-').sort((a,b) => a-b).join('-') }} -->
    </div>
  </div>
  <div class="row shadow rounded border">
    <div class="col-12">
      <h2 class="p-3 border-bottom">
        Description
      </h2>
      <p>{{ bug.description }}</p>
    </div>
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
      // date: props.bug.updatedAt.split('T')
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
