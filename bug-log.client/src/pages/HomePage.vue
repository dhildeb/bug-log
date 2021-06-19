<template>
  <div class="container">
    <h1>Home page</h1>
    <h2>Please Sign in</h2>
    <button class="btn btn-primary">
      Sign in
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
