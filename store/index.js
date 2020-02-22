export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[
    {
      id: 1,
      title: "Event handling in JavaScript",
      url:
        "https://medium.freecodecamp.org/event-handling-in-javascript-with-examples-f6bc1e2fff57",
      publication: "freeCodeCamp",
      imageUrl:
        "https://cdn-images-1.medium.com/max/1600/1*dhtbZon7OPebZuUO9-yyjw.jpeg"
    },
    {
      id: 2,
      title: "How to set up responsive UI search in Vue.js",
      url:
        "https://medium.freecodecamp.org/how-to-set-up-responsive-ui-search-in-vue-js-bf6007b7fc0f",
      publication: "freeCodeCamp",
      imageUrl:
        "https://cdn-images-1.medium.com/max/1600/1*557yKFY9udPu1QV2_bW9Kw.jpeg"
    },
    {
      id: 3,
      title:
        "Realtime app using Socket.io, React, Node, MongoDB",
      url:
        "https://medium.freecodecamp.org/how-to-create-a-realtime-app-using-socket-io-react-node-mongodb-a10c4a1ab676",
      publication: "freeCodeCamp",
      imageUrl:
        "https://cdn-images-1.medium.com/max/1600/1*j_kShofJmfZ_-bEpt1IS8Q.jpeg"
    },
    {
      id: 4,
      title: "How to architect a DApp using Nuxt.js and Nebulas",
      url:
        "https://medium.freecodecamp.org/architecting-dapp-using-nuxt-js-nebulas-fc00712ae341",
      publication: "freeCodeCamp",
      imageUrl:
        "https://cdn-images-1.medium.com/max/1600/1*1LSHpbDThueykKQQeCkAug.png"
    },
    {
      id: 5,
      title:
        "Architecture design tips for Microservices",
      url:
        "https://codeburst.io/aws-goes-down-bitbucket-suffers-robust-system-design-tips-2b49f745cdd7",
      publication: "Codeburst.io",
      imageUrl:
        "https://cdn-images-1.medium.com/max/2600/1*Cm8cdGMrTms291x3hl4VEQ.png"
    }
  ],
  companies:[{id:1,name:"AirAsia",url:"AirAsia.png",duration:"Dec 2018 - Present"},{id:2,name:"Times Internet",url:"TimesInternet.jpeg", duration:"Jan 2018 - Dec 2018"},{id:3,name:"Mantra Labs",url:"MantraLabs.png", duration:"Feb 2017 - Jan 2018"},{id:4,name:"Cognizant",url:"Cognizant.jpeg",duration:"Sep 2015 - Aug 2016"}]


};
};

export const mutations = {
  incr(state) {
    state.count = 5;
  }
};
export const actions = {
  async nuxtServerInit({ dispatch }) {
    console.log("nuxtServerInit called");
    await dispatch("blogs/fetchBlogs");
  }
};
