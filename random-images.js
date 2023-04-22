    const imageUrls = [
        'https://elmisionero69.files.wordpress.com/2023/04/imagen-sin-tu00edtulo-70-edited.jpg',
        'https://elmisionero69.files.wordpress.com/2023/04/imagen-sin-tu00edtulo-58.jpg',
        'https://elmisionero69.files.wordpress.com/2023/04/imagen-sin-tu00edtulo-27.jpg',
        'https://elmisionero69.files.wordpress.com/2023/04/imagen-sin-tu00edtulo-15.jpg',
        'https://elmisionero69.files.wordpress.com/2023/04/imagen-sin-tu00edtulo-14.jpg',
        'https://elmisionero69.files.wordpress.com/2023/04/imagen-sin-tu00edtulo-46.jpg',
        'https://elmisionero69.files.wordpress.com/2023/04/imagen-sin-tu00edtulo-45.jpg',


    ];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
    }

    function displayRandomImages() {
        const imageElements = document.querySelectorAll('.random-images img');

        for (let img of imageElements) {
            const randomImageUrl = getRandomImage();
            img.src = randomImageUrl;
        }
    }

    displayRandomImages();
