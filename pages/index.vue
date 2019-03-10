<template>
  <div>
    <Header/>
    <section class="container">
      <div>
        <img src="~/static/honeythakuria.jpeg"  class="main_image"/>
        <h3>Honey Thakuria</h3>
        <h3 class="titlePosition" >Developer, Blogger, Entrepreneur</h3>
        <div class="links">
         <a href="https://www.linkedin.com/in/honeythakuria/" target="_blank"> <i class="fab fa-linkedin"></i> </a>
         <a href="https://github.com/honey93" target="_blank"> <i class="fab fa-github"></i></a>
         <a href="https://twitter.com/HoneyThakuria" target="_blank"> <i class="fab fa-twitter"></i> </a>
         <a href="https://medium.com/@HoneyThakuria" target="_blank"><i class="fab fa-medium"></i> </a>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Header from "~/components/global/Header.vue";

import Footer from "~/components/global/Footer.vue";

export default {
  components: {
    Logo,
    Header,
    Footer
  }
};
</script>

<style>
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



.titlePosition{
  font-weight: 400;
  font-size:25px;
}

.container {
  margin: 0 auto;
  min-height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.links a{
  text-decoration: none;
  color:black;
  font-weight:100;
  margin-right:10px; 
}

.main_image {
  border-radius: 100%;
  width:40%;
}

@media screen and (max-width: 550px) {
 .main_image {
  width:80%;
}
}
</style>
