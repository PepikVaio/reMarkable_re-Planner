document.getElementById('showQRButton').addEventListener('click', function() {
    var enteredCode = document.getElementById('codeInput').value;
    var correctCode = 'test';  // Nahraďte skutečným kódem

    if (enteredCode === correctCode) {
        var qrCodeContainer = document.getElementById('qrCodeContainer');
        qrCodeContainer.innerHTML = '<img src="https://placekitten.com/200/200" alt="Nový QR kód">';
        qrCodeContainer.style.display = 'block';
    } else {
        alert('Nesprávný kód. Zkuste to znovu.');
    }
});
