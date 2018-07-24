// user logic
$(document).ready(function(){
  $(".p1").hide()
  $("#button-home").click(function(event){
  $(".p1").show();





});
});

<script type="text/javascript">
    $(document).ready(function() {
        /*
        var defaults = {
              containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear' 
         };
        */
        
        $().UItop({ easingType: 'easeOutQuart' });
        
    });
</script>
<a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>

function myFunction() {
    var x = document.getElementById("fullscreen_bg");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

