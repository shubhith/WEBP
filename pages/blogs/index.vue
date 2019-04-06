<template>
  <div>
    <Header/>
    <section class="container">
       <h2 class="blogs-page-title"> Some of my Publications . . . </h2> 
      <div class="row">
        <div class="col-md-6 blog" v-for="blog in blogsData" :key="blog.id">
          <a :href="blog.url" target="blank">
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
  },
  head(){
      return{
          title:"Blogs - Honey Thakuria",
          meta:[{hid:"Blogs",name:"Blogs by Honey Thakuria",content:"Honey Thakuria writes for leading Publications like freeCodeCamp, Codeburst.io on Medium. Check out his latest & popular articles here"}]
      }
  },
  data() {
    return {
      imagename: "hi",
      blogsData: [
          {
          id: 4,
          title: "How to handle event handling in JavaScript (examples and all)",
          url:
            "https://medium.freecodecamp.org/event-handling-in-javascript-with-examples-f6bc1e2fff57",
          publication: "freeCodeCamp",
          imageUrl:
            "https://cdn-images-1.medium.com/max/1600/1*dhtbZon7OPebZuUO9-yyjw.jpeg"
        },
        {
          id: 1,
          title: "How to set up responsive UI search in Vue.js",
          url:
            "https://medium.freecodecamp.org/how-to-set-up-responsive-ui-search-in-vue-js-bf6007b7fc0f",
          publication: "freeCodeCamp",
          imageUrl:
            "https://cdn-images-1.medium.com/max/1600/1*557yKFY9udPu1QV2_bW9Kw.jpeg"
        },
        {
          id: 2,
          title: "How to create a realtime app using Socket.io, React, Node & MongoDB",
          url:
            "https://medium.freecodecamp.org/how-to-create-a-realtime-app-using-socket-io-react-node-mongodb-a10c4a1ab676",
          publication: "freeCodeCamp",
          imageUrl:
            "https://cdn-images-1.medium.com/max/1600/1*j_kShofJmfZ_-bEpt1IS8Q.jpeg"
        },
        {
          id: 3,
          title: "How to architect a DApp using Nuxt.js and Nebulas",
          url:
            "https://medium.freecodecamp.org/architecting-dapp-using-nuxt-js-nebulas-fc00712ae341",
          publication: "freeCodeCamp",
          imageUrl:
            "https://cdn-images-1.medium.com/max/1600/1*1LSHpbDThueykKQQeCkAug.png"
        },
        {
          id: 5,
          title: "AWS goes down, Bitbucket suffers!! Architecture design tips for Microservices",
          url:
            "https://codeburst.io/aws-goes-down-bitbucket-suffers-robust-system-design-tips-2b49f745cdd7",
          publication: "Codeburst.io",
          imageUrl:
            "https://cdn-images-1.medium.com/max/2600/1*Cm8cdGMrTms291x3hl4VEQ.png"
        }
        
      ]
    };
  }
};
</script>


<style>
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
