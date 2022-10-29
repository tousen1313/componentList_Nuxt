<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class index extends Vue {
  valid = false;
  firstname = "";
  lastname = "";
  email = "";

  nameRules = [
      !!this.firstname || 'Name is required',
      this.firstname.length <= 10 || 'Name must be less than 10 characters',
    ]

  // emailRules = [
  //   v => !!v || 'E-mail is required',
  //   v => /.+@.+/.test(v) || 'E-mail must be valid',
  // ]
}
</script>

<style lang="scss" scoped>
</style>
