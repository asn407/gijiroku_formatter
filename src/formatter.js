function formatMinutes(text, participants) {
    const lines = text.split('。');
    let formattedText = '';
    let lastSpeaker = '';

    lines.forEach((line) => {
        const trimmedLine = line.trim();
        if (trimmedLine.length === 0) return;

        const speakerMatch = trimmedLine.match(/^(.+?):/);
        if (speakerMatch) {
            const currentSpeaker = speakerMatch[1].trim();

            if (currentSpeaker !== lastSpeaker) {
                if (formattedText.length > 0) {
                    formattedText += '\n'; // Insert a blank line when the speaker changes
                }
                lastSpeaker = currentSpeaker;
            } else {
                // Remove the speaker's name from the line if it's the same as the last speaker
                trimmedLine = trimmedLine.replace(/^.+?:\s*/, '');
            }
        }

        formattedText += trimmedLine + '。'; // Re-add the period at the end of the line
    });

    return formattedText.trim();
}