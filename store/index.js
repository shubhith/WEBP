export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[
    {
      id: 1,
      title: "Inclusive Use of Broadband Connectivity for Quality Education",
      url:
        "https://www.unescap.org/sites/default/files/Inclusive%20Use%20of%20Broadband%20Connectivity%20for%20Quality%20Education%2C%20Insights%20from%20Asia%20and%20the%20Pacific_0.pdf",
      publication: "United Nations ESCAP",
      Year: "2019",
      imageUrl:
        "UNPoster.png"
    },
    {
      id: 2,
      title: "Business and Social Opportunity for E-Learning in Indian Agriculture",
      url:
        "https://drive.google.com/open?id=1VwY-sJUGCg3zt4dHwrBRXSmT5eh9Xv8T",
      publication: "Coursera",
      Year: "2019",
      imageUrl:
        "Coursera.png"
    },
    {
      id: 3,
      title:
        "Physics and Technology for Future Presidents",
      url:
        "https://drive.google.com/drive/folders/1fj5rJhsS10e5dW8fALhTF2AsBrX-s44z?usp=sharing",
      publication: "University of California, Berkeley",
      Year: "2018",
      imageUrl:
        "P10.png"
    },
    {
      id: 4,
      title: "IIMA’s Digital Leap: Formulating Online Education Strategy",
      url:
        "https://cases.iima.ac.in/index.php/iima-s-digital-leap-formulating-online-education-strategy.html",
      publication: "Indian Institute of Management, Ahmedabad",
      Year: "2019",
      imageUrl:
        "IIMA.png"
    },
    {
      id: 5,
      title:
        "Okhai Center for Empowerment: Refashioning the lives of rural women",
      url:
        "https://cases.iima.ac.in/index.php/okhai-centre-for-empowerment-refashioning-the-lives-of-rural-women.html",
      publication: "Okhai Enterprise ",
      Year: "2017",
      imageUrl:
        "Okhai.png"
    },

    {
      id: 6,
      title:
        "Salesforce training material",
      url:
        "",
      publication: "Room To Read",
      Year: "2020",
      imageUrl:
        "sales.png"
    },


    {
      id: 7,
      title:
       "Grihini Social Welfare Society: Breaking Stereotypes Empowering Women",
      url:
         "https://www.researchgate.net/publication/330145312_Tata_Motors_Grihini_Social_Welfare_Society_'Breaking_Stereotypes_Empowering_Women",
      publication: "Tata Motors Limited",
      Year: "2015",
      imageUrl:
        "Grihini.png"
    },

    {
      id: 8,
      title:
        "Club Enerji Program",
      url:
         "https://www.researchgate.net/publication/330145381_Club_Enerji_Program_at_Tata_Power",
      publication: "Tata Power Limited",
      Year: "2016",
      imageUrl:
        "CE.png"
    },
    {
      id: 9,
      title:
        "SauMill: The Journey of Cost & Value Innovation at Tata Communications Limited",
      url:
         "http://www.openinnovationtmc.org/HOME/soitmc/sub/sub.htm?nav_code=soi1479103409",
      publication: "Tata Communication Limited",
      Year: "2017",
      imageUrl:
        "SAU.png"
    },
    {
      id: 10,
      title:
        "Greenolution: Sensitizing Employees on Environmental Conservation",
      url:
         "https://www.researchgate.net/publication/312085946_Greenolution_IMRA-IIMB_Publication",
      publication: "Tata Power Limited",
      Year: "2016",
      imageUrl:
        "GNR1.png"
    },

    {
      id: 11,
      title:
        "Professional Driver Training Initiative: Paving the Ways for The Skilled Truck Drivers",
      url:
         "",
      publication: "Tata Motors Limited",
      Year: "In Process",
      imageUrl:
        "PDTI.png"
    }
  ],
  companies:[{id:1,name:"Room To Read",url:"R2R.png",duration:"Jan 2020 - Apil 2020"},
  {id:2,name:"Coursera",url:"cour.png", duration:"Nov 2019 - May 2020"},
  {id:3,name:"UC Berkeley",url:"UCBL.jpg", duration:"Jan 2018 - May 2019"},
  {id:4,name:"United Nations",url:"UN2.jpg",duration:"May 2018 - July 2018"}]


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
