const formatter = require('./formatter');

document.addEventListener('DOMContentLoaded', () => {
    const inputTextArea = document.getElementById('inputText');
    const outputTextArea = document.getElementById('outputText');
    const formatButton = document.getElementById('formatButton');

    formatButton.addEventListener('click', () => {
        const inputText = inputTextArea.value;
        const participants = ['参加者A', '参加者B']; // 参加者の名前をここに追加
        const formattedText = formatter.formatMinutes(inputText, participants);
        outputTextArea.value = formattedText;
    });
});