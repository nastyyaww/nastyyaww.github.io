const stars = document.querySelectorAll('.stars svg');
let currentRating = 0;

function setRating(rating) {
    stars.forEach((star, index) => {
        const polygon = star.querySelector('polygon');
        if (index < rating) {
            polygon.setAttribute('fill', '#FFD700');
        } else {
            polygon.setAttribute('fill', '#FFE4B5');
        }
    });
    currentRating = rating;
}

setRating(0);

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        setRating(index + 1);
    });
});
document.querySelector('.button1 button[type="reset"]').addEventListener('click', function() {
    setRating(0);
});


function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.querySelector('form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const message = document.querySelector('textarea').value;
    
    if (!validateEmail(email)) {
        alert('Введите корректный email');
        e.preventDefault();
        return false;
    }
    
    if (!message.trim()) {
        alert('Напишите сообщение');
        e.preventDefault();
        return false;
    }
    
    alert('Спасибо за обращение!');
});