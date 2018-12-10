<template>
    <section id="Main">
        <div class="container">
            <h1 class="Header">LATEST</h1><br>
            <!-- Border BOTTOM gelecek -->
            <h1 class="Header">NEWS</h1><br>
            <a href="#" id="LinkToAllNews">&nbsp;ALL NEWS <img src="../assets/right-arrow.svg" style="width:20px"></a>
            
            
            <!--
                Cards Burda olacak 6 tane
                Firebase ile filter edip son 6 tanesini gosterecegim
             -->
             <div class="row">
                <div class="col s12 m6 l4">
                    <div class="card sticky-action">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img src="../assets/1.jpg" class="activator">
                        </div>
                        <div class="card-content">
                        <span class="card-title">Card Title</span>
                        <span class="card-text">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</span>

                        </div>
                        <div class="card-reveal">
                        <span class="card-title">Card Title<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                        <img src="../assets/1.jpg">
                        <span class="card-title">Card Title</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                        <img src="../assets/1.jpg">
                        <span class="card-title">Card Title</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                        <img src="../assets/1.jpg">
                        <span class="card-title">Card Title</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                        <img src="../assets/1.jpg">
                        <span class="card-title">Card Title</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                        <img src="../assets/1.jpg">
                        <span class="card-title">Card Title</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #Main{
        background-image: url('../assets/Background.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .card{
        
       
    }
    .Header{
       font-size: 120px;
        letter-spacing: 8px;
        line-height: 87px;
        color: #055388;
        font-family: "Josefin Sans";
        margin: 0;       
    }
    .card-title{
        width: 404px;
        height: 21px;
        font-size: 20px;
        letter-spacing: 0px;
        line-height: 17px;
        color: #fbb813;
        font-family: "Josefin Sans";
    }
    .card-text{
        height: 154px;
        font-size: 15px;
        letter-spacing: 0px;
        line-height: 17px;
        color: #4d4d4d;
        font-family: "Josefin Sans";
    }
    #LinkToAllNews{
        font-size: 22px;
        line-height: 26px;
        color: #fbb813;
        font-family: "Josefin Sans";
    }
    .Header:first-of-type{
        border-bottom: 2px solid #fcbb1b;
    }
    @media only screen and (max-width: 1200px) {
    #Main {
        background-size: cover;
    }
}
    @media only screen and (max-width: 600px) {
    .Header {
        font-size: 80px;
    }
}
    @media only screen and (max-width: 400px) {
        .Header {
            font-size: 60px;
        }
    }
</style>

