// Tutte le funzioni verranno eseguite una volta completato il caricamento della pagina
$(document).ready(function() {
  // Definisco alcune variabili
  var left = $(".prev");
  var right = $(".next");
  var imgFirst = $(".first");
  var imgLast = $(".last");
  var counter = 0;



  right.click(nextImage);
  left.click(prevImage);

// Funzione di slider immagine verso destra
  function nextImage() {
    setTimeout(function() {
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

}, 200);
  };

// // Funzione di slider immagine verso sinistra
// Stesso cosa della freccina destra però col ragionamento inverso
  function prevImage() {
    setTimeout(function() {
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
}, 2000);
  };

  // Evento sulle freccine della tastiera
  $(document).keydown(function(event) {
        console.log(event.keyCode);
        // Se clicco la freccina destra allora richiamo la funzione 'nextImage'
        if (event.which == 37)
        {
            prevImage();
        }
        // Se clicco la freccina sinistra allora richiamo la funzione 'prevImages'
        else if (event.which == 39)
        {
            nextImage();
        }
    });

  // Al click del pallino richiamo la funzione 'cliccato'
  $(".nav i").click(cliccato);

  // Funzione che mostra l'immagine corrispondente al pallino cliccato
  function cliccato() {
    var pallinoIndex = $(this).index();
    $("img").removeClass("active");
    var indexImg = pallinoIndex + 1;
    $("img:nth-child("+indexImg+")").addClass("active");
    $(".nav i").removeClass("active");
    $(this).addClass("active");
  };

});
