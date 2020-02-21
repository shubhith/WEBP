<template>
  <div>
    <section class="container">
      <div class="heroBanner">
        <div class="row">
          <div class="col-md-7">
            <p>Hello!</p>
            <p>I’m Honey</p>
            <p>I’m a Full-Stack Developer. I enjoy building end to end system for masses.</p>
          </div>
          <div class="col-md-5">
            <img src="~/static/honeythakuria.png" />
          </div>
        </div>
      </div>

      <div class="stuffSection"> 
        <div class="row"> 
          <div class="col-md-6 "> 
            <h1 class="stuffTitle">Stuff I've done </h1>
            <div class="stuffParent" v-for="individualStuff in $store.state.stuff" :key="individualStuff.id" v-if="individualStuff.id < 3"> 
                <div class="stuffImage">
                  <img :src="individualStuff.imageUrl" class="stuffImageActual"> 

                </div>
                <div class="stuffText"> 
                  <p>Creating a Real Time App in React </p>
                <p>Publication: FreeCodeCamp </p>
                </div>

              </div>
          </div>
          <div class="col-md-6" > 
              <div class="stuffParent" v-for="individualStuff in $store.state.stuff" :key="individualStuff.id" v-if="individualStuff.id >= 3"> 
                <div class="stuffImage">
                  <img :src="individualStuff.imageUrl" class="stuffImageActual"> 

                </div>
                <div class="stuffText"> 
                  <p>Creating a Real Time App in React </p>
                <p>Publication: FreeCodeCamp </p>
                </div>
                

              </div>
          </div>
        </div>

      </div>


      <div class="stuffSection"> 
        <div class="row"> 
          <div class="col-md-6 "> 
            <h1 class="stuffTitle">Places I've worked </h1>
            <div class="stuffParent" v-for="individualCompany in $store.state.companies" :key="individualCompany.id" v-if="individualCompany.id < 3"> 
                <div class="stuffImage">
                  <img :src="individualCompany.url" class="stuffImageActual"> 

                </div>
                <div class="stuffText"> 
                  <p>{{individualCompany.name}} </p>
                
                </div>

              </div>
          </div>
          <div class="col-md-6" > 
              <div class="stuffParent" v-for="individualCompany in $store.state.companies" :key="individualCompany.id" v-if="individualCompany.id >= 3"> 
                <div class="stuffImage">
                  <img :src="individualCompany.url" class="stuffImageActual"> 

                </div>
                <div class="stuffText"> 
                  <p>{{individualCompany.name}} </p>
                
                </div>
                

              </div>
          </div>
        </div>

      </div>

      <!-- <div>
        <img src="~/static/honeythakuria.jpeg"  class="main_image"/>
        <h3>Honey Thakuria</h3>
        <h3 class="titlePosition" >Developer, Blogger, Entrepreneur</h3>
        
      </div>-->
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: "Honey Thakuria",
      meta: [
        {
          hid: "Personal",
          name: "Honey Thakuria personal Website",
          content:
            "Honey Thakuria is a Full Stack Developer with expertise in Cloud, BlockChain & Web application. He also writes for leading publications on Medium. Check out Honey's blogs, projects here"
        }
      ]
    };
  }
};
</script>

<style scoped>
.heroBanner{
    margin-top: 267px;
    margin-bottom: 267px; 
}
.stuffParent{
  width:100%;
  max-width: 488px;
  height: 292px;
  position: relative;
  overflow: hidden; 
  margin-bottom:50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.stuffImage{
  width:100%;
  max-width: 488px;
  height: 229px;
  overflow:hidden;
  
}
.stuffImageActual{
  width:100%;
}
.stuffTitle{
  margin-bottom:140px;
}
.stuffText{
  padding:10px;
  
}
.stuffText p {
  margin: 0;
}


</style>
