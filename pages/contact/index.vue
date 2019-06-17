<template>
  <div>
    <Header/>
    <section class="container">
      <h2
        class="contact-page-title"
      >If you want to talk about Opensource, Freelance or just want to say Hi:</h2>

      <div class="links">
        <a href="https://www.linkedin.com/in/honeythakuria/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/honey93" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/HoneyThakuria" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://medium.com/@HoneyThakuria" target="_blank">
          <i class="fab fa-medium"></i>
        </a>
      </div>

      <template>
        <div class="form-css">
             <h2 class="text-center"> Contact Form</h2>
          <b-form v-if="show" action="https://formspree.io/thakuria.honey@gmail.com" method="POST">
            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input
                name="Name"
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
              <b-form-input
                name="email"
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Your message:" label-for="input-3">
              <b-form-textarea
                name="message"
                id="input-3"
                v-model="form.text"
                placeholder="Enter something..."
                rows="3"
                required
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
      </template>
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
  head() {
    return {
      title: "Contact - Honey Thakuria",
      meta: [
        {
          hid: "Contact",
          name: "Contact Honey Thakuria",
          content:
            "Honey Thakuria writes for leading Publications like freeCodeCamp, Codeburst.io on Medium. Visist this page to contact him"
        }
      ]
    };
  },
  data() {
    return {
      imagename: "hi",
      form: {
        email: "",
        name: "",
        text: "",
        checked: []
      },
      show: true
    };
  }
};
</script>


<style scoped>
.form-css {
  margin: 50px 0;
}
.links a {
  text-decoration: none;
  color: black;
  font-weight: 100;
  margin-right: 10px;
}

.links{
    margin-top:50px; 
}

.fab {
  color: #bbb;
  font-size: 30px;
}
.fab.fa-linkedin:hover {
  color: #0077b5;
}

.fab.fa-twitter:hover {
  color: #38a1f3;
}

.fab.fa-github:hover {
  color: #333;
}

.fab.fa-medium:hover {
  color: #00fa9a;
}

.contact-page-title {
  margin: 15px 0;
}
</style>
