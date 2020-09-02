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
    var img = $("img.active");
    img.removeClass("active");
    if (img.hasClass("last")) {
    var imgNext = imgFirst;
  } else {
    var imgNext = img.next();
  }
  imgNext.addClass("active");
  });

  left.click(function() {
    var img = $("img.active");
    img.removeClass("active");
    if (img.hasClass("first")) {
    var imgNext = imgLast;
  } else {
    var imgNext = img.prev();
  }
  imgNext.addClass("active");
  });

});
