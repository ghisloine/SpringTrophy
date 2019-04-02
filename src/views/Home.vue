<template>
  <div>
    <header>
      <Race></Race>
    </header>
      <!--<Navigation></Navigation>
            <div class="home">
              <Carousel></Carousel>
              <br>
              <section class="hide-on-med-and-down home">
                <Widget></Widget>
              </section>
            </div>
      <News></News>
      <Vela></Vela>
      <Contact></Contact>
      <Footer></Footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Race from '@/components/Race.vue'
import Navigation from '@/components/Navigation.vue'
import Carousel from '@/components/Carousel.vue'
import Widget from '@/components/Widget.vue'
import News from '@/components/News.vue'
import Vela from '@/components/Vela.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'home',
  components: {
    Race,
    Navigation,
    Carousel,
    Widget,
    News,
    Vela,
    Contact,
    Footer
  }
}
</script>
<style scoped>
.home{
  background-image: linear-gradient(#f0f2f1,white);
}
  .Mid{
    text-align: center;
  }
</style>
