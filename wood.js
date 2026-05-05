const images = [];
for (let i = 1; i <= 18; i++) {
    images.push(`images/woodworking/cabinet${i}.jpg`);
}

let index = 0;

const imgElement = document.getElementById("cabinetImage");
const gallery = document.getElementById("cabinetGallery");

let isHovering = false;

// Hover aktivieren
gallery.addEventListener("mouseenter", () => {
    isHovering = true;
});

gallery.addEventListener("mouseleave", () => {
    isHovering = false;
});

// Scroll control
gallery.addEventListener("wheel", (e) => {

    if (!isHovering) return;

    e.preventDefault();

    if (e.deltaY > 0) {
        // scroll down → next image
        index = Math.min(index + 1, images.length - 1);
    } else {
        // scroll up → previous image
        index = Math.max(index - 1, 0);
    }

    imgElement.src = images[index];
});
