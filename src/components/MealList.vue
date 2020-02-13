<template>
  <ul>
    <Meal v-for="index in 10" :key="index"/>
  </ul>
</template>
<script>
import Meal from '../components/Meal'
export default {
  name: "MealList",
  components:{
      Meal
  }
};
</script>