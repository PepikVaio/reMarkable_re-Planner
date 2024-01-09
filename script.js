// Vložte tuto část na začátek vašeho kódu
const script = document.createElement('script');
script.src = 'https://raw.githubusercontent.com/user/repo/main/secret.js';  // Nahraďte skutečnou cestou k souboru
document.head.appendChild(script);


document.getElementById('showQRButton').addEventListener('click', function() {
    var enteredCode = document.getElementById('codeInput').value;
    var correctCode = 'testovyKod';  // Nahraďte skutečným kódem

    if (enteredCode === correctCode) {
        // Otevření vyskakovacího okna
        document.getElementById('myModal').style.display = 'block';
    } else {
        alert('Nesprávný kód. Zkuste to znovu.');
    }
});

// Zavření vyskakovacího okna kliknutím na ikonu X
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

// Zavření vyskakovacího okna kliknutím mimo obsah
window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
