import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery');

const galleryIt = galleryItems.forEach((galleryItem) => {
    console.log(galleryItem);
    const itemsDiv = [];
    itemsDiv.push(galleryItem.preview);

    galleryWrapper.insertAdjacentHTML('afterbegin', Array(itemsDiv.length).fill(`<div class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" alt=${galleryItem.description} src=${galleryItem.preview} data-source=${galleryItem.original} width="350" height="300"/></a></div>`).join("")); 

});

galleryWrapper.addEventListener('click', openOriginImgClick); 

function openOriginImgClick(event) {
  event.preventDefault();
    const originalImgLink = event.target.dataset.source;
    const originalImgCreate = `<img src="${originalImgLink}" width="100%" height="100%">`
    const instance = basicLightbox.create(originalImgCreate);

    instance.show();

    window.addEventListener("keydown", originalImgClose);   
    function originalImgClose(event) {
    if (event.code === "Escape") {
    instance.close();
    }
    window.removeEventListener("keydown", originalImgClose);
}

}


 
  





    




