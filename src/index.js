const formatter = require('./formatter');

const formatter = require('./formatter');

document.addEventListener('DOMContentLoaded', () => {
    const inputTextArea = document.getElementById('inputText');
    const outputTextArea = document.getElementById('outputText');
    const formatButton = document.getElementById('formatButton');

    formatButton.addEventListener('click', () => {
        const inputText = inputTextArea.value;
        // 入力テキストから参加者名を抽出
        const namePattern = /^(.+?)　.+/gm;
        const names = new Set();
        let match;
        while ((match = namePattern.exec(inputText)) !== null) {
            names.add(match[1].trim());
        }
        const participants = Array.from(names);
        const formattedText = formatter.formatMinutes(inputText, participants);
        outputTextArea.value = formattedText;
    });
});