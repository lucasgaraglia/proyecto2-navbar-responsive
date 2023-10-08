const container_icons = document.getElementById('container_icons');
const ul_links = document.getElementById('ul_links');

const icon_open = document.getElementById('list_icon');
const icon_close = document.getElementById('close_icon');

container_icons.addEventListener('click', () => {

    ul_links.classList.toggle('ul_links-show'); // si el elemento no tiene la clase ul_list-show, se la agrega. si ya la tiene, se la elimina

    // el icono de close ya tiene la clase hide-icon por defecto.
    // ahora, hago un toggle con los dos iconos en la misma llamada
    icon_open.classList.toggle('hide-icon');
    icon_close.classList.toggle('hide-icon');

});



