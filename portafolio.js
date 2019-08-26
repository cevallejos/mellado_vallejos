var trabajos = [

  {
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-01-bslide.jpg",
      alt: "Joven en cuclillas deslizando marco del segundo cajón por una compuerta frontal.",
      title: "B-Slide",
      about: "Modelo de colmena de extracción horizontal y distribución vertical que optimiza el proceso productivo apícola. Diseñado para la clase TIDE en conjunto con FIA.",
      by: "by: paula",
      url: "https://www.instagram.com/p/B1mcNloA0CN/"
  },

  {
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-02-bioef.jpg",
      alt: "Envases tubulares naranjo (desinfectante) y calipso (limpiador) con apertura en la parte superior frontal y el logo de Virutex en cada uno.",
      title: "Bioef",
      about: "Limpiador y/o desinfectante bioefervescente en formato de pastilla, amigable con el medio ambiente. Fue diseñado para la clase de Taller Calidad I en relación al desafío Virutex-Ilko.",
      by: "by: paula",
      url: "https://www.instagram.com/p/B1mbadjgui1/"
  },

  {
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-03-cesfam.jpg",
      alt: "Dos Técnicas en Enfermería sentadas anotando sobre una pequeña pizarra en la mesa con personas de plástico sobre ella.",
      title: "Rediseño de servicio CESFAM",
      about: "Examen para la clase de Introducción al Diseño de Servicios con Red Salud Áncora. Trabajo de diseño colaborativo para disminuir el estrés de las TENS de farmacia.",
      by: "by: paula",
      url: "https://www.instagram.com/p/B1mbEUmg_Gd/"
  },

  {
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-04-golos.jpg",
      alt: "Dispositivo con dos ruedas amarillas de bicicleta ancladas por un cuadrado de fierro azul y una manilla en el lado izquierdo. En el fondo se divisa la parte superior de una silla de ruedas.",
      title: "Golos",
      about: "Dispositivo para sillas de ruedas que permite tener el control de esta con una sola mano. Ideal para personas que juegan bolos. Diseñado para la clase de Taller Producto con Ride de Vuelta.",
      by: "by: paula",
      url:"https://www.instagram.com/p/B1majTDA8Ul/"

  },

{
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-05-propio.jpg",
      alt: "Mobiliario de tela PVC blanca conformado por dos triángulos de diferente altura tensados en la parte inferior y en la unión de los triángulos.",
      title: "Propio",
      about: "Mobiliario divisor para albergues fabricado con 90% de tela PVC reciclada. El armazón está hecho con tubos de tela termosellada y endurecida. Diseñado para la clase de Taller Producto.",
      by: "by: cata y paula",
      url:"https://www.instagram.com/p/B1maN_KAHyB/"
},

{
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-06-comic.jpg",
      alt: "Viñeta con título Vacaciones de Invierno @elablut. La escena es de una niña bostezando mientras estira las ropas de la cama. En la parte superior sale una burbuja de diálogo que dice: por fin terminó el semestre. En la parte inferior izquierda aparece un recuadro en el que se lee: 5 de julio.",
      title: "Cómic de diario Visión UC",
      about: "La serie de cómics mensuales para el diario Visión trata sobre situaciones cotidianas de los estudiantes relacionadas a eventos que ocurren de acuerdo al mes de su respectiva publicación.",
      by: "by: cata",
      url: "https://issuu.com/visionuniversitaria/docs/vu285/2"
},

{
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-07-concurso.jpg",
      alt: "Ilustración de dos jóvenes coreanos abrazándose por la espalda mientras sonríen. El de la izquierda representa a Corea del Sur y el de la derecha a Corea del Norte. En el fondo luce una bandera blanca con el territorio geográfico coreano.",
      title: "Ilustración concurso",
      about: "Ilustración para concurso de “Talk Talk Korea 2018”. El tema era la paz en Corea, donde se usó como referencia eventos deportivos donde Corea del Norte y del Sur participaron juntos.",
      by: "by: cata",
      url: "https://www.instagram.com/p/BltEavRlIub/",
},

{
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-08-camile.jpg",
      alt: "Personaje femenino en fondo blanco cayendo de espaldas. Tiene características zoomorfas como pelo, cola, orejas y patas.",
      title: "Camile",
      about: "Ilustración de Camile, un personaje femenino de un cómic personal que se encuentra en proceso de redacción del guión para luego ilustrar las escenas de la historia.",
      by: "by: cata",
      url: "https://www.instagram.com/p/Bty7F0BAia2/"
},

{
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-09-day6.jpg",
      alt: "Ilustración de una película fotográfico con cinco jóvenes coreanos abrazándose y sonriéndo. En la parte inferior se lee: Day6 - Man in a movie.",
      title: "Ilustración Day6",
      about: "Fondo de los miembros de la banda surcoreana “Day6” ilustrada para un mapa del juego online “osu!”. La canción mapeada fue “Man in a movie” de la misma banda por el jugador iYiyo.",
      by: "by: cata",
      url: "https://www.instagram.com/p/B0yV3jyBO90/"
},

{
      figure: "https://cevallejos.github.io/mellado_vallejos/media/trabajo-10-pandarojo.jpg",
      alt: "Panda Rojo de costado parado en puente tejido con mangueras de bombero.",
      title: "Enriquecimiento Panda Rojo",
      about: "Sistema de enriquecimiento ambiental conformado por puentes tejidos y una plataforma. Todos los materiales utilizados son reciclados. Diseñado para la clase de Taller Interacción.",
      by: "by: cata y paula",
      url:"https://www.instagram.com/p/BcGBYH4l6ZN/"
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
