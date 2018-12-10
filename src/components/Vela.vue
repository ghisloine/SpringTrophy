<template>
    <section style="padding-top:70px;overflow:hidden">
        <div class="container">
            <div class="row">
                <div class="s12"><br>
                    <h5 id="BigHeader" class="center-align">VELA</h5><br>
                    <h5 id="SmallHeader" class="center-align">Kupası</h5>
                </div>
                <div class="col s12 l8">
                    <div class="row">
                        <div class="col s12 m6">
                            <img src="../assets/1.jpg" class="responsive-img materialboxed">
                        </div>
                        <div class="col s12 m6">
                            <p id="InfoText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut neque lacus. Quisque in porttitor tortor. Nunc sit amet porttitor velit, sit amet consectetur tortor. Ut imperdiet mattis arcu euismod tempus. Sed gravida posuere urna posuere iaculis. Suspendisse potenti. Vestibulum blandit dolor ut ullamcorper fermentum. Vestibulum eget quam a velit tempus mattis in a odio. Aliquam suscipit est quis odio feugiat consequat. Donec tempor, massa eu pellentesque posuere, massa sapien rutrum ligula, eget sagittis elit purus condimentum ante. Vivamus tempus, velit vel suscipit iaculis, ligula elit semper dui, sit amet molestie dui nisi a magna. Donec ac est sit amet quam dignissim aliquet in eu leo. Quisque dapibus egestas nisi. Pellentesque euismod interdum mi, in aliquet massa suscipit et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m4 l4">
                            <img src="../assets/1.jpg" class="responsive-img materialboxed">
                        </div>
                        <div class="col s12 m4 l4">
                            <img src="../assets/1.jpg" class="responsive-img materialboxed">
                        </div>
                        <div class="col s12 m4 l4">
                            <img src="../assets/1.jpg" class="responsive-img materialboxed">
                        </div>
                    </div>
                    
                </div>
                <div class="col s12 l4">
                    <img src="../assets/VelaKupasi.png" id="VelaCup" class="hide-on-med-and-down">
                </div>
        </div>
        </div>
        
    </section>
</template>
<script>
document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems);
  });

  
export default {
    Name : 'Vela',
    created(){
        
    }
}
</script>
<style scoped>
    #BigHeader{
        font-size: 117px;
        line-height: 25px;
        color: #fbb813;
        font-family: "Josefin Sans";
        font-weight: bold;
        text-align: center;
    }
    #SmallHeader{
        font-size: 37px;
        line-height: 25px;
        color: #055388;
        font-family: "Josefin Sans";
        font-weight: bold;
        text-align: center;
    }
    #InfoText{
        
        font-size: 13px;
        line-height: 20px;
        color: #58595b;
        font-family: "Josefin Sans";
        text-align: center;
    }
    #VelaCup{
        position:relative;
        right: 550px;
        bottom: 50px;
    }
    @media only screen and (min-width: 1200px) {
    section {
        max-height: 1000px;
    }
}
</style>
