document.getElementById('showQRButton').addEventListener('click', function() {
    var enteredCode = document.getElementById('codeInput').value;

    // Volání API pro získání správného kódu
    fetch('/api/getCorrectCode')  // Nahraďte skutečnou cestou k API
        .then(response => response.json())
        .then(data => {
            var correctCode = data.correctCode;

            if (enteredCode === correctCode) {
                // Otevření vyskakovacího okna
                document.getElementById('myModal').style.display = 'block';
            } else {
                alert('Nesprávný kód. Zkuste to znovu.');
            }
        })
        .catch(error => {
            console.error('Chyba při získávání kódu:', error);
        });
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
