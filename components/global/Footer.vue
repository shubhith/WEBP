<template>
  <div class="Footer">

    <div class="footer-content">
      <p class="footerConnect">Let’s connect </p>
      <p class="footerCollab"> Feel free to reach out for any collaboration. </p>
      
    </div>

    <div class="links">
         <a href="https://www.linkedin.com/in/shubhithakuria/" target="_blank"> <i class="fab fa-linkedin"></i> </a>
         
        </div>
    
    <div class="footer-content copyright">Copyright © 2019 Shubhi Thakuria. </div>
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
    flex-flow: column wrap;
    justify-content: center;
   
}
.copyright{
  font-family: Karla;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 26px;
text-align: center;

color: #000000;
}

.footerConnect{
font-family: Karla;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
text-align: center;
margin-bottom: 0;

color: #000000;
}
.footerCollab{
  margin-bottom:0;
  font-family: Karla;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;

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


