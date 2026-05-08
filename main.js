/*кнопки */
// Ждём загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Массив с путями к картинкам (добавьте свои)
    const images = [
        "pictures/b2.png",
        "pictures/h2.png",
        "pictures/h3.png",
        "pictures/h4.png",
        "pictures/sb4.png"
        
    ];
    
    let currentIndex = 0;
    
    // Находим элементы
    const imgElement = document.querySelector('.kartinki img');
    const leftButton = document.querySelector('.button1');
    const rightButton = document.querySelector('.button2');
    
    // Функция обновления картинки
    function updateImage() {
        imgElement.src = images[currentIndex];
        // Добавляем плавный эффект
        imgElement.style.opacity = '0';
        setTimeout(() => {
            imgElement.style.opacity = '1';
        }, 50);
    }
    
    // Обработчик для левой кнопки (предыдущая картинка)
    leftButton.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1; // Переход на последнюю
        }
        updateImage();
    });
    
    // Обработчик для правой кнопки (следующая картинка)
    rightButton.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; // Переход на первую
        }
        updateImage();
    });
    
    // Добавляем эффект наведения на кнопки
    const buttons = [leftButton, rightButton];
    buttons.forEach(button => {
        button.style.cursor = 'pointer';
        button.addEventListener('mouseenter', function() {
            this.querySelector('rect').setAttribute('fill', '#FF6B82');
        });
        button.addEventListener('mouseleave', function() {
            this.querySelector('rect').setAttribute('fill', '#FF8FA1');
        });
    });
});