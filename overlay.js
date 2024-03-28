document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.certificates-wrap img');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    images.forEach(img => {
        img.addEventListener('click', function() {
            const largeImgSrc = this.src;
            const largeImg = document.createElement('img');
            largeImg.src = largeImgSrc;
            overlay.innerHTML = '';
            overlay.appendChild(largeImg);
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', function() {
        this.style.display = 'none';
    });
});