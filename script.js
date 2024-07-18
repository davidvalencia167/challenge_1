document.addEventListener('DOMContentLoaded', function() {
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const inputText = document.getElementById('input-text');
    const outputMessage = document.getElementById('output-message');

    // Función para encriptar el texto
    function encrypt(text) {
        // Lógica simple de encriptación (puedes ajustar según sea necesario)
        return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    }

    // Función para desencriptar el texto
    function decrypt(text) {
        // Lógica simple de desencriptación (puedes ajustar según sea necesario)
        return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    }

    encryptBtn.addEventListener('click', function() {
        const text = inputText.value;
        if (text) {
            const encryptedText = encrypt(text);
            outputMessage.textContent = encryptedText;
        } else {
            outputMessage.textContent = 'Ningún mensaje fue encontrado';
        }
    });

    decryptBtn.addEventListener('click', function() {
        const text = inputText.value;
        if (text) {
            const decryptedText = decrypt(text);
            outputMessage.textContent = decryptedText;
        } else {
            outputMessage.textContent = 'Ningún mensaje fue encontrado';
        }
    });
});
