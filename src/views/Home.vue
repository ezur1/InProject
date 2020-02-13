<template>
  <div class="home">
    <Hero />
    <div class="container">
      <AdvertisingDisc />
      <section class="flex">
        <MealList />
        <Articles />
      </section>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import AdvertisingDisc from "../components/AdvertisingDisc";
import MealList from "../components/MealList";
import Articles from "../components/Articles";
export default {
  name: "home",
  components: {
    Hero,
    AdvertisingDisc,
    MealList,
    Articles
  },
  computed: {}
  // async created(){
  //   await this.$store.dispatch({type:'loadTasks'})
  // }
};
</script>
