var trabajos = [

  {
      figure: "media/trabajo-01-bslide.jpg",
      alt: "Descripción de la imagen",
      title: "B-Slide",
      about: "Modelo de colmena de extracción horizontal y distribución vertical que optimiza el proceso productivo apícola. Diseñado para la clase de Taller Calidad I en conjunto con FIA.",
      by: "by: paula"
  },

  {
      figure: "media/trabajo-02-bioef.jpg",
      alt: "Descripción de la imagen",
      title: "Bioef",
      about: "Limpiador y/o desinfectante bioefervescente en formato de pastilla, amigable con el medioambiente. Fue diseñado para la clase de Taller Calidad I en relación al desafío Virutex-Ilko.",
      by: "by: paula"
  },

  {
      figure: "media/trabajo-03-cesfam.jpg",
      alt: "Descripción de la imagen",
      title: "Rediseño de servicio CESFAM MTC",
      about: "Examen para la clase de Introducción al Diseño de Servicios con Red Salud Áncora. Trabajo de diseño colaborativo para disminuir el estrés de las TENS de farmacia.",
      by: "by: paula"
  },

  {
      figure: "media/trabajo-04-golos.jpg",
      alt: "Descripción de la imagen",
      title: "Golos",
      about: "Dispositivo para sillas de ruedas que permite tener el control de esta con una sola mano. Ideal para personas que juegan bolos. Diseñado para la clase de Taller Producto con Ride de Vuelta.",
      by: "by: paula"
  },

{
    figure: "media/trabajo-05-propio.jpg",
    alt: "Descripción de la imagen",
    title: "Propio",
    about: "Mobiliario divisor para albergues fabricado con 90% de tela PVC reciclada. El armazón está hecho con tubos de tela termosellada y endurecida. Diseñado para Taller Producto.",
    by: "by: cata y paula"
},

{
  figure: "media/trabajo-06-comic.jpg",
  alt: "Descripción de la imagen",
  title: "Título de primer trabajo",
  about: "La serie de cómics mensuales para el diario Visión trata sobre situaciones cotidianas de los estudiantes relacionadas a eventos que ocurren de acuerdo al mes de su respectiva publicación.",
  by: "by: cata"
},

{
  figure: "media/trabajo-07-concurso.jpg",
  alt: "Descripción de la imagen",
  title: "Título de segundo trabajo",
  about: "Ilustración para concurso de “Talk Talk Korea 2018”. El tema era la paz en Corea, donde se usó como referencia eventos deportivos donde Corea del Norte y del Sur participaron juntos.",
  by: "by: cata"
},

{
  figure: "media/trabajo-08-camile.jpg",
  alt: "Descripción de la imagen",
  title: "Título de tercer trabajo",
  about: "Ilustración de Camile, un personaje femenino de un cómic personal que se encuentra en proceso de redacción del guión para luego ilustrar las escenas de la historia.",
  by: "by: cata"
},

{
  figure: "media/trabajo-09-day6.jpg",
  alt: "Descripción de la imagen",
  title: "Título de cuarto trabajo",
  about: "Fondo de los miembros de la banda surcoreana “Day6” ilustrada para un mapa del juego online “osu!”. La canción mapeada fue “Man in a movie” de la misma banda por el jugador iYiyo.",
  by: "by: cata"
},

{
    figure: "media/trabajo-10-pandarojo.jpg",
    alt: "Descripción de la imagen",
    title: "Enriquecimiento ambiental Panda Rojo",
    about: "Sistema de enriquecimiento ambiental conformado por puentes tejidos y una plataforma. Todos los materiales utilizados son reciclados. Diseñado para la clase de Taller Interacción.",
    by: "by: cata y paula"
},

];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<h5>' + trabajos[i].by + '</h5>';
    var cuatro = '<p>' + trabajos[i].about + '</p>';
    var cinco = '<p><a href="' + trabajos[i].url + '">Ver más</a></p>'
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + cinco + '</div>')
});
