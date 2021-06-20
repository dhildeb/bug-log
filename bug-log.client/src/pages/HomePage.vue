<template>
  <div class="container-fluid text-light">
    <h1 class="title">
      Welcome to Bug Log
    </h1>
    <div v-if="state.account.id">
      <router-link to="Bugs">
        <button class="btn btn-primary">
          Go to Bugs
        </button>
      </router-link>
    </div>
    <div v-else>
      <h2 class="title">
        Please Sign in
      </h2>
      <button class="btn btn-primary" @click="login">
        Sign in
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {
      state,
      async login() {
        await AuthService.loginWithPopup()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container-fluid{
background-image: url('https://p0.pikist.com/photos/473/608/chinch-bugs-insect-animal-nature-forest-autumn-wood-log-beech-mountain.jpg');
background-size: cover;
}
 .title {
    color: #ffffff;
    font-family: Lucida Console;
    text-shadow: 0px 0px 0 rgb(162,162,162),
                 -1px 1px 0 rgb(136,136,136),
                 -2px 2px 0 rgb(110,110,110),
                 -3px 3px 0 rgb(85,85,85),
                 -4px 4px 0 rgb(60,60,60),
                 -5px 5px 0 rgb(34,34,34),
                 -6px 6px 0 rgb(9,9,9),
                 -7px 7px 0 rgb(-17,-17,0),
                 -8px 8px 0 rgb(-42,-42,0),
                 -9px 9px 0 rgb(-68,-68,0),
                 -10px 10px  0 rgb(-93,-93,0),
                 -11px 11px 10px rgba(0,0,0,0.6),
                 -11px 11px 1px rgba(0,0,0,0.5),
                 0px 0px 10px rgba(0,0,0,.2);
 }

</style>
