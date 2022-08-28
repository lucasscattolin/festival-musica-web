document.addEventListener('DOMContentLoaded', function() {

   navegacionFija();

});

function navegacionFija() {
    // Registrar el Intersection Observer

    const observer = new IntersectionObserver( function(entries) {
        console.log(entries[0]);
    });

    // Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}