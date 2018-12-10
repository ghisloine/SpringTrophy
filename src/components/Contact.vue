<template>
    <div id="Top">
        <div class="container">
            <div class="row">
                <div class="s8">
                    <span id="Contact">CONTACT</span>
                </div>
            <div class="col s12 m7">
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                        <div class="input-field col s6">
                            <input id="name" type="text" class="validate">
                            <label for="name">Name</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>   
                        <div class="input-field col s6">
                            <input id="email" type="email" class="validate">
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                        </div>
                        <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea2">Textarea</label>
                        </div>
                        </div>
                    </form>
                    </div>
            </div>
            <div class="col s12 m5">
                <iframe id="Maps" src="https://yandex.com.tr/map-widget/v1/?um=constructor%3Adb8d2ea176237ba59a7f969098a558ad097e7ce90577ee485db3e789654c694c&amp;source=constructor" width="533" height="400" frameborder="0"></iframe>
            </div>
        </div>
    </div>
        
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #Contact{
        font-size: 80px;
        letter-spacing: 1px;
        line-height: 240px;
        color: #055388;
        font-family: "Josefin Sans";
        font-weight: bold;
        border-bottom: 2px solid #055388;
    }
    #Top{
        background-image: url('../assets/Sunshine.png');
        background-position: center;
        background-color: #055388;
        background-repeat: no-repeat;
        background-position: bottom;
    }
    @media only screen and (max-width: 1200px) {
        #Contact{
            color : #fbb813;
            font-size : 50px;
        }
        #Top {
            background-image: none;
            background-color: #055388;
        }
        #Maps{
            width: 300px;
            height: 300px;
        }
    }
</style>

