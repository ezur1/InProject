<template>
  <div class="articles">
    <h1>Articles</h1>
    <Article  v-for="index in 3" :key="index"/>
  </div>
</template>
<script>
import Article from '../components/Article'
export default {
  name: "Articles",
  components:{
    Article
  }
};
</script>