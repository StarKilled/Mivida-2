// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Mostrar la imagen
    const cardImage = document.querySelector('#cardImage');
    cardImage.classList.remove('hidden');
    cardImage.classList.add('visible');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Ocultar la imagen
    const cardImage = document.querySelector('#cardImage');
    cardImage.classList.add('hidden');
    cardImage.classList.remove('visible');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Mostrar la imagen
    const cardImage = document.querySelector('#cardImage');
    cardImage.classList.remove('hidden');
    cardImage.classList.add('visible');

    // Mostrar el botón adicional
    const extraButton = document.querySelector('#extraButton');
    extraButton.classList.remove('hidden');
    extraButton.classList.add('visible');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Ocultar la imagen
    const cardImage = document.querySelector('#cardImage');
    cardImage.classList.add('hidden');
    cardImage.classList.remove('visible');

    // Ocultar el botón adicional
    const extraButton = document.querySelector('#extraButton');
    extraButton.classList.add('hidden');
    extraButton.classList.remove('visible');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});


// Referencia al audio y controles
const musicElement = document.getElementById('music');
const audioControls = document.getElementById('audioControls');

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Mostrar la imagen
    const cardImage = document.querySelector('#cardImage');
    cardImage.classList.remove('hidden');
    cardImage.classList.add('visible');

    // Mostrar el botón adicional
    const extraButton = document.querySelector('#extraButton');
    extraButton.classList.remove('hidden');
    extraButton.classList.add('visible');

    // Reproducir el audio
    musicElement.play();

    // Mostrar controles de audio
    audioControls.classList.remove('hidden');
    audioControls.classList.add('visible');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Ocultar la imagen
    const cardImage = document.querySelector('#cardImage');
    cardImage.classList.add('hidden');
    cardImage.classList.remove('visible');

    // Ocultar el botón adicional
    const extraButton = document.querySelector('#extraButton');
    extraButton.classList.add('hidden');
    extraButton.classList.remove('visible');

    // Pausar el audio
    musicElement.pause();
    musicElement.currentTime = 0;

    // Ocultar controles de audio
    audioControls.classList.add('hidden');
    audioControls.classList.remove('visible');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});

function play() {
  musicElement.play();
}

function pause() {
  musicElement.pause();
}
