<template>
  <div class="Footer">

    <div class="footer-content">
      <nuxt-link to="/blogs">Blogs</nuxt-link>
      
    </div>

    <div class="links">
         <a href="https://www.linkedin.com/in/honeythakuria/" target="_blank"> <i class="fab fa-linkedin"></i> </a>
         <a href="https://github.com/honey93" target="_blank"> <i class="fab fa-github"></i></a>
         <a href="https://twitter.com/HoneyThakuria" target="_blank"> <i class="fab fa-twitter"></i> </a>
         <a href="https://medium.com/@HoneyThakuria" target="_blank"><i class="fab fa-medium"></i> </a>
        </div>
    
    <div class="footer-content">Copyright © 2019 Honey Thakuria. </div>
  </div>
</template>


<style scoped>

.Footer{
    display:flex;
    flex-flow: column wrap;

    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color:rgb(247, 251, 251);
    
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

.fab
{
  color:#bbb;
  font-size:30px;
}
.fab.fa-linkedin:hover {
  color:#0077B5
}

.fab.fa-twitter:hover {
  color:#38A1F3
}

.fab.fa-github:hover {
  color:#333
}

.fab.fa-medium:hover {
  color:#00fa9a;
}

.links {
  padding-top: 15px;
}

.links a{
  text-decoration: none;
  color:black;
  font-weight:100;
  margin-right:10px; 
  text-align: center;
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


