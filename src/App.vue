<template>
  <div class="bg-grey-darkest">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from "./components/layout/HeaderView.vue"

export default {
  components: {
    HeaderView: HeaderView
  },
  name: "TestApp"
}
</script>