// scripts/script.js
var enteredCode = process.env.ENTERED_CODE;
var correctCode = process.env.MY_SECRET_CODE;

if (enteredCode === correctCode) {
    console.log('Code is correct!');
} else {
    console.error('Incorrect code!');
    process.exit(1);
}
