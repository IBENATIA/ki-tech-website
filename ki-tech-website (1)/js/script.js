function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const messages = document.getElementById('messages');

    // Simulate user message
    const userMessage = document.createElement('div');
    userMessage.textContent = 'Vous: ' + userInput;
    messages.appendChild(userMessage);

    // Clear input
    document.getElementById('userInput').value = '';

    // Simulate bot response after a delay
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.textContent = 'Bot: Merci pour votre message, un de nos agents vous répondra bientôt !';
        messages.appendChild(botMessage);
    }, 1000);
}