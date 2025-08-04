function caesarEncrypt(text, shift) {
    return text.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            return char;
        }
    }).join('');
}
function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, (26 - (shift % 26)) % 26);
}

function handleEncrypt() {
    const input = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shiftKey').value, 10) || 0;
    document.getElementById('outputText').value = caesarEncrypt(input, shift);
}
function handleDecrypt() {
    const input = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shiftKey').value, 10) || 0;
    document.getElementById('outputText').value = caesarDecrypt(input, shift);
}
function handleClear() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}
