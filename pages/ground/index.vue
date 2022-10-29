<template>
  <div>
    play ground
    今の選択肢　{{ select }}
    <Select
    :items="items"
    :select="select"
    @submit2="test"
    />
  </div>
</template>
  
  <script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// import Select from "@/components/selects/Select.vue";
import Select, { selectType } from "@/components/selects/Select.vue";

@Component({
  components: {
    Select,
  },
})
export default class index extends Vue {
  select: selectType = { text: "Florida", value: "FL" };
  items: selectType = [
    { text: "Florida", value: "FL" },
    { text: "Georgia", value: "GA" },
    { text: "Nebraska", value: "NE" },
    { text: "California", value: "CA" },
    { text: "New York", value: "NY" },
  ];

  test(val) {
    console.log('emit!!!', val)
    this.select = val
  }

}
</script>
  
  <style lang="scss">
html {
  background-color: #00cccc;
}
</style>
  