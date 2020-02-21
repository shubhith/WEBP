export const state = () => ({ blogs: [] });

export const mutations = {
  getBlogs(state,payload) {
  //  console.log("Store set for Blogs Fetch");
    state.blogs = payload;
  }
};

export const actions = {
  fetchBlogs({ commit }) {
   // console.log("Fetch Called");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("getBlogs",[
            {
              id: 1,
              title: "How to handle event handling in JavaScript (examples and all)",
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
                "How to create a realtime app using Socket.io, React, Node & MongoDB",
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
                "AWS goes down, Bitbucket suffers!! Architecture design tips for Microservices",
              url:
                "https://codeburst.io/aws-goes-down-bitbucket-suffers-robust-system-design-tips-2b49f745cdd7",
              publication: "Codeburst.io",
              imageUrl:
                "https://cdn-images-1.medium.com/max/2600/1*Cm8cdGMrTms291x3hl4VEQ.png"
            }
          ]);
        //console.log("Promise Resolved");
        resolve();
      }, 3000);
    });
  }
};
