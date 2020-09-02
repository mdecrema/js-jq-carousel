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
    var punto = $("i.active");
    punto.removeClass("active");

    // Se l'img ha classe 'last' e il pallino ha classe 'last'
    if (img.hasClass("last") && punto.hasClass("last")) {
      // Allora significa che cliccando a destra dovrò vedere la prima immagine e il primo pallino sarà blu
    var imgNext = imgFirst;
    var puntoNext = imgFirst;
  } else {
    // Altrimenti verrà selezionata l'immagine successiva a quella che al momento a classe 'active'
    var imgNext = img.next();
    // Stesso cosa per il pallino
    var puntoNext = punto.next();
  }

  // Una volta individuato l'elemento corretto gli aggiungo la classe 'active' in modo da renderlo visibile
  imgNext.addClass("active");
  puntoNext.addClass("active");
  });

// Evento click sulla freccina sinistra del carousel
// Stesso cosa della freccina destra però col ragionamento inverso
  left.click(function() {
    var img = $("img.active");
    img.removeClass("active");
    var punto = $("i.active");
    punto.removeClass("active");

    if (img.hasClass("first") && punto.hasClass("first")) {
    var imgNext = imgLast;
    var puntoNext = imgLast;
  } else {
    var imgNext = img.prev();
    var puntoNext = punto.prev();
  }
  imgNext.addClass("active");
  puntoNext.addClass("active");
  });

});
