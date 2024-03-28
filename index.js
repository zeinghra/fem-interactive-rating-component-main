const template = document.querySelector('[data-js-template]');
const formElement = document.querySelector('[data-js-form]');
const wrapper = document.querySelector('[data-js-wrapper]');
const radioBtns = document.querySelectorAll('input');

formElement.addEventListener("submit", ()=>{
    event.preventDefault();
    const rating = new FormData(event.target).get("rating");
    if (rating) {
        wrapper.innerHTML = template.innerHTML.replace(/{{ rating }}/, rating);
        wrapper.classList.add('thankU');
    }
})
