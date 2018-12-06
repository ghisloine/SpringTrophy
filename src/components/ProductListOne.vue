<template>
  <div id="product-list-one">
   
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in products" :key="product.id">
            <span>{{product.name}}</span><br>
            <span>${{product.price}}</span>
        </li>
    </ul>

  </div>
</template>
<script>
export default {
  computed : {
    products(){
      return this.$store.state.products;
    }
  }
}
</script>
