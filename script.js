var slideIndex = 1;
var startX;
var isDragging = false; 
var touchOffset = 50;
function showImage(n) {
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dots');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    dots[slideIndex - 1].className += ' active';
}
showImage(slideIndex);

function plusIndex(n) {
    showImage((slideIndex += n));
}

function currentSlide(n) {
    showImage((slideIndex = n));
}
document.addEventListener('mousedown', handleMouseDown, false);
document.addEventListener('mousemove', handleMouseMove, false);
document.addEventListener('mouseup', handleMouseUp, false);

function handleMouseDown(event) {
    startX = event.clientX;
    isDragging = true;
}
function handleMouseMove(event) {
    if (!isDragging) return;

    var moveX = event.clientX - startX;
    if (moveX > touchOffset) {
        plusIndex(-1); 
        startX = event.clientX;
    } else if (moveX < -touchOffset) {
        plusIndex(1); 
        startX = event.clientX;
    }
}

function handleMouseUp() {
    isDragging = false;
}