import { galleryItems } from './gallery-items.js';
// Change code below this line


const ref = {
    ul : document.querySelector('.gallery')
}


const markup = galleryItems.map(({preview, original, description}) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img class="gallery__image"
        src = ${preview}
        data-source=${original}
    alt= ${description}
  />
</a>
</li>`)
.join("");

ref.ul.innerHTML = markup;

ref.ul.addEventListener('click', onItemButtomClick);

function onItemButtomClick (event) {

    event.preventDefault();

    if (event.target.tagName !== "IMG") {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)

     instance.show()

document.addEventListener("keydown", onEscHandleClick);

function onEscHandleClick (event) {
    if(event.code === 'Escape'){
        instance.close();
        document.removeEventListener('keydown', onEscHandleClick);     
    }
  };


}

