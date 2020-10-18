
const map = L.map('mapid').setView([-23.02618, -45.5559945], 18);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});
//iniciando variavel
let marker;

//create and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat').value = lat;
    document.querySelector('[name=lng').value = lng;

    //remove icon 
    marker && map.removeLayer(marker); //if there is a marker, then removeLayer

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
})


//add photo link field
function addPhotoField() {

    //catch photo container #images
    const container = document.querySelector('.images')

    //catch container to be duplicated .new-upload
    const fieldContainers = document.querySelectorAll('.new-upload')

    //make clone of last picture added
    let fieldContainersIndex = fieldContainers.length - 1
    const cloneFieldContainer = fieldContainers[fieldContainersIndex].cloneNode(true)

    //verify if field is empty, if true, not perform add to image container
    const input = cloneFieldContainer.children[0]

    if(input.value == "" ){
        return 
    }

    //clean field before add to image cloneFieldContainer
    input.value = ""

    //add clone to image container
    container.appendChild(cloneFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldContainers = document.querySelectorAll('.new-upload')

    if(fieldContainers.length < 2){
        //clean field value
        span.parentNode.children[0].value = ""
        return
    }

    //delete field
    span.parentNode.remove()
}

//'yes or no' select
function toggleSelect(event) {
    //get  button pressed
    document.querySelectorAll('.button-select button')
    .forEach((button) => {button.classList.remove('active')})

   //inser .active class in selected button 
    const button = event.currentTarget
    button.classList.add('active')

    // refresh hidden input with selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}