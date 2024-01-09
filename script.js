document.getElementById('showQRButton').addEventListener('click', function() {
    var enteredCode = process.env.ENTERED_CODE; // Získání hodnoty z prostředí
    var correctCode = process.env.MY_CODE; // Získání hodnoty z GitHub Secret prostředí
    
    if (enteredCode === correctCode) {
        // Otevření vyskakovacího okna
        document.getElementById('myModal').style.display = 'block';
        console.log('Code is correct!');
    } else {
        alert('Nesprávný kód. Zkuste to znovu.');
        console.error('Incorrect code!');
        process.exit(1); // Ukončení s chybou
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
