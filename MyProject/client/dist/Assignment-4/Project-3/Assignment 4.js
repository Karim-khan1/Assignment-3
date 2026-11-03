const images = document.querySelectorAll(".draggable");
const boxes = document.querySelectorAll(".drop-box");

// Drag start for all draggable images
images.forEach((image) => {
    image.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        console.log(`Started dragging image: ${e.target.id}`);
    });
});

// Drag and drop for all drop boxes
boxes.forEach((box, index) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.classList.add("hovered");
        console.log(`Dragging over box ${index + 1}`);
    });

    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    });

    box.addEventListener("drop", (e) => {
        e.preventDefault();

        const draggedId = e.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(draggedId);

        // Remove placeholder text
        if (box.textContent.trim() === "Drop Here") {
            box.textContent = "";
        }

        box.appendChild(draggedElement);
        box.classList.remove("hovered");

        console.log(`Dropped image ${draggedId} into box ${index + 1}`);
    });
});

console.log("All draggable images and drop boxes are ready.");
console.log("You can drag any image into any box.");