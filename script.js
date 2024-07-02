// Kada se dokument učita, izvrši ovu funkciju
document.addEventListener('DOMContentLoaded', function() {
    const typedText = document.getElementById('typed-text'); // Pronađi element sa id-jem 'typed-text'
    
    // Inicijalizuj Typed.js samo kada je "About" sekcija u vidokrugu
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Inicijalizuj Typed.js
                new Typed('#typed-text', {
                    strings: ["Hi, my name is Ziba Salčinović"], // Tekst koji će se prikazati
                    typeSpeed: 50, // Brzina kucanja u milisekundama
                    backSpeed: 30, // Brzina brisanja u milisekundama
                    backDelay: 1000, // Odlaganje pre nego što se počne brisati
                    startDelay: 500, // Odlaganje pre nego što se počne kucati
                    loop: false, // Da li treba da se ponavlja
                    showCursor: false, // Da li treba prikazati kursor
                });

                // Prestani sa posmatranjem kada se tekst prikaže
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Kada je 50% sekcije u vidokrugu
    });

    // Počni sa posmatranjem "About" sekcije
    observer.observe(document.getElementById('about'));
});

// Dodaj listener za submit događaj na formi sa id-jem 'contact-form'
document.getElementById('contact-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value; // Preuzmi vrednost iz polja 'name'
    let email = document.getElementById('email').value; // Preuzmi vrednost iz polja 'email'
    let message = document.getElementById('message').value; // Preuzmi vrednost iz polja 'message'

    // Ako je bilo koje polje prazno, prikaži upozorenje i spreči slanje forme
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        event.preventDefault();
    } else {
        alert('Message sent successfully!'); // Prikaži poruku o uspešnom slanju
    }
});
