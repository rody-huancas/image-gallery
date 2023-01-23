// Galería creada con puro JavaScript

document.addEventListener("DOMContentLoaded", () => {
    crearGaleria();
});

function crearGaleria() {
    const gallery = document.querySelector(".gallery-image");
    // recorrer las 12 imágenes
    for (let i = 1; i <= 12; i++) {
        const image = document.createElement("PICTURE");
        image.classList.add("image")
        image.innerHTML = `
            <img src="assets/images/${i}.jpg" alt="Image gallery" loading="lazy" />
        `;

        // cuando demos click en una imagen
        image.onclick = function () {
            showImage(i);
        }

        gallery.appendChild(image);
    }
}

function showImage(id) {
    const image = document.createElement("PICTURE");
    image.innerHTML = `
        <img src="assets/images/${id}.jpg" alt="Image gallery" loading="lazy" />
    `;

    // crear overlay con la imagen
    const overlay = document.createElement("DIV");
    overlay.appendChild(image);
    overlay.classList.add("overlay");
    overlay.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove("fix-body");
        overlay.remove();
    }

    // botón para cerrar el modal
    const closeModal = document.createElement('P');
    closeModal.textContent = 'x';
    closeModal.classList.add("btn-close");
    closeModal.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove("fix-body");
        overlay.remove();
    }

    // agregar botón al overlay
    overlay.appendChild(closeModal);

    // agregar al hmtl
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add("fix-body");
}