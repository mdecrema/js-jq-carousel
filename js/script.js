// Tutte le funzioni verranno eseguite una volta completato il caricamento della pagina
$(document).ready(function() {
  // Definisco alcune variabili
  var left = $(".prev");
  var right = $(".next");
  var imgFirst = $(".first");
  var imgLast = $(".last");
  var counter = 0;

// Evento click sulla freccina destra del carousel
  right.click(function() {
    if (counter == 0) {
    imgFirst.removeClass("active");
    imgFirst.next().addClass("active");
    counter = 1;
  } else if ( counter == 1) {
      imgFirst.next().removeClass("active");
      imgLast.prev().addClass("active");
      counter = 2;
  } else if ( counter == 2) {
    imgLast.prev().removeClass("active");
    imgLast.addClass("active");
    counter = 3;
  } else if ( counter == 3){
    imgLast.removeClass("active");
    imgFirst.addClass("active");
    counter = 0;
  }
  });

left.click(function() {
  if (counter == 0) {
  imgLast.addClass("active");
  imgFirst.removeClass("active");
  counter = 3;
} else if ( counter == 3) {
    imgLast.prev().addClass("active");
    imgLast.removeClass("active");
    counter = 2;
} else if ( counter == 2) {
  imgLast.prev().removeClass("active");
  imgFirst.next().addClass("active");
  counter = 1;
} else if ( counter == 1) {
  imgFirst.next().removeClass("active");
  imgFirst.addClass("active");
}
});


});
