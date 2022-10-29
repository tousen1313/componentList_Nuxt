<template>
  <div>
    <Bar />
    <div class="side-width">
      <Profile />
      <Navigation />
      <Category />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Profile from "../layouts/Profile.vue";
import Header from "../layouts/Header.vue";
import Navigation from "../layouts/Navigation.vue";
import Category from "../layouts/Category.vue";

import Bar from "../components/Bar.vue";

@Component({
  components: {
    Profile,
    Header,
    Navigation,
    Bar,
    Category,
  },
})
export default class index extends Vue {}
</script>

<style lang="scss">
html {
  font-family: "Noto Sans CJK JP", "Noto Sans JP", "Source Sans Pro",
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
  background: url("~assets/images/bg.png") center/110px 191.5px fixed,
    linear-gradient(#fffff4, #161715) fixed;
}

.side-width {
  margin: 10px;
}
</style>
