<template>
    <div class="head">
      <div class="logo"><img v-if="logo" :src="logo" /></div>
      <div class="logo-desc">ONLINE MOVIE</div>
      <div class="search">
        <input type="text" @keyup.enter="submit" />
      </div>
    </div>
</template>
<script>
import logo from "@/assets/images/logo.png"
export default {
   data() {
    return {
      logo: logo,
    }
  },
}
</script>
<style >
  @import "../styles/icon.scss";
</style>
<style scoped>
    .head {
  margin: 1.5rem auto;
  width: 95%;
  height: 2rem;
}
.logo {
  float: left;
  margin-top: 3px;
}
.logo-desc {
  color: #ff4a4a;
  font-weight: 600;
  margin-left: 0.4rem;
  vertical-align: middle;
  display: inline-block;
  font-family: sanfranciscotext;
}
.search {
  float: right;
  width: 50%;
}
.search input {
  width: 97%;
  height: 1.6rem;
  overflow: hidden;
  background: url(../assets/images/search.png) no-repeat right center #ebebeb;
  background-size: 1.4rem;
  border: 1px solid #f5f5f5;
  border-radius: 2rem;
}
</style>