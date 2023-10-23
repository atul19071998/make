const thumbnails = document.querySelectorAll('.thumbnail');
const displayedImage = document.getElementById('displayed-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Set the displayed image source to the clicked thumbnail's source
        displayedImage.src = thumbnail.src;
        displayedImage.alt = thumbnail.alt;
    });
});

