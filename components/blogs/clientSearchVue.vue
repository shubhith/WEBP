<template>
      <div class="container">
    <h2 class="mainHeader">How to set up responsive UI search in Vue.js</h2>

    <div>
      <p
        id="08d3"
        class="jh ji ay ap jj b jk jl jm jn jo jp jq jr js jt ju"
      >Are you thinking of building something awesome with one of the popular modern frameworks out there right now, but don’t know how to get started?</p>
      <p
        id="9b33"
        class="jh ji ay ap jj b jk jl jm jn jo jp jq jr js jt ju"
      >If yes, then this post will help you get a kick started and build something awesome.</p>
      <blockquote class="jv jw jx">
        <p id="ec9d" class="jh ji ay jy jj b jk jl jm jn jo jp jq jr js jt ju">
          <strong class="jj jz">What are we going to build?</strong>
        </p>
      </blockquote>
      <p
        id="1c8f"
        class="jh ji ay ap jj b jk jl jm jn jo jp jq jr js jt ju"
      >We will be building a responsive client side search of the 7 wonders of the world with the following features:</p>
      <ol class>
        <li id="cf87" class="jh ji ay ap jj b jk jl jm jn jo jp jq jr js jt ju ka kb kc">
          <strong class="jj jz">Text Search</strong> &amp;
          <strong class="jj jz">Filters</strong> based on Ratings and Likes.
        </li>
        <li id="6078" class="jh ji ay ap jj b jk kd jm ke jo kf jq kg js kh ju ka kb kc">
          2 items per row for
          <strong class="jj jz">Tablet</strong> and
          <strong class="jj jz">Desktop</strong>, 1 item per row for
          <strong class="jj jz">Mobile</strong>.
        </li>
        <li
          id="60e6"
          class="jh ji ay ap jj b jk kd jm ke jo kf jq kg js kh ju ka kb kc"
        >Fetching data asynchronously from external API on client side.</li>
        <li
          id="f497"
          class="jh ji ay ap jj b jk kd jm ke jo kf jq kg js kh ju ka kb kc"
        >Responsive view as shown below:</li>
      </ol>
    </div>
    <div class="text-center blog-img">
      <img src="https://miro.medium.com/max/1208/1*xOtkEFIM8_XwL93hSp6E2w.gif" />
    </div>
    <div>
      <b-card title="Search Logic" tag="article" class="mb-2">
        <pre><code>
    

    /* Importing Header to use in this component */ 
import Header from "@/components/Header.vue";
/* Importing axios for async REST calls */
import axios from "axios";
export default {
  name: "Main",
/* mounted gets called when the component gets mounted. AJAX calls are preferred in mounted lifecycle method */
  mounted() {
    this.hover_flag = false;
var inside = this;
axios
      .get("https://www.mocky.io/v2/5c7b98562f0000c013e59f07")
      .then(function(response) {
        //console.log(response);
inside.wonders_data_actual = response.data.data;
response.data.data.map(function(wonder) {
          inside.likes.count += wonder.likes;
        });
inside.wonders_data_actual = inside.wonders_data_actual.map(function(
          wonder
        ) {
          wonder.active_like = false;
          return wonder;
        });
        inside.wonders_data = response.data.data;
      })
      .catch(function(error) {
        // console.log(error);
      });
  },
/* All the data variable declaration are done here:  */
  data() {
    return {
      hover_flag: false,
      wonders_data_actual: [],
      wonders_data: [],
      active_id: 0,
      options: [
        { value: null, text: "Sort By" },
        { value: "a", text: "Ratings" },
        { value: "b", text: "Likes" }
      ],
      search: { filter: null, text: "" },
      likes: { count: 0, hit: 0 }
    };
  },
/* Methods are defined here */
  methods: {
    show_hover(flag, active_id) {
      this.hover_flag = flag;
      this.active_id = active_id;
    },
    sort() {
      //console.log(this.search.filter);
      this.search.filter == "b"
        ? this.wonders_data.sort(function(a, b) {
            return b.likes - a.likes;
          })
        : this.wonders_data.sort(function(a, b) {
            return b.ratings - a.ratings;
          });
    },
    search_text() {
      //console.log(this.search.text);
var inside = this;
this.wonders_data = this.wonders_data_actual.filter(function(wonder) {
        if (
          wonder.place
            .toLowerCase()
            .indexOf(inside.search.text.toLowerCase()) != "-1"
        ) {
          return wonder;
        }
      });
    },
    check_active(id) {
      var flag = false;
      this.wonders_data_actual.map(function(wonder) {
        if (wonder.id == id) {
          flag = wonder.active_like;
        }
      });
      return flag;
    },
    make_active(id) {
      this.likes.hit++;
      this.wonders_data_actual = this.wonders_data_actual.map(function(wonder) {
        if (wonder.id == id) {
          wonder.active_like = !wonder.active_like;
          wonder.active_like ? wonder.likes++ : wonder.likes--;
        }
return wonder;
      });
      var inside = this;
inside.likes.count = 0;
      this.wonders_data_actual.map(function(wonder) {
        inside.likes.count += wonder.likes;
      });
    }
  },
  components: {
    Header
  }
};

    
    
    </code></pre>
      </b-card>
    </div>
  </div>
</template>

<style scoped>
.mainHeader{
    margin: 20px 0;
    padding: 10px 0;
    border-bottom: 1px solid gray;
}

.blog-img img{
    max-width: 100%;
}
</style>

<script>
export default {
    name:"clientSearchVue"
}
</script>




