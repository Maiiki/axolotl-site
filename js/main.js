function lightboxShowImage($id){
  $('#lightbox').addClass("visible");
}
$(document).ready(function (){
  $('#lightbox').click(function (){
    $('#lightbox').removeClass("visible");
  });
  $("#lightbox__content").click(function(e) {
       e.stopPropagation();
  });
});
