<template>
  <clientSearchVue />
</template>

<script>
import Logo from "~/components/Logo.vue";
import clientSearchVue from "~/components/blogs/clientSearchVue.vue";
export default {
  components: {
    Logo,
    clientSearchVue
  },
  head() {
    return {
      title: "Blogs - Honey Thakuria",
      meta: [
        {
          hid: "Blogs Detail Page",
          name: "Blogs by Honey Thakuria",
          content:
            "Honey Thakuria writes for leading Publications like freeCodeCamp, Codeburst.io on Medium. Check out his latest & popular articles here"
        }
      ]
    };
  },
  data() {
    return {
      allowedUrls: ["how-to-set-up-responsive-ui-search-in-vue-js", "vue-blog"]
    };
  },
  validate(context) {
    return context.store.state.allowedUrls.includes(context.params.id)
      ? true
      : false;
  },
  beforeCreate() {
    //  this.$store.dispatch('blogs/fetchBlogs');
    console.log("before Create");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("Mounted", this.allowedUrls[1]);
  },
  middleware: ["vm"]
};
</script>


<style scoped>
</style>
