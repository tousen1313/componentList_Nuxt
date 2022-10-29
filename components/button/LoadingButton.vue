<template>
  <div class="text-center">
    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
    >
    <!-- @click="loader = 'loading3'" -->

      Upload
      <v-icon right dark> mdi-cloud-upload </v-icon>
    </v-btn>

    <v-btn
      class="ma-2 loadingcolor"
      :loading="loading2"
      :disabled="loading2"
      color="success"
    >
    <!-- @click="loader = 'loading2'" -->

      Custom Loader
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
      :loading="loading5"
      :disabled="loading5"
      color="blue-grey"
      class="ma-2 white--text cloudcolor"
      fab
    >
    <!-- @click="loader = 'loading5'" -->

      <v-icon dark> mdi-cloud-upload </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
  data() {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      // this[l] = !this[l];

      // setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
});
</script>


<style lang="scss" scoped>
.loadingcolor {
  background-color: #4caf50 !important;
  border-color: #4caf50 !important;
}
.cloudcolor {
  background-color: #607d8b !important;
  border-color: #607d8b !important;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
