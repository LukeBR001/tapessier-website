const images = document.querySelectorAll('.images-dep');
const modal = document.querySelector('.modal-dep');
const modalImg = document.querySelector('#modalImg');
var srcVal = "";

for (let i=0; i<images.length; i++){
    images[i].addEventListener('click', function(){

        srcVal = images[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal-dep-active');

    })
}

const btnClose = document.querySelector('.btn-close-modal')
.addEventListener('click', function() {

    modalImg.removeAttribute('src');
    modal.classList.toggle('modal-dep-active');

});
