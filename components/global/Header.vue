<template>
  <div class="Header container">
    <div class="Header-section-left">
      <nuxt-link to="/">SHUBHI THAKURIA</nuxt-link>
    </div>

    <div class="Header-section-right">
    
      <div>
        <nuxt-link to="/contact">Contact</nuxt-link>
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
  font-family: Karla;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;

color: #1E1E1E;
}
.Header-section-right div a:hover,
.Header-section-left a:hover, a.nuxt-link-exact-active {
  cursor: pointer;
  color: #3AA8FF!important;
}
</style>


<script>
export default {
  name: "Header"
};
</script>


