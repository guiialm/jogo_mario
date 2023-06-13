const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const pulo = () => {
    mario.classList.add('pulo');
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);

}


const loop = setInterval(()  => {
    const pipePosition = pipe.offsetLeft;
    const marioPositon = +window.getComputedStyle(mario).bottom.replace('px', '');



    
    if (pipePosition <= 120 && pipePosition > 0 && marioPositon < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = ` ${pipePosition}px`;

    }

}, 10) 

document.addEventListener('keydown', pulo);