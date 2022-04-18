let allSlides = document.getElementsByClassName('slide');
let currentSlide = 0;

let chekingFirstAndLastSlide = () => {
    currentSlide = (currentSlide >= allSlides.length) ? 0 : (currentSlide < 0 ? allSlides.length - 1 : currentSlide);
}; 
let slideShow = () => {
    allSlides[currentSlide].classList.add('active');
    setInterval(() => {
        allSlides[currentSlide].classList.remove('active');
        currentSlide++; 
        chekingFirstAndLastSlide();       
        allSlides[currentSlide].classList.add('active');
        console.log(currentSlide);        
    }, 3000);
};

// setInterval(() => {
//     allSlides[currentSlide].classList.remove('active');
//     currentSlide++;
//     allSlides[currentSlide].classList.add('active');
//     currentSlide = (currentSlide === allSlides.length - 1) ? 0 : currentSlide;
    
// }, 3000);


/* setInterval(() => {
    currentSlide++;
    allSlides[currentSlide - 1].classList.remove('active');
    allSlides[currentSlide].classList.add('active');
    currentSlide = (currentSlide === allSlides.length - 1) ? 0 : currentSlide;
    
}, 3000); */

document.getElementById('next').addEventListener('click',() => {
    allSlides[currentSlide].classList.remove('active');
    currentSlide++;
    chekingFirstAndLastSlide();
    allSlides[currentSlide].classList.add('active');
});
document.getElementById('prev').addEventListener('click',() => {
    allSlides[currentSlide].classList.remove('active');
    currentSlide--;
    chekingFirstAndLastSlide();
    allSlides[currentSlide].classList.add('active');
});
slideShow();