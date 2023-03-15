<script>
// components
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Plan from "./components/Plan.vue";
// data
import planData from "./data/data.json";

export default {
  components: { Header, Footer, Plan },
  methods: {
    updatePeriod: function () {
      // fade out the price, then update it and fade it in in 250ms
      this.fade();
      setTimeout(() => this.togglePeriod(), 250);
      setTimeout(() => this.fade(), 250);
    },
    fade: function () {
      //fade in/out prices in Plan components by toggling opacity
      const elements = document.getElementsByClassName("price");
      for (let element of elements) {
        element.classList.toggle("opacity-0");
      }
    },
    togglePeriod: function () {
      // toggle period
      this.period === "annually"
        ? (this.period = "monthly")
        : (this.period = "annually");
    },
  },
  data() {
    return {
      period: "monthly",
      data: planData,
    };
  },
};
</script>

<template>
  <Header :period="period" @toggle="updatePeriod" />
  <main class="mt-16">
    <div class="items-center lg:flex">
      <Plan v-for="dataItem in data" :data="dataItem" :period="period" />
    </div>
  </main>
  <Footer />
</template>
