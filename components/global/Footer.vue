<template>
  <div class="Footer">

    <div class="footer-content">
      <nuxt-link to="/blogs">Blogs</nuxt-link>
      
    </div>
    
    <div class="footer-content">Copyright © 2019 Honey Thakuria. </div>
  </div>
</template>


<style scoped>

.Footer{
    display:flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    padding: 20px;
    background-color:rgb(247, 251, 251);
    height:90px;
}
.footer-content{
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
   
}
.footer-content a{
   text-decoration: none;
    color:black;
}
.footer-content div{
    margin-right:10px;
    cursor: pointer;
}

</style>


<script>
export default {
    name:"Footer",
     beforeCreate(){
     //  this.$store.dispatch('blogs/fetchBlogs');
  //  console.log("before Create Header");
  },
  created(){
  //  console.log("Created Header");
  },
  beforeMount(){
 //   console.log("beforeMount Header");
  },
  mounted(){
  //  console.log("Mounted Header");
  }
};
</script>


