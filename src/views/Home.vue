<template>
  <div class="home">
    <header>
      <Race></Race>
    </header>
    <Navigation></Navigation>
    <Carousel></Carousel>
    <section class="Mid hide-on-med-and-down">
      
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Race from '@/components/Race.vue'
import Navigation from '@/components/Navigation.vue'
import Carousel from '@/components/Carousel.vue'
import Widget from '@/components/Widget.vue'
export default {
  name: 'home',
  components: {
    Race,
    Navigation,
    Carousel,
    Widget
  }
}
</script>
<style scoped>
  .Mid{
    text-align: center;
  }
</style>
