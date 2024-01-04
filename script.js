document.getElementById('showQRButton').addEventListener('click', function() {
    var enteredCode = document.getElementById('codeInput').value;
    var correctCode = 'testovyKoda';  // Nahraďte skutečným kódem

    if (enteredCode === correctCode) {
        document.getElementById('qrCodeContainer').style.display = 'block';
    } else {
        alert('Nesprávný kód. Zkuste to znovu.');
    }
});
