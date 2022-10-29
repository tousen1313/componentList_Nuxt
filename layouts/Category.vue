<template>
  <div>
    <!-- button Area -->
    <div class="buttonArea-label g-text-style">Button</div>
    <div class="buttonArea">
      <div class="buttonArea-item">
        <span class="item">
          <Button />
        </span>
        <span class="item">
          <FloatingButton />
        </span>
        <span class="item">
          <LoadingButton />
        </span>
      </div>
    </div>
    <!-- input Area -->

    <div class="buttonArea-label g-text-style">Input</div>
    <div class="buttonArea">
      <div class="buttonArea-item">
        <span class="item">
          <Input />
        </span>

      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Button from "../components/button/Button.vue";
import FloatingButton from "../components/button/FloatingButton.vue";
import LoadingButton from "../components/button/LoadingButton.vue";

import Input from "../components/inputs/input.vue";


@Component({
  components: {
    Button,
    FloatingButton,
    LoadingButton,
    Input,
  },
})
export default class index extends Vue {}
</script>
  
  <style lang="scss" scoped>
.buttonArea-label {
    font-size: 40px;
    margin-left: 30px;
  }
.buttonArea {
  border-radius: 15px;
  border: 5px solid #06d8d7;

  .buttonArea-item {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    .item {
      margin: auto;
    }
  }
}
</style>
  