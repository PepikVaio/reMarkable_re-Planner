document.getElementById('showQRButton').addEventListener('click', function() {
    var enteredCode = document.getElementById('codeInput').value;
    
    // Nahraďte následující řádek načtením citlivé informace ze tajemství
    var correctCode = process.env.MY_SECRET_CODE;  // Nahraďte názvem vašeho tajemství

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
