document.addEventListener("DOMContentLoaded", () => {
    const images = [];
    for (let i = 1; i <= 18; i++) {
        images.push(`images/woodworking/cabinet${i}.jpg`);
    }

    let index = 0;

    const imgElement = document.getElementById("cabinetImage");
    const gallery = document.getElementById("cabinetGallery");

    // Safety check (prevents silent crashes)
    if (!imgElement || !gallery) {
        console.error("Missing HTML elements!");
        return;
    }

    // Set initial image
    imgElement.src = images[index];

    let isHovering = false;

    gallery.addEventListener("mouseenter", () => {
        isHovering = true;
    });

    gallery.addEventListener("mouseleave", () => {
        isHovering = false;
    });

    gallery.addEventListener("wheel", (e) => {
        if (!isHovering) return;

        e.preventDefault();

        if (e.deltaY > 0) {
            index = Math.min(index + 1, images.length - 1);
        } else {
            index = Math.max(index - 1, 0);
        }

        imgElement.src = images[index];
    }, { passive: false });
});
