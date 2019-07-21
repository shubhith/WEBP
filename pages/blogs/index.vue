<template>
  <div>
  
    <section class="container">
       <h2 class="blogs-page-title"> Some of my Publications . . . </h2> 
      <div class="row" v-if="$store.state.blogs.blogs.length">
        <div class="col-md-6 blog" v-for="blog in $store.state.blogs.blogs" :key="blog.id">
          <a :href="blog.url" target="_blank">
            <div class="blog-card">
              <div class="blogImageParent">
                <img :src="blog.imageUrl" class="blogImage">
              </div>
              <div class="blog-content">
                <h4 class="blog-title">{{blog.title}}</h4>
                <h5>
                  <span class="publication">Publication:</span>
                  {{ blog.publication}}
                </h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  head(){
      return{
          title:"Blogs - Honey Thakuria",
          meta:[{hid:"Blogs",name:"Blogs by Honey Thakuria",content:"Honey Thakuria writes for leading Publications like freeCodeCamp, Codeburst.io on Medium. Check out his latest & popular articles here"}]
      }
  },
  data() {
    return {
     };
  },
  beforeCreate(){
     //  this.$store.dispatch('blogs/fetchBlogs');
    console.log("before Create");
  },
  created(){
    console.log("Created");
  },
  beforeMount(){
    console.log("beforeMount");
  },
  mounted(){
    console.log("Mounted",this);
  },
   middleware: ["vm"]
};
</script>


<style scoped>
.blogImageParent{
    max-height:300px;
    overflow: hidden;
    padding: 10px;
}
.blogImage {
  width: 100%;
}

.blog-card {
  border: 1px solid lightgray;
  border-radius: 5px;
}

.blog-card:hover {
  box-shadow: 2px 2px 8px grey;
}
.publication {
  color: lightslategrey;
}
.blog-content {
  padding: 10px;
  height:130px;
}
.blog-title {
  margin-bottom: 10px;
  text-overflow: ellipsis;
}
.blog a {
  text-decoration: none;
  color: black;
}
.blog{
    margin-bottom:15px; 
    margin-top:15px;
}
.blogs-page-title{
    margin-top:15px;
}
</style>
