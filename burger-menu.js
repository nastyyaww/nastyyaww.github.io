document.addEventListener('DOMContentLoaded', function() {
    const burgerCheckbox = document.getElementById('burger');
    const label = document.querySelector('label');
    
    if (burgerCheckbox && label) {
        const originalSpan = label.querySelector('span');
        
        burgerCheckbox.addEventListener('change', function() {
            if (this.checked) {
                originalSpan.innerHTML = "&#215";
                originalSpan.style.fontSize = '90px';
                originalSpan.style.display = 'inline-block';
                  originalSpan.style.transform = 'translateY(0px)';
            } else {
                originalSpan.innerHTML = '&#8801';
                originalSpan.style.fontSize = '90px';
                originalSpan.style.transform = 'none';
            }
        });
    }
});

let scrollBlocked = false;

function blockScroll(e) {
    if (scrollBlocked) {
        e.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const burgerCheckbox = document.getElementById('burger');
    
    if (burgerCheckbox) {
        burgerCheckbox.addEventListener('change', function() {
            if (this.checked) {
                scrollBlocked = true;
                document.addEventListener('wheel', blockScroll, { passive: false });
                document.addEventListener('touchmove', blockScroll, { passive: false });
                document.body.style.overflow = 'hidden';
            } else {
                scrollBlocked = false;
                document.removeEventListener('wheel', blockScroll);
                document.removeEventListener('touchmove', blockScroll);
                document.body.style.overflow = '';
            }
        });
    }
});

