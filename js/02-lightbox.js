import { galleryItems } from './gallery-items.js';
// Change code below this line

// const ref = {
//     ul : document.querySelector('.gallery')
// }

// const markup = galleryItems.map(({preview, original, description}) =>
// `<li class="gallery__item">
// <a 
//    class="gallery__link" 
//    href=${original}>
//    <img 
//        class="gallery__image" 
//        src=${preview} 
//        alt=${description} />
// </a>
// </li>`)
// .join("");

// ref.ul.innerHTML = markup;

// ref.ul.addEventListener('click', onItemButtomClick);

// function onItemButtomClick (event) {
//     event.preventDefault();
//     const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt"});

// }

const divGallery = document.querySelector('.gallery');

const galleryImage = galleryItems.map(({ preview, original, description })=>{
    const photoEl = `
    <a class="gallery__item"
        href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
        />
    </a>
    `;
    return photoEl;
});

const stringGallery = galleryImage.join('');
divGallery.innerHTML = stringGallery;

divGallery.addEventListener('click', onDivGalleryClick);

function onDivGalleryClick(event) {
    event.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a'
    , { 
        captionDelay: 250,
        captionsData: "alt"}
    );
};