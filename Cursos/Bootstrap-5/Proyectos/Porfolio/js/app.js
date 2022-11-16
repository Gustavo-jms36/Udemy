const images = document.querySelectorAll('.galery .container-img');
const imgModal = document.getElementById('image-modal');

images.forEach((image) => {
  image.addEventListener('click', () => {
    const ruta = image.querySelector('img').src;
    imgModal.src = ruta;
  })
})