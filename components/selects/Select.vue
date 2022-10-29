<template>
  <v-app id="inspire">
    <v-container fluid>
      <v-row align="center">
        <v-col cols="6">
          <v-subheader> Custom items </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="internal"
            :hint="`${select.text}, ${select.value}`"
            :items="items"
            item-text="text"
            item-value="value"
            label="Select"
            persistent-hint
            return-object
            single-line
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { PropOptions } from 'vue';
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

interface selectType {
  text: string;
  value: string;
}

@Component
export default class SelectComponents extends Vue {
  @Prop({ type: Array as () => selectType[], required: true })
  items!: Array<selectType>;

  @Prop({ type: Object as () => selectType })
  select!: selectType;

  @Watch('internal')
  onChangeLoadingStatus() {
    this.$emit('submit2', this.internal);
  }

  internal = this.select
}
</script>


<style lang="scss" scoped>
</style>
