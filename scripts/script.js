function showPassword() {
  // Zde by bylo připojení k proměnné prostředí nebo jiného zabezpečeného místa, kde je uloženo heslo
  const secretPassword = process.env.MOJE_TAJNE_HESLO;

  // Vypsání hesla na obrazovku (pouze pro demonstrační účely)
  document.getElementById('passwordContainer').innerText = `Heslo: ${secretPassword}`;
}
