
// Добавьте в ваш main.js
document.addEventListener('DOMContentLoaded', function() {
    const burgerCheckbox = document.getElementById('burger');
    const label = document.querySelector('label');
    
    if (burgerCheckbox && label) {
        const originalSpan = label.querySelector('span');
        
        burgerCheckbox.addEventListener('change', function() {
            if (this.checked) {
                // Меняем на крестик
                originalSpan.innerHTML = "&#215";
                originalSpan.style.fontSize = '50px';
                originalSpan.style.transform = 'translateY(-5px)';
                originalSpan.style.display = 'inline-block';
            } else {
                // Меняем обратно на три полосы
                originalSpan.innerHTML = '&#8801';
                originalSpan.style.fontSize = '60px';
                originalSpan.style.transform = 'none';
            }
        });
    }
});


/*кнопки */
// Ждём загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Массив с путями к картинкам (добавьте свои)
    const images = [
        "pictures/цветы.jpg",
        "pictures/pion.jpg",
        "pictures/roses.jpg",
        
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