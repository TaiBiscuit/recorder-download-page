const carrouselSections = document.querySelectorAll('.car-section');
const didYouKnow = document.querySelectorAll('.question-list');

carrouselSections.forEach(car => {
    car.addEventListener('click', (e) => {
        console.log(e.target)
    })
})

didYouKnow.forEach(section => {
    section.addEventListener('click', (e) => {
        let child = e.target.firstElementChild;
        if(child){
            if(child.classList.contains('hidden')){
                child.classList.remove('hidden')
            } else {
                child.classList.add('hidden');
            }
        }
    })
})