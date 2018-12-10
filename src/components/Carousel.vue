<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col s12 m4">
                    <span id="SliderHeader">Lorem Ipsum Dolor Sit Ames</span><br>
                    <span id="SliderText">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.</span>
                    <br>
                    <a href="#" id="ReadMore" class="right">Read More ...</a>
                    
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
            index : 0
        }
    },
    created(){
        var Data = this;
        document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var options = { 

            onCycleTo : function(){
                  Data.index =elems[0].M_Carousel.center
                  
            },  
            indicators : true,
            fullWidth : true,
            noWrap : true
        };
        var instances = M.Carousel.init(elems,options);
    });
}
}
</script>
<style scoped>
#SliderHeader{
    font-size: 47px;
    letter-spacing: 1px;
    line-height: 44px;
    color: #055388;
    font-family: "Josefin Sans";
    font-weight: 600;
}
#SliderText{
    width: 171px;
    height: 57px;
    font-size: 13px;
    letter-spacing: 0px;
    line-height: 14px;
    color: #58595b;
    font-family: "Josefin Sans";
}
#ReadMore{
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 20px;
    color: #fbb813;
    font-family: "Josefin Sans";
    margin: 10px 0px 10px 0px;
}
</style>

