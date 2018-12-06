<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col s12 m4">
                    <h1>Hello World!</h1>
                </div>
                <div class="col s12 m8">
                    <div class="carousel carousel-slider">
                        <a class="carousel-item" href="#one!"><img src="../assets/1.jpg"></a>
                        <a class="carousel-item" href="#two!"><img src="../assets/2.jpg"></a>
                        <a class="carousel-item" href="#three!"><img src="../assets/2.jpg"></a>
                        <a class="carousel-item" href="#four!"><img src="../assets/3.jpg"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name : 'Carousel',
    data() {
        return{
            NewInstance : 0
        }
    },
    created(){
        document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
        var instance = M.Carousel;
        console.log(instance);
  });
    }
}
</script>
<style scoped>
section{
    background-color: #f0f2f1;
}
</style>

