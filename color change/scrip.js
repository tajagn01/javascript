const boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach((box) => {
    box.addEventListener('click', () => {
        const color = box.getAttribute('data-color');
        document.body.style.background = color;
    });
});
