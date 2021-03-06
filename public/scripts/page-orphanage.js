const options = {
    dragging: false,
    touchZoom: false,
    doublesClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false,
};

const map = L.map('mapid', options).setView([-23.02618, -45.5559945], 18);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//create and add marker

L.marker([-23.02618, -45.5559945], { icon: icon }).addTo(map);

/* image galery */

function selectImage(event) {
    const button = event.currentTarget;

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button) {
        //o button desta function não tem ligação com o do selectImage
        button.classList.remove("active");
    }
    //selecionar imagem clicada

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src = image.src

    //adicionar a classe .active para este botão clicado
    button.classList.add("active");

}
