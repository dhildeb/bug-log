<template>
  <router-link :to="{name: 'Details', params: {id: bug.id}}"
               class="col-4 click border bg-light shadow-sm rounded p-1 text-red"
               :style="{'text-decoration': bug.closed ? 'line-through' : ''}"
               @click="setActive"
  >
    <i class="mdi mdi-bug red" aria-hidden="true" v-if="!bug.closed"></i>
    {{ bug.title }}
  </router-link>
  <div class="col-3 border bg-light shadow-sm rounded p-1 d-none d-md-block">
    {{ bug.creator !== undefined ? bug.creator.name : bug.creatorId }}
  </div>
  <div class="col-3 border bg-light shadow-sm rounded p-1 d-md-none">
    {{ bug.creator !== undefined ? state.name[0] : bug.creatorId }}
  </div>
  <div class="col-2 border bg-light shadow-sm rounded p-1"
       :style="{'color': bug.closed ? 'red' : 'green'}"
  >
    {{ bug.closed ? 'closed' : 'open' }}
  </div>
  <div class="col-3 border bg-light shadow-sm rounded p-1">
    {{ `${state.date[1]} ${state.date[2]} ${state.date[3]}` }}
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      date: (new Date(props.bug.updatedAt)).toString().split(' '),
      name: props.bug.creator.name.split('@')
    })
    return {
      state,
      setActive() {
        AppState.activeBug = props.bug
      }
    }
  }
}
</script>

<style>
.click{
  cursor: pointer;
}
.red{
  color: red;
}
</style>
