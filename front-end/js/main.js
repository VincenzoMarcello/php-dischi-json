const { createApp } = Vue;

createApp({
  data() {
    return {
      //# ARRAY VUOTO IN CUI VERRA' PUSHATO L'ARRAY DALL'API
      discs: [],
    };
  },

  //# FACCIO LA CHIAMATA AXIOS ALLA NOSTRA API
  mounted() {
    axios.get("../back-end/data/dischi.php").then((response) => {
      console.log(response.data);
      this.discs = response.data;
    });
  },
}).mount("#app");
