const { createApp } = Vue;

createApp({
  data() {
    return {
        discs:[],
    };
  },

  mounted() {
    axios
      .get(...)
      .then((response) => {
        console.log(response.data),
        this.discs=response.data
      });
  },
}).mount("#app");