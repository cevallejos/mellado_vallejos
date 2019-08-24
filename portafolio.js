var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Descripción de la imagen",
    title: "Título de primer trabajo",
    about: "La serie de cómics mensuales para el diario Visión trata sobre situaciones cotidianas de los estudiantes relacionadas a eventos que ocurren de acuerdo al mes de su respectiva publicación."
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Ilustración para concurso de “Talk Talk Korea 2018”. El tema de la competencia era la paz en Corea, donde se usó como referencia eventos deportivos donde Corea del Norte y del Sur participaron juntos."
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Descripción de la imagen",
    title: "Título de tercer trabajo",
    about: "Ilustración de Camile, un personaje femenino de un cómic personal que se encuentra en proceso de redacción del guión para luego ilustrar las escenas de la historia."
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "Título de cuarto trabajo",
    about: "Fondo de los miembros de la banda surcoreana “Day6” ilustrada para un mapa del juego online “osu!”. La canción mapeada fue “Man in a movie” por el jugador iYiyo."
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "Título de quinto trabajo",
    about: "Texto simulado de descripción de quinto trabajo"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "Título de sexto trabajo",
    about: "Texto simulado de descripción de sexto trabajo"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href="' + trabajos[i].url + '">Ver más</a></p>'
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro +'</div>')
});
