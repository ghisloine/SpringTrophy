<template>
     <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">İLETİŞİM</h5>
                <ul style="display:flex;">
                    <li><i class="material-icons">location_on</i></li>
                    <li><span class="Adress">Çırağan Caddesi</span><br>
                        <span class="Adress">No : 4</span><br>
                        <span class="Adress">34353,Beşiktaş</span><br>
                        <span class="Adress">İstanbul / Türkiye</span>
                    </li>
                </ul>
                
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .page-footer{
        background-color: #2d2d2d;
    }
    .Adress{
        
        height: 180px;
        font-size: 11px;
        letter-spacing: 1px;
        line-height: 18px;
        color: #dddddd;
        font-family: "Josefin Sans";
    }
</style>
