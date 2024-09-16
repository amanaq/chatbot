function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Display user's message
    addMessageToChat('user', userInput);

    // Basic bot responses
    let botResponse = 'I am not sure how to respond to that.';
    if (userInput.toLowerCase().includes('hello')) {
        botResponse = 'Hello! How can I assist you today?';
    } else if (userInput.toLowerCase().includes('how are you')) {
        botResponse = 'I am just a bot, but thanks for asking!';
    } else if (userInput.toLowerCase().includes('bye')) {
        botResponse = 'Goodbye! Have a nice day!';
    }

    // Display bot's response
    addMessageToChat('bot', botResponse);

    // Clear the input field
    document.getElementById('user-input').value = '';
}

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
