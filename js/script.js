// Tutte le funzioni verranno eseguite una volta completato il caricamento della pagina
$(document).ready(function() {
  // Definisco alcune variabili
  var left = $(".prev");
  var right = $(".next");
  var imgFirst = $(".first");
  var imgLast = $(".last");
  var puntoFirst = $(".first");
  var counter = 0;
// Evento click sulla freccina destra del carousel
  right.click(function() {
    var img = $("img.active");
    img.removeClass("active");
    var punto = $("i.active");
    punto.removeClass("active");

    if (img.hasClass("last") && punto.hasClass("last")) {
    var imgNext = imgFirst;
    var puntoNext = puntoFirst;
  } else {
    var imgNext = img.next();
    var puntoNext = punto.next();
  }
  imgNext.addClass("active");
  puntoNext.addClass("active");
  });

// Evento click sulla freccina sinistra del carousel
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
