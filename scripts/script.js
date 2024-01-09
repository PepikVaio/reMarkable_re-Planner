// Kontrola, zda je objekt document definován (pracujeme ve webovém prostředí)
if (typeof document !== 'undefined') {
    // Kód pracující s DOMem
    document.getElementById('showQRButton').addEventListener('click', function() {
        var enteredCode = document.getElementById('codeInput').value;
      //var correctCode = 'kocka';  // Nahraďte skutečným kódem
        var correctCode = process.env.MY_SECRET_CODE;  // Použití proměnné prostředí

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
}
