let message = '';
const prompt = require('prompt-sync')({sigint: true});;
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let maxLength = null;
try {
    maxLength = Number(prompt('Enter the max length for the number'));
} catch(err) {
    console.log(err);
    console.log('Max Length is 7\n7 is the default value');
    maxLength = 7;
}
const messageLength = Math.floor(Math.random() * maxLength);
for(let i = 0; i++; i < messageLength) {
    message += alphabet[Math.floor(Math.random() * 26)];
}
console.log(`Random Message ${message}`);