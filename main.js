document.addEventListener('DOMContentLoaded', function() {
    // Массив с путями к картинкам
    const images = [
        "pictures/b2.png",
        "pictures/h2.png",
        "pictures/h3.png",
        "pictures/h4.png",
        "pictures/sb4.png"
    ];
    
    let currentIndex = 0;
    
    const imgElement = document.querySelector('.kartinki img');
    const leftButton = document.querySelector('.button1');
    const rightButton = document.querySelector('.button2');
    
    if (!imgElement || !leftButton || !rightButton) return;
    
    function updateImage() {
        imgElement.style.opacity = '0';
        setTimeout(() => {
            imgElement.src = images[currentIndex];
            imgElement.style.opacity = '1';
        }, 150);
    }
    
    leftButton.addEventListener('click', function(e) {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
    
    rightButton.addEventListener('click', function(e) {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
    
    // Добавляем визуальный эффект при наведении на кнопки
    leftButton.style.cursor = 'pointer';
    rightButton.style.cursor = 'pointer';
});