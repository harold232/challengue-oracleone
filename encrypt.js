function encrypText(text) {
    let encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    return encryptedText;
}

function decrypText(text) {
    let decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    return decryptedText;
}

document.getElementById('encrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value.toLowerCase();
    const encryptedText = encrypText(inputText);

    const outputArea = document.getElementById('output-area');

    if (document.getElementById('encrypted-text')) {
        document.getElementById('encrypted-text').textContent = encryptedText;
    } else {
        const outputText = document.createElement('p');
        outputText.id = 'encrypted-text';
        outputText.textContent = encryptedText;
        outputArea.appendChild(outputText);
    }

    document.getElementById('output-image').style.display = 'none';
    outputArea.style.display = 'block';
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value.toLowerCase();
    const decryptedText = decrypText(inputText);

    const outputArea = document.getElementById('output-area');

    if (document.getElementById('encrypted-text')) {
        document.getElementById('encrypted-text').textContent = decryptedText;
    } else {
        const outputText = createElement('p');
        outputText.id = 'encrypted-text';
        outputText.textContent = decryptedText;
        outputArea.appendChild(outputText);
    }
    console.log('area');
    document.getElementById('output-image').style.display = 'none';
    outputArea.style.display = 'block';
});