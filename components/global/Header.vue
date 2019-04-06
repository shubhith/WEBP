<template>
  <div class="Header">
    <div class="Header-section-left">
      <nuxt-link to="/">HONEY THAKURIA</nuxt-link>
    </div>

    <div class="Header-section-right">
      <div>
        <nuxt-link to="/blogs">BLOGS</nuxt-link>
      </div>
      
    </div>
  </div>
</template>


<style scoped>
.Header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: rgb(247, 251, 251);
  height: 60px;
}
.Header-section-right {
  display: Flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.Header-section-right div:nth-child(1),
.Header-section-right div:nth-child(2) {
  margin-right: 10px;
}
.Header-section-right div a,.Header-section-left a{
  text-decoration: none;
  color:black;
}
.Header-section-right div a:hover,
.Header-section-left a:hover, a.nuxt-link-exact-active {
  cursor: pointer;
  color: blue!important;
}
</style>


<script>
export default {
  name: "Header"
};
</script>


