<template>
  <li class="meal">
    <img src="../assets/meal.png" />
    <div class="content">
      <div class="logo flex align-center">
        <img src="../assets/Fill_1.png" alt />
        <h1>Home chef</h1>
      </div>
      <ul class="flex col">
        <li>$30 off your first order</li>
        <li>Healthy meals in 30 minutes</li>
        <li>Healthy meals in 30 minutes</li>
      </ul>
    </div>
    <div class="order flex align-center space-between">
      <span>Read Review</span>
      <button>Order Now</button>
    </div>
  </li>
</template>
<script>
export default {
  name: "Meal"
};
</script>