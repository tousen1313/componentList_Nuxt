<template>
  <div class="flex">
    <div class="card first">
      <img class="card--img" src="../assets/images/profile.png" alt="" />
      <div class="card--main g-text-style">{{ this.$PROFILE_NAME }}</div>
      <div class="card--sub">{{ this.$PROFILE_JOB }}</div>
      <div class="card--sub">{{ this.$PROFILE_LOCATION }}</div>
    </div>
    <div class="card">
      <span class="card--sub"> {{ this.$PROFILE_MESSAGE }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  margin-top: 10px;
}
.card {
  width: 100%;
  border-radius: 15px;
  border: 5px solid #06d8d7;
  .card--img {
    border-radius: 15px;
  }
  .card--main {
    font-size: 30px;
  }
  .card--sub {
    color: #fff;
    margin: 5px;
    font-size: 28px;
  }
}
.first {
    width: 35%;
    margin-right: 10px;
}
</style>